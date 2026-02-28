import type {
  Payload, ReadArchivist, WriteArchivist,
} from '@xyo-network/sdk-js'

export interface ChainStoreWrite {
  chainMap: WriteArchivist<Payload>
}

export interface ChainStoreRead {
  chainMap: ReadArchivist<Payload>
}

export type ChainStore = ChainStoreRead & ChainStoreWrite
