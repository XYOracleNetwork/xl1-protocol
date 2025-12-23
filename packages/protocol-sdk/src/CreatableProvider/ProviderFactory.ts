import type { Labels, WithOptionalLabels } from '@xylabs/sdk-js'
import { assertEx } from '@xylabs/sdk-js'

import type { ProviderMoniker } from '../model/index.ts'
import type {
  CreatableProvider, CreatableProviderFactory, CreatableProviderInstance,
  ProviderFactoryScope,
} from './CreatableProvider.ts'

declare global {
  var xyoServiceSingletons: Record<string, unknown>
}

export class ProviderFactory<TProvider extends CreatableProviderInstance,
  TDependencies extends ProviderMoniker[]> implements CreatableProviderFactory<TProvider> {
  creatableProvider: CreatableProvider<TProvider>

  defaultMoniker: CreatableProvider<TProvider>['monikers'][number]

  defaultParams?: Partial<TProvider['params']>

  dependencies: TDependencies

  labels?: Labels

  monikers: CreatableProvider<TProvider>['monikers']

  scope: ProviderFactoryScope

  constructor(
    creatableProvider: CreatableProvider<TProvider>,
    dependencies: TDependencies,
    params?: Partial<TProvider['params']>,
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
    params?: Partial<TInstance['params']>,
    labels: Labels = {},
  ) {
    return new ProviderFactory<TInstance, TDependencies>(creatableProvider, dependencies, params, labels)
  }

  /** @deprecated use getInstance instead */
  async create(this: CreatableProviderFactory<TProvider>, params?: Partial<TProvider['params']>, start = true): Promise<TProvider> {
    return await this.getInstance(params as TProvider['params'], start)
  }

  factory<TInstance extends CreatableProviderInstance, TDependencies extends ProviderMoniker[]>(
    this: CreatableProviderFactory<TInstance, TDependencies>,
    dependencies: TDependencies,
    params?: Partial<TInstance['params']>,
    labels: Labels = {},
  ) {
    return new ProviderFactory<TInstance, TDependencies>(this.creatableProvider, dependencies, params, labels)
  }

  async getInstance(this: CreatableProviderFactory<TProvider>, params: TProvider['params'], start = true): Promise<TProvider> {
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
      context: {
        ...this.defaultParams?.context,
        ...params?.context,
        config: {
          ...this.defaultParams?.context?.config,
          ...params?.context?.config,
        },
      },
    } as TProvider['params']
    const resultPromise = scopeObject[this.resolvedMoniker] as Promise<TProvider> ?? this.creatableProvider.create<TProvider>(mergedParams)
    scopeObject[this.resolvedMoniker] = resultPromise
    const result = await resultPromise
    if (start) {
      assertEx(await result.start(), () => 'Failed to start provider instance')
    }
    return result
  }

  async tryGetInstance(this: CreatableProviderFactory<TProvider>, params: TProvider['params'], start = true): Promise<TProvider | undefined> {
    try {
      return await this.getInstance(params, start)
    } catch {
      return
    }
  }
}
