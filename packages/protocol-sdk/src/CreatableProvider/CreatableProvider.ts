import type { EventData } from '@xylabs/events'
import type {
  Creatable, CreatableInstance, CreatableParams,
  Labels, WithOptionalLabels,
} from '@xylabs/sdk-js'
import type { Provider, ProviderMoniker } from '@xyo-network/xl1-protocol'

import type { CreatableProviderContext } from '../model/index.ts'
import type { GetInstanceOptions } from './GetInstanceOptions.ts'
import type { LabeledCreatableProviderFactory } from './LabeledCreatableProviderFactory.ts'

export interface CreatableProviderParams<TContext extends CreatableProviderContext = CreatableProviderContext> extends CreatableParams {
  context: TContext
}
export interface CreatableProviderEventData extends EventData {}

export type CreatableProviderInstance<
  TProvider extends Provider<ProviderMoniker> = Provider<ProviderMoniker>,
  TDependencies extends ProviderMoniker[] = ProviderMoniker[],
  TParams extends CreatableProviderParams = CreatableProviderParams,
  TEventData extends CreatableProviderEventData = CreatableProviderEventData>
  = CreatableInstance<TParams, TEventData> & TProvider & {
    dependencies: ProviderMap<TDependencies[number]>
  }

export type ProviderFactoryScope = 'global' | 'context' | 'local'

export interface CreatableProviderFactory<T extends CreatableProviderInstance = CreatableProviderInstance,
  TDependencies extends ProviderMoniker[] = ProviderMoniker[]>
  extends Omit<CreatableProvider<T>, 'create' | 'createHandler' | 'paramsHandler'> {
  creatableProvider: CreatableProvider<T>
  defaultParams: Omit<T['params'], 'context'>

  readonly dependencies: TDependencies

  labels?: Labels
  providerName: string
  resolvedMoniker: string
  scope: ProviderFactoryScope

  uniqueId: symbol

  getInstance(
    this: CreatableProviderFactory<T>,
    params: T['params'],
    options?: GetInstanceOptions): Promise<T>

  tryGetInstance(
    this: CreatableProviderFactory<T>,
    params: T['params'],
    options?: GetInstanceOptions): Promise<T | undefined>

}

export interface LabeledCreatableProvider<T extends CreatableProviderInstance = CreatableProviderInstance,
  TDependencies extends ProviderMoniker[] = ProviderMoniker[]> extends CreatableProvider<T>, WithOptionalLabels {
  factory(dependencies: TDependencies, params: Omit<T['params'], 'context'>): LabeledCreatableProviderFactory<T>
}

export type ProviderMap<T extends ProviderMoniker = ProviderMoniker> = Partial<Record<T, CreatableProviderInstance<Provider<T>>>>

export interface CreatableProvider<T extends CreatableProviderInstance = CreatableProviderInstance,
  TDependencies extends ProviderMoniker[] = ProviderMoniker[]> extends Creatable<T> {
  readonly defaultMoniker: ProviderMoniker
  readonly dependencies: TDependencies
  readonly monikers: ProviderMoniker[]
  factory(dependencies: TDependencies, params: Omit<T['params'], 'context'>): CreatableProviderFactory<T>
}

/**
 * Class annotation to be used to decorate Providers which support
 * an asynchronous creation pattern
 * @returns The decorated Provider requiring it implement the members
 * of the CreatableProvider as statics properties/methods
 */
export function creatableProvider<TProvider extends CreatableProviderInstance = CreatableProviderInstance>() {
  return <U extends CreatableProvider<TProvider>>(constructor: U) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    constructor
  }
}

/**
 * Class annotation to be used to decorate Providers which support
 * an asynchronous creation pattern
 * @returns The decorated Provider requiring it implement the members
 * of the CreatableProvider as statics properties/methods
 */
export function labeledCreatableProvider<TProvider extends CreatableProviderInstance = CreatableProviderInstance>() {
  return <U extends LabeledCreatableProvider<TProvider>>(constructor: U) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    constructor
  }
}
