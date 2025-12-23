import type {
  CreatableInstance, CreatableParams, EmptyObject,
  Promisable,
} from '@xylabs/sdk-js'
import {
  AbstractCreatable,
  assertEx,
  Base, creatable, delay, IdLogger,
} from '@xylabs/sdk-js'
import { AccountInstance } from '@xyo-network/account-model'
import { Semaphore } from 'async-mutex'

import { Config, getDefaultConfig } from '../config/index.ts'
import { ProviderFactoryLocator, ProviderFactoryLocatorInstance } from '../CreatableProvider/index.ts'
import { BaseContext } from '../model/index.ts'

export type ActorContext = BaseContext & {
  config: Config
  locator?: ProviderFactoryLocatorInstance
  singletons: Record<string, unknown>
}

export type ActorParams<T extends EmptyObject | void = void> = CreatableParams & {
  account: AccountInstance
  context?: ActorContext
  displayName?: string
  id: string
} & (T extends void ? EmptyObject : T)

export type ActorInstance<T extends ActorParams = ActorParams> = CreatableInstance<T>

@creatable()
export class Actor<TParams extends ActorParams = ActorParams> extends AbstractCreatable<TParams> {
  protected readonly _intervals: Map<string, ReturnType<typeof setInterval>> = new Map()
  protected readonly _semaphores: Map<string, Semaphore> = new Map()
  protected readonly _timeouts: Map<string, ReturnType<typeof setTimeout>> = new Map()
  private _active = false

  get displayName() {
    return this.params.displayName ?? this.params.name ?? 'UnnamedActor'
  }

  get id() {
    return this.params.id
  }

  protected get account() {
    return this.params.account!
  }

  protected get config() {
    return this.context.config
  }

  protected get context() {
    return this.params.context!
  }

  protected get locator() {
    return this.context.locator
  }

  protected get logPrefix() {
    return `[${this.displayName} (${this.id})] `
  }

  static override async paramsHandler<T extends ActorInstance>(params?: Partial<T['params']>) {
    const baseParams = await super.paramsHandler(params)
    const id = params?.id ?? baseParams.name ?? 'UnnamedActor'
    const displayName = params?.displayName ?? baseParams.name
    const account = assertEx(params?.account, () => `Account is required for actor ${id}.`)
    const context = await this.initContext({
      ...params, account, id, displayName,
    })
    const logger = context?.logger ?? new IdLogger(Base.defaultLogger ?? console, () => `[${displayName} (${id})] `)
    return {
      ...baseParams, account, context, displayName, id, logger,
    } satisfies ActorParams
  }

  protected static initContext<T extends ActorInstance>(
    params: T['params'],
  ): Promisable<T['params']['context']> {
    const logger = params?.context?.logger
    const config: Config = params?.context?.config ?? getDefaultConfig()
    const singletons = params?.context?.singletons ?? {}

    const context: ActorContext = {
      ...params?.context,
      config,
      logger,
      singletons,
    }

    const locator = params?.context?.locator ?? new ProviderFactoryLocator(context)
    return locator.context
  }

  /**
   * The timer runs until the actor is deactivated (or you manually stop it).
   */
  registerTimer(timerName: string, callback: () => Promise<void>, dueTimeMs: number, periodMs: number) {
    if (!this._active) {
      this.logger?.warn(
        `Cannot register timer '${timerName}' because actor is not active.`,
      )
      return
    }

    let running = false

    this._semaphores.set(timerName, new Semaphore(1))

    const timeoutId = setTimeout(() => {
      const intervalId = setInterval(() => {
        const semaphore = this._semaphores.get(timerName)
        if (!this._active || !this._intervals.has(timerName) || !semaphore || running) return
        if (semaphore.isLocked()) {
          this.logger?.warn(
            `Skipping timer '${this.name}:${timerName}' execution because previous execution is still running.`,
          )
          return
        }
        semaphore.acquire().then(([, release]) => {
          const startTime = Date.now()
          running = true
          callback()
            .then(() => {
              const duration = Date.now() - startTime
              if (duration > periodMs) {
                this.logger?.warn(
                  `Timer '${this.name}:${timerName}' execution took longer (${duration}ms) than the period (${periodMs}ms).`,
                )
              } else if (duration > 5000) {
                this.logger?.warn(
                  `Timer '${this.name}:${timerName}' execution took longer (${duration}ms) than 5000ms.`,
                )
              }
            })
            .catch((error) => {
              this.logger?.error(`Error in timer '${this.name}:${timerName}': ${error}`)
              this.logger?.error(error.stack)
            })
            .finally(() => {
              release()
              running = false
            })
        }).catch((error) => {
          this.logger?.error(`Error acquiring semaphore for timer '${this.name}:${timerName}': ${error}`)
        })
      }, periodMs)

      // store interval so we can clear it on stop()
      this._intervals.set(timerName, intervalId)
    }, dueTimeMs)

    // store timeout so we can clear it on stop() if interval hasn't started yet
    this._timeouts.set(timerName, timeoutId)

    this.logger?.log(
      `Timer '${this.name}:${timerName}' registered: first call after ${dueTimeMs}ms, recurring every ${periodMs}ms.`,
    )
  }

  /**
   * Called by the Orchestrator when the actor is activated.
   */
  override async startHandler() {
    await super.startHandler()
    this._active = true
    this.logger?.log('Started.')
  }

  /**
   * Called by the Orchestrator when the actor is deactivated.
   * Stop all running timers.
   */
  override async stopHandler() {
    await super.stopHandler()
    this._active = false
    this.logger?.log('Stopping all timers...')

    // wait for all semaphores to be free and acquire them to prevent new tasks from starting
    await Promise.all(
      [...this._semaphores.values()].map(async (semaphore) => {
        // Wait for any running tasks to complete
        while (semaphore.isLocked()) {
          this.logger?.log('Waiting for running timer task to complete...')
          await delay(500)
        }
        await semaphore.acquire()
      }),
    )

    this._semaphores.clear()

    for (const [, timeoutRef] of this._timeouts.entries()) {
      clearTimeout(timeoutRef)
    }
    this._timeouts.clear()

    for (const [, intervalRef] of this._intervals.entries()) {
      clearInterval(intervalRef)
    }
    this._intervals.clear()

    this.logger?.log('Stopped.')
  }
}
