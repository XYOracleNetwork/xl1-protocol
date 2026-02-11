import type {
  CreatableInstance, CreatableName, CreatableParams, CreatableStatusReporter, EmptyObject,
  Logger,
} from '@xylabs/sdk-js'
import {
  AbstractCreatable,
  assertEx,
  delay, IdLogger,
} from '@xylabs/sdk-js'
import type { AccountInstance } from '@xyo-network/account-model'
import { Semaphore } from 'async-mutex'
import z from 'zod'

import type { ProviderFactoryLocatorInstance } from '../CreatableProvider/index.ts'

const CreatableNameZod = z.custom<CreatableName>(val => typeof val === 'string' && val.length > 0)
const StatusReporterInstanceZod = z.custom<CreatableStatusReporter>(val => val && typeof val === 'object' && 'report' in val)
const AccountInstanceZod = z.custom<AccountInstance>(val => val && typeof val === 'object' && 'address' in val)

export const ActorParamsV3Zod = z.object({
  account: AccountInstanceZod,
  locator: z.unknown(),
  name: CreatableNameZod,
  statusReporter: StatusReporterInstanceZod.optional(),
})

export type ActorParamsV3Zod = z.infer<typeof ActorParamsV3Zod>

export type ActorParamsV3<T extends EmptyObject | void = void> = CreatableParams & {
  account: AccountInstance
  locator: ProviderFactoryLocatorInstance
} & (T extends void ? EmptyObject : T)

export type ActorInstanceV3<T extends ActorParamsV3 = ActorParamsV3> = CreatableInstance<T>

export abstract class ActorV3<TParams extends ActorParamsV3 = ActorParamsV3> extends AbstractCreatable<TParams> {
  protected readonly _intervals: Map<string, ReturnType<typeof setInterval>> = new Map()
  protected readonly _semaphores: Map<string, Semaphore> = new Map()
  protected readonly _timeouts: Map<string, ReturnType<typeof setTimeout>> = new Map()

  private _logger?: Logger

  override get logger() {
    this._logger = new IdLogger(assertEx(this.context.logger, () => `Logger is required in context for actor ${this.name}.`), () => this.name)
    return this._logger
  }

  protected get account() {
    return this.params.account
  }

  protected get context() {
    return this.locator.context
  }

  protected get locator() {
    return this.params.locator
  }

  static override async paramsHandler<T extends ActorInstanceV3>(params: Partial<T['params']>) {
    const baseParams = await super.paramsHandler({ ...params, name: params.name ?? 'UnknownActor' })
    const account = assertEx(params.account, () => `params.account is required for actor ${baseParams.name}.`)
    const locator = assertEx(params.locator, () => `params.locator is required for actor ${baseParams.name}.`)
    return {
      ...baseParams, account, locator,
    } satisfies ActorParamsV3
  }

  /**
   * The timer runs until the actor is deactivated (or you manually stop it).
   */
  registerTimer(timerName: string, callback: () => Promise<void>, dueTimeMs: number, periodMs: number) {
    if (this.status !== 'starting') {
      this.logger?.warn(
        `Cannot register timer '${timerName}' because actor is not starting.`,
      )
      return
    }

    let running = false

    this._semaphores.set(timerName, new Semaphore(1))

    const timeoutId = setTimeout(() => {
      const intervalId = setInterval(() => {
        const semaphore = this._semaphores.get(timerName)
        if (this.status !== 'started' || !this._intervals.has(timerName) || !semaphore || running) return
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
   * Called by the Orchestrator when the actor is deactivated.
   * Stop all running timers.
   */
  override async stopHandler() {
    await super.stopHandler()
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

export abstract class Actor<TParams extends ActorParamsV3 = ActorParamsV3> extends ActorV3<TParams> {}
