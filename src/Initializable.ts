import type { Logger } from '@xylabs/logger'
import type { EmptyObject } from '@xylabs/object'
import type { Promisable } from '@xylabs/promise'

export type InitializableParams<T extends EmptyObject = {}> = T & {
  logger?: Logger
}

export type Initializable<T extends InitializableParams, R> = (params: T) => Promisable<R>
