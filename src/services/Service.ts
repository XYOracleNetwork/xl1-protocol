import type { CreatableInstance, CreatableName } from '@xylabs/creatable'

export type ServiceName = Exclude<string, 'reserved-service-name-value'> & CreatableName

export type Service = CreatableInstance<{
  name: ServiceName
}>
