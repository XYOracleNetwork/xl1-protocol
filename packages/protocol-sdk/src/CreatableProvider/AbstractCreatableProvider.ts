import { AbstractCreatable, assertEx } from '@xylabs/sdk-js'
import type { Provider, ProviderMoniker } from '@xyo-network/xl1-protocol'

import type {
  CreatableProvider,
  CreatableProviderEventData, CreatableProviderInstance, CreatableProviderParams,
  ProviderMap,
} from './CreatableProvider.ts'
import { ProviderFactory } from './ProviderFactory.ts'

export abstract class AbstractCreatableProvider<TParams extends CreatableProviderParams = CreatableProviderParams,
  TEventData extends CreatableProviderEventData = CreatableProviderEventData> extends AbstractCreatable<TParams, TEventData>
  implements Omit<CreatableProviderInstance, 'moniker'> {
  dependencies: ProviderMap = {}

  protected _contextCache: TParams['context'] | undefined

  abstract readonly moniker: ProviderMoniker

  protected get config() {
    return this.context.config!
  }

  protected get context() {
    return this.params.context!
  }

  protected get locator() {
    return this.context.locator!
  }

  static factory<TInstance extends CreatableProviderInstance, TDependencies extends ProviderMoniker[] = ProviderMoniker[]>(
    this: CreatableProvider<TInstance>,
    dependencies: TDependencies,
    params?: Partial<TInstance['params']>,
  ) {
    const factory = ProviderFactory.withParams<TInstance, TDependencies>(this, dependencies, params)
    return factory
  }

  static async getInstance<T extends CreatableProviderInstance>(
    this: CreatableProvider<T>,
    inParams: T['params'],
  ): Promise<T> {
    const instance = await this.create<T>(inParams)
    return instance
  }

  static override async paramsHandler<T extends CreatableProviderInstance>(
    params: Partial<T['params']> = {},
  ) {
    const context = assertEx(params.context, () => new Error('Context is required'))
    const config = assertEx(context.config, () => new Error('Context config is required'))
    const locator = assertEx(context.locator, () => new Error('Context locator is required'))
    return await super.paramsHandler<T>({
      ...params,
      statusReporter: params.statusReporter ?? context.statusReporter,
      context: {
        ...context, config, locator,
      },
      name: params.name ?? (this as unknown as CreatableProvider<T>).defaultMoniker,
    })
  }

  static async tryGetInstance<T extends CreatableProviderInstance>(
    this: CreatableProvider<T>,
    inParams: T['params'],
  ): Promise<T | undefined> {
    try {
      return await this.create<T>(inParams)
    } catch {
      return
    }
  }

  async locateAndCreate<TProvider extends Provider<ProviderMoniker>,
    TParams extends CreatableProviderInstance<TProvider>['params'] = CreatableProviderInstance<TProvider>['params']>(moniker: TProvider['moniker']) {
    return await this.locator.getInstance<TProvider, TParams>(moniker)
  }

  async tryLocateAndCreate<TProvider extends Provider<ProviderMoniker>,
    TParams extends CreatableProviderInstance<TProvider>['params'] = CreatableProviderInstance<TProvider>['params']>(moniker: TProvider['moniker']) {
    return await this.locator.tryGetInstance<TProvider, TParams>(moniker)
  }
}
