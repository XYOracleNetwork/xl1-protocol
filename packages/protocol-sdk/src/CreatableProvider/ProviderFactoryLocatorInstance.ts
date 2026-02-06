import type { Labels } from '@xylabs/sdk-js'
import type { Provider, ProviderMoniker } from '@xyo-network/xl1-protocol'

import type { CreatableProviderFactory, CreatableProviderInstance } from './CreatableProvider.ts'
import type { CreatableProviderContext } from './CreatableProviderContext.ts'
import type { CreatableProviderRegistry } from './CreatableProviderRegistry.ts'
import type { ProviderFactoryGetInstanceOptions } from './GetInstanceOptions.ts'
import type { LabeledCreatableProviderFactory } from './LabeledCreatableProviderFactory.ts'

export interface ProviderFactoryLocatorInstance<T extends CreatableProviderContext = CreatableProviderContext> {

  context: T

  /**
   * The current registry for the module factory
   */
  registry: Readonly<CreatableProviderRegistry>

  freeze(): void

  getInstance<TProvider extends Provider<ProviderMoniker>>(
    moniker: TProvider['moniker'],
    options?: ProviderFactoryGetInstanceOptions,
  ): Promise<CreatableProviderInstance<TProvider>>

  /**
   * Locates a module factory that matches the supplied moniker and labels
   * @param moniker The config moniker for the module
   * @param labels The labels for the module factory
   * @returns A module factory that matches the supplied moniker and labels or throws if one is not found
   */
  locate<TProvider extends Provider<ProviderMoniker>>(moniker: ProviderMoniker, labels?: Labels):
    CreatableProviderFactory<CreatableProviderInstance<TProvider>> | LabeledCreatableProviderFactory<CreatableProviderInstance<TProvider>> | undefined

  merge(locator: ProviderFactoryLocatorInstance): ProviderFactoryLocatorInstance

  /**
   * Registers a single module factory (with optional tags) with the locator
   * @param factory The factory to register
   * @param labels The labels for the module factory
   */
  register(factory: CreatableProviderFactory, labels?: Labels, primary?: boolean | ProviderMoniker | ProviderMoniker[]): ProviderFactoryLocatorInstance

  /**
   * Registers multiple module factories with the locator
   * @param factories The factories to register
   */
  registerMany(factories: CreatableProviderFactory[]): ProviderFactoryLocatorInstance

  tryGetInstance<TProvider extends Provider<ProviderMoniker>>(
    moniker: TProvider['moniker'],
    options?: ProviderFactoryGetInstanceOptions,
  ): Promise<CreatableProviderInstance<TProvider> | undefined>

  /**
   * Tries to locate a module factory that matches the supplied moniker and labels
   * @param moniker The config moniker for the module
   * @param labels The labels for the module factory
   * @returns A module factory that matches the supplied moniker and labels or undefined
   */
  tryLocate(moniker: ProviderMoniker, labels?: Labels): CreatableProviderFactory | LabeledCreatableProviderFactory | undefined
}
