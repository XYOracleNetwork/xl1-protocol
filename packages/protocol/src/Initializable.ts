import type {
  EmptyObject, Logger, Promisable,
} from '@xylabs/sdk-js'

/** @deprecated */
export type InitializableParams<T extends EmptyObject = {}> = T & {
  logger?: Logger
}

/** @deprecated */
// eslint-disable-next-line @typescript-eslint/no-deprecated
export type Initializable<T extends EmptyObject, R> = (params: InitializableParams<T>) => Promisable<R>
