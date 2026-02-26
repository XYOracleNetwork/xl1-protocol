import { hasAllLabels, type Labels } from '@xylabs/sdk-js'
import { assertEx } from '@xylabs/sdk-js'
import type { Provider, ProviderMoniker } from '@xyo-network/xl1-protocol'

import type { CreatableProviderContext } from '../model/index.ts'
import type { CreatableProviderFactory, CreatableProviderInstance } from './CreatableProvider.ts'
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
  private _parent?: ProviderFactoryLocatorInstance<TContext>
  private _validateDepsOnRegister: boolean

  constructor(context: (Omit<TContext, 'locator'> & { locator?: TContext['locator'] }), registry: CreatableProviderRegistry = {}, validateDepsOnRegister = false) {
    this._registry = registry
    this._context = { ...context, locator: this } as unknown as TContext
    this._parent = context.locator as ProviderFactoryLocatorInstance<TContext>
    this._validateDepsOnRegister = validateDepsOnRegister
  }

  get context() {
    return this._context
  }

  get logger() {
    return this.context.logger
  }

  /**
   * The current registry for the module factory
   */
  get registry(): Readonly<CreatableProviderRegistry> {
    return this._registry
  }

  protected get validateDepsOnRegister() {
    return this._validateDepsOnRegister
  }

  freeze() {
    this._frozen = true
  }

  async getInstance<TProvider extends Provider<ProviderMoniker>>(
    moniker: TProvider['moniker'],
    { start = true, labels }: ProviderFactoryGetInstanceOptions = {},
  ) {
    return assertEx(
      await this.tryGetInstance<TProvider>(moniker, { start, labels }),
      () => `No provider instance for the supplied config moniker [${moniker}]${labels ? ` & labels [${JSON.stringify(labels)}]` : ''} could be created`,
    )
  }

  has(moniker: TMonikers[number]): boolean {
    return !!this._registry[moniker]
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
    if (this.validateDepsOnRegister) {
      const missingDeps = factory.dependencies.filter(dep => !this.registered(dep))
      assertEx(missingDeps.length === 0, () => `Cannot register module factory [${factory.uniqueId.description}] due to missing dependencies: ${missingDeps.join(', ')}`)
    }
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

  registered(moniker: ProviderMoniker) {
    return !!this.registry[moniker] || (this._parent?.registered(moniker) ?? false)
  }

  async tryGetInstance<TProvider extends Provider<ProviderMoniker>>(
    moniker: TProvider['moniker'],
    { start = true, labels }: ProviderFactoryGetInstanceOptions = {},
  ) {
    const resolvedParams = { context: this.context } as CreatableProviderInstance<TProvider>['params']
    const factory = this.tryLocate<TProvider>(moniker, labels)
    if (factory) {
      if (this.context.singletons[factory.uniqueId]) {
        return this.context.singletons[factory.uniqueId] as CreatableProviderInstance<TProvider>
      }
      this.logger?.info(`Creating provider instance for moniker [${moniker}]${labels ? ` with labels [${JSON.stringify(labels)}]` : ''} using factory [${factory.uniqueId.description}]`)
      const result = await factory.getInstance(resolvedParams, { start })
      this.context.singletons[factory.uniqueId] = result
      return result
    }
  }

  /**
   * Tries to locate a module factory that matches the supplied moniker and labels
   * @param moniker The config moniker for the module
   * @param labels The labels for the module factory
   * @returns A module factory that matches the supplied moniker and labels or undefined
   */
  tryLocate<TProvider extends Provider<ProviderMoniker>>(moniker: TProvider['moniker'], labels?: Labels) {
    const result = (labels
      // Find the first factory that has labels and has all the labels provided
      ? (this._registry[moniker]?.filter(hasLabels).find(factory => hasAllLabels(factory?.labels, labels)) ?? this._registry[moniker]?.[0])
      // Otherwise, return the first factory
      : this._registry[moniker]?.[0]) ?? this._parent?.tryLocate<TProvider>(moniker, labels)

    return result as CreatableProviderFactory<CreatableProviderInstance<TProvider>>
      | LabeledCreatableProviderFactory<CreatableProviderInstance<TProvider>> | undefined
  }
}
