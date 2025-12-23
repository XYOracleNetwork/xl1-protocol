import type { WithOptionalLabels } from '@xylabs/sdk-js'

import type { CreatableProviderFactory, CreatableProviderInstance } from './CreatableProvider.ts'

export type LabeledCreatableProviderFactory<T extends CreatableProviderInstance = CreatableProviderInstance> = CreatableProviderFactory<T> & WithOptionalLabels

export const hasLabels = (factory: CreatableProviderFactory | LabeledCreatableProviderFactory): factory is LabeledCreatableProviderFactory => {
  return (factory as LabeledCreatableProviderFactory).labels !== undefined
}

/**
 * Class annotation to be used to decorate Providers which support
 * an asynchronous labeled creation factory pattern
 * @returns The decorated Provider requiring it implement the members
 * of the CreatableProvider as statics properties/methods
 */
export function labeledCreatableProviderFactory<TProvider extends CreatableProviderInstance = CreatableProviderInstance>() {
  return <U extends LabeledCreatableProviderFactory<TProvider>>(constructor: U) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    constructor
  }
}
