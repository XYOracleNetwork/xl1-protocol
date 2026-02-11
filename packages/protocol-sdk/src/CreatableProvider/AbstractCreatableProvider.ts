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

  override get logger() {
    return this.context.logger ?? super.logger
  }

  override get meter() {
    return this.context.meterProvider?.getMeter(this.name) ?? super.meter
  }

  override get tracer() {
    return this.context.traceProvider?.getTracer(this.name) ?? super.tracer
  }

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
    params: Omit<TInstance['params'], 'context'>,
  ) {
    const factory = ProviderFactory.withParams<TInstance, TDependencies>(this, dependencies, params)
    return factory
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
      logger: params.logger ?? context.logger,
    })
  }

  async locateAndCreate<TProvider extends Provider<ProviderMoniker>>(moniker: TProvider['moniker']) {
    return await this.locator.getInstance<TProvider>(moniker)
  }

  async tryLocateAndCreate<TProvider extends Provider<ProviderMoniker>>(moniker: TProvider['moniker']) {
    return await this.locator.tryGetInstance<TProvider>(moniker)
  }
}
