import { hasAllLabels, type Labels } from '@xylabs/sdk-js'
import { assertEx } from '@xylabs/sdk-js'
import type { Provider, ProviderMoniker } from '@xyo-network/xl1-protocol'

import type { CreatableProviderFactory, CreatableProviderInstance } from './CreatableProvider.ts'
import type { CreatableProviderContext } from './CreatableProviderContext.ts'
import { type CreatableProviderRegistry, registerCreatableProviderFactory } from './CreatableProviderRegistry.ts'
import type { ProviderFactoryGetInstanceOptions } from './GetInstanceOptions.ts'
import { hasLabels, type LabeledCreatableProviderFactory } from './LabeledCreatableProviderFactory.ts'
import type { ProviderFactoryLocatorInstance } from './ProviderFactoryLocatorInstance.ts'

/**
 * A class which encapsulates the Service Locator Pattern for Provider Factories
 */
export class ProviderFactoryLocator<TContext extends CreatableProviderContext = CreatableProviderContext,
  TMonikers extends ProviderMoniker[] = ProviderMoniker[]> implements ProviderFactoryLocatorInstance<TContext> {
  protected readonly _context: TContext
  protected readonly _registry: CreatableProviderRegistry<TMonikers>

  private _frozen = false

  constructor(context: Omit<TContext, 'locator'>, registry: CreatableProviderRegistry = {}) {
    this._registry = registry
    this._context = { ...context, locator: this } as unknown as TContext
  }

  get context() {
    return this._context
  }

  /**
   * The current registry for the module factory
   */
  get registry(): Readonly<CreatableProviderRegistry> {
    return this._registry
  }

  static empty(context: Omit<CreatableProviderContext, 'locator'>) {
    return new ProviderFactoryLocator(context, {})
  }

  static standard(context: Omit<CreatableProviderContext, 'locator'>) {
    return new ProviderFactoryLocator(context, {})
  }

  freeze() {
    this._frozen = true
  }

  async getInstance<TProvider extends Provider<ProviderMoniker>>(
    moniker: TProvider['moniker'],
    params?: Partial<CreatableProviderInstance<TProvider>['params']>,
    { start = true, labels }: ProviderFactoryGetInstanceOptions = {},
  ) {
    const resolvedParams = {
      ...params,
      context: {
        ...this.context,
        ...params?.context,
      } as CreatableProviderInstance<TProvider>['params']['context'],
    } as CreatableProviderInstance<TProvider>['params']
    const factory = this.locate<TProvider>(moniker, labels)
    const result = await factory.getInstance(resolvedParams, { start })
    return result
  }

  /**
   * Locates a provider factory that matches the supplied moniker and labels
   * @param moniker The config moniker for the provider
   * @param labels The labels for the provider factory
   * @returns A provider factory that matches the supplied moniker and labels or throws if one is not found
   */
  locate<TProvider extends Provider<ProviderMoniker>>(moniker: TProvider['moniker'], labels?: Labels):
    CreatableProviderFactory<CreatableProviderInstance<TProvider>> | LabeledCreatableProviderFactory<CreatableProviderInstance<TProvider>> {
    return assertEx(
      this.tryLocate<TProvider>(moniker, labels),

      () => `No module factory for the supplied config moniker [${moniker}]${labels ? ` & labels [${JSON.stringify(labels)}]` : ''} registered`,
    )
  }

  merge(locator: ProviderFactoryLocatorInstance): ProviderFactoryLocatorInstance {
    const registry = { ...this.registry }
    for (const moniker in locator.registry) {
      if (registry[moniker]) {
        registry[moniker].push(...(locator.registry[moniker] ?? []))
      } else {
        registry[moniker] = locator.registry[moniker]
      }
    }
    return new ProviderFactoryLocator(this.context, registry)
  }

  /**
   * Registers a single module factory (with optional tags) with the locator
   * @param factory The factory to register
   * @param labels The labels for the module factory
   */
  register(factory: CreatableProviderFactory, labels?: Labels, primary: boolean | ProviderMoniker | ProviderMoniker[] = false): this {
    assertEx(!this._frozen, () => 'Cannot register a module factory after the locator has been frozen')
    registerCreatableProviderFactory(this._registry, factory, labels, primary)
    return this
  }

  /**
   * Registers multiple module factories with the locator
   * @param factories The factories to register
   */
  registerMany(factories: CreatableProviderFactory[]): this {
    for (const factory of factories) {
      this.register(factory)
    }
    return this
  }

  async tryGetInstance<TProvider extends Provider<ProviderMoniker>>(
    moniker: TProvider['moniker'],
    params?: Partial<CreatableProviderInstance<TProvider>['params']>,
    options?: ProviderFactoryGetInstanceOptions,
  ) {
    try {
      return await this.getInstance<TProvider>(moniker, params, options)
    } catch {
      return
    }
  }

  /**
   * Tries to locate a module factory that matches the supplied moniker and labels
   * @param moniker The config moniker for the module
   * @param labels The labels for the module factory
   * @returns A module factory that matches the supplied moniker and labels or undefined
   */
  tryLocate<TProvider extends Provider<ProviderMoniker>>(moniker: TProvider['moniker'], labels?: Labels) {
    const result = labels
      // Find the first factory that has labels and has all the labels provided
      ? (this._registry[moniker]?.filter(hasLabels).find(factory => hasAllLabels(factory?.labels, labels)) ?? this._registry[moniker]?.[0])
      // Otherwise, return the first factory
      : this._registry[moniker]?.[0]

    if (result) {
      result.defaultParams = {
        ...result?.defaultParams,
        context: {
          ...this.context,
          ...result?.defaultParams?.context,
        },
      }
    }

    return result as CreatableProviderFactory<CreatableProviderInstance<TProvider>>
      | LabeledCreatableProviderFactory<CreatableProviderInstance<TProvider>> | undefined
  }
}
