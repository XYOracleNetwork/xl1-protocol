import type { Promisable } from '@xylabs/promise'

export type Initializable<T, R> = (params: T) => Promisable<R>
