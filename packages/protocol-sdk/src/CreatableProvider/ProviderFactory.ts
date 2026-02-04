import type { Labels, WithOptionalLabels } from '@xylabs/sdk-js'
import { assertEx } from '@xylabs/sdk-js'
import type { ProviderMoniker } from '@xyo-network/xl1-protocol'

import type {
  CreatableProvider, CreatableProviderFactory, CreatableProviderInstance,
  ProviderFactoryScope,
} from './CreatableProvider.ts'
import type { GetInstanceOptions } from './GetInstanceOptions.ts'

declare global {
  var xyoServiceSingletons: Record<string, unknown>
}

export class ProviderFactory<TProvider extends CreatableProviderInstance,
  TDependencies extends ProviderMoniker[]> implements CreatableProviderFactory<TProvider> {
  creatableProvider: CreatableProvider<TProvider>

  defaultMoniker: CreatableProvider<TProvider>['monikers'][number]

  defaultParams: Omit<TProvider['params'], 'context'>

  dependencies: TDependencies

  labels?: Labels

  monikers: CreatableProvider<TProvider>['monikers']

  scope: ProviderFactoryScope

  constructor(
    creatableProvider: CreatableProvider<TProvider>,
    dependencies: TDependencies,
    params: Omit<TProvider['params'], 'context'>,
    labels: Labels = {},
    scope: ProviderFactoryScope = 'context',
  ) {
    this.creatableProvider = creatableProvider
    this.defaultParams = params
    this.defaultMoniker = creatableProvider.defaultMoniker
    this.dependencies = dependencies
    this.monikers = creatableProvider.monikers
    this.scope = scope
    assertEx(this.monikers.includes(this.defaultMoniker), () => 'defaultMoniker must be in monikers')
    this.labels = Object.assign({}, (creatableProvider as WithOptionalLabels).labels ?? {}, labels ?? {})
  }

  get resolvedMoniker() {
    const labels: Labels = this.labels ?? {}
    const labelString = Object.entries(labels).map(([key, value]) => `${key}=${value}`).join(',')
    return labelString.length === 0 ? `${this.defaultMoniker}` : `${this.defaultMoniker}|${labelString}`
  }

  static withParams<TInstance extends CreatableProviderInstance, TDependencies extends ProviderMoniker[]>(
    creatableProvider: CreatableProvider<TInstance>,
    dependencies: TDependencies,
    params: Omit<TInstance['params'], 'context'>,
    labels: Labels = {},
  ) {
    return new ProviderFactory<TInstance, TDependencies>(creatableProvider, dependencies, params, labels)
  }

  factory<TInstance extends CreatableProviderInstance, TDependencies extends ProviderMoniker[]>(
    this: CreatableProviderFactory<TInstance, TDependencies>,
    dependencies: TDependencies,
    params: Omit<TInstance['params'], 'context'>,
    labels: Labels = {},
  ) {
    return new ProviderFactory<TInstance, TDependencies>(this.creatableProvider, dependencies, params, labels)
  }

  async getInstance(this: CreatableProviderFactory<TProvider>, params: TProvider['params'], { start = true }: GetInstanceOptions): Promise<TProvider> {
    let scopeObject: Record<string, unknown> = {}
    switch (this.scope) {
      case 'global': {
        if (globalThis.xyoServiceSingletons === undefined) {
          globalThis.xyoServiceSingletons = {}
        }
        scopeObject = globalThis.xyoServiceSingletons
        break
      }
      case 'context': {
        const context = assertEx(
          params?.context,
          () => 'Context is required for context-scoped providers',
        )
        if (context.singletons === undefined) {
          context.singletons = {}
        }
        scopeObject = context.singletons
        break
      }
      default: {
        scopeObject = {}
        break
      }
    }
    const mergedParams: TProvider['params'] = {
      ...this.defaultParams,
      ...params,
    } as TProvider['params']
    const resultPromise = scopeObject[this.resolvedMoniker] as Promise<TProvider> ?? this.creatableProvider.create<TProvider>(mergedParams)
    scopeObject[this.resolvedMoniker] = resultPromise
    const result = await resultPromise
    if (start) {
      assertEx(await result.start(), () => `Failed to start provider instance [${this.resolvedMoniker}]`)
    }
    return result
  }

  async tryGetInstance(
    this: CreatableProviderFactory<TProvider>,
    params: TProvider['params'],
    options?: GetInstanceOptions,
  ): Promise<TProvider | undefined> {
    try {
      return await this.getInstance(params, options)
    } catch {
      return
    }
  }
}
