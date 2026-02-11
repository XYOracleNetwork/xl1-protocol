import type { Labels } from '@xylabs/sdk-js'
import { isTruthy } from '@xylabs/sdk-js'
import type { ProviderMoniker } from '@xyo-network/xl1-protocol'

import type { CreatableProviderFactory, CreatableProviderInstance } from './CreatableProvider.ts'
import type { LabeledCreatableProviderFactory } from './LabeledCreatableProviderFactory.ts'
import { providerFactoryDescription } from './ProviderFactory.ts'

export type CreatableProviderRegistry<TMonikers extends ProviderMoniker[] = ProviderMoniker[]>
  = Record<TMonikers[number], (CreatableProviderFactory | LabeledCreatableProviderFactory)[] | undefined>

const buildProviderFactory = <TProvider extends CreatableProviderInstance>(
  provider: CreatableProviderFactory<TProvider>,
  defaultParams: Omit<TProvider['params'], 'context'>,
  labels?: Labels,
): LabeledCreatableProviderFactory<TProvider> => {
  const factory = {
    monikers: provider.monikers,
    uniqueId: Symbol(providerFactoryDescription(provider, labels)),
    // Merge module & supplied labels
    labels: { ...(provider as LabeledCreatableProviderFactory).labels, ...labels },
    creatableProvider: provider.creatableProvider,
    dependencies: provider.dependencies,
    resolvedMoniker: provider.resolvedMoniker,
    scope: provider.scope,
    defaultParams,
    getInstance: provider.getInstance.bind(provider) as LabeledCreatableProviderFactory<TProvider>['getInstance'],
    tryGetInstance: provider.tryGetInstance?.bind(provider) as LabeledCreatableProviderFactory<TProvider>['tryGetInstance'],
    defaultMoniker: provider.defaultMoniker,
    factory: provider.factory.bind(provider) as LabeledCreatableProviderFactory<TProvider>['factory'],
  } satisfies LabeledCreatableProviderFactory<TProvider>
  return factory
}

export const registerCreatableProviderFactory = <TProvider extends CreatableProviderInstance>(
  registry: CreatableProviderRegistry,
  factory: CreatableProviderFactory<TProvider> | LabeledCreatableProviderFactory<TProvider>,
  labels?: Labels,
  /** register this as the primary factory for every schema it supports */
  primary: boolean | ProviderMoniker | ProviderMoniker[] = false,
) => {
  const primaryMonikers
    = primary !== true && isTruthy(primary)
      ? Array.isArray(primary)
        ? primary
        : [primary]
      : []

  for (const primaryMoniker of primaryMonikers) {
    if (!factory.monikers.includes(primaryMoniker)) {
      console.warn(`Primary moniker ${primary} not found in factory monikers`)
    }
  }

  const isPrimaryForMoniker = (moniker: ProviderMoniker) => {
    switch (typeof primary) {
      case 'boolean': {
        return primary
      }
      case 'string': {
        return moniker === primary
      }
      case 'object': {
        if (Array.isArray(primary)) {
          return primary.includes(moniker)
        }
      }
    }
    throw new Error(`Invalid primary value: ${primary}`)
  }

  const factoryClone: LabeledCreatableProviderFactory<TProvider> = buildProviderFactory(factory, factory.defaultParams, labels)

  // add this default moniker as the first entry
  registry[factoryClone.defaultMoniker] = [factoryClone, ...(registry[factoryClone.defaultMoniker] ?? [])]
  for (const moniker of factoryClone.monikers) {
    registry[moniker] = isPrimaryForMoniker(moniker) ? [factoryClone, ...(registry[moniker] ?? [])] : [...(registry[moniker] ?? []), factoryClone]
  }
}

export const registerCreatableProviderFactories = (
  factories: (CreatableProviderFactory | LabeledCreatableProviderFactory)[],
  registry: CreatableProviderRegistry = {},
  primary = false,
) => {
  for (const factory of factories) {
    registerCreatableProviderFactory(registry, factory, undefined, primary)
  }
  return registry
}
