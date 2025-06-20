import type { CreatableInstance, CreatableName } from '@xylabs/creatable'

export type ServiceName = CreatableName

export type Service = CreatableInstance<{
  name: ServiceName
}>
