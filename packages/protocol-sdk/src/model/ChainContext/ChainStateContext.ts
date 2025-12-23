import type { Hash, Promisable } from '@xylabs/sdk-js'

export interface ChainStateContextRead {
  head(): Promisable<[Hash, number]>
}

export interface ChainStateContextWrite {}

export type ChainStateContext = ChainStateContextRead & ChainStateContextWrite
