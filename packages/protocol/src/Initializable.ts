import type {
  EmptyObject, Logger, Promisable,
} from '@xylabs/sdk-js'

export type InitializableParams<T extends EmptyObject = {}> = T & {
  logger?: Logger
}

export type Initializable<T extends EmptyObject, R> = (params: InitializableParams<T>) => Promisable<R>
