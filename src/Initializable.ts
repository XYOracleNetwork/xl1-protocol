import type { Logger } from '@xylabs/logger'
import type { Promisable } from '@xylabs/promise'

export interface InitializableParams {
  logger?: Logger
}

export type Initializable<T extends InitializableParams, R> = (params: T) => Promisable<R>
