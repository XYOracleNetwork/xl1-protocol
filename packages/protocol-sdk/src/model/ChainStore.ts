import type { Payload, WithStorageMeta } from '@xyo-network/payload-model'
import type { PayloadMapRead, PayloadMapWrite } from '@xyo-network/xl1-protocol'

export interface ChainStoreWrite {
  chainMap: PayloadMapWrite<WithStorageMeta<Payload>>
}

export interface ChainStoreRead {
  chainMap: PayloadMapRead<WithStorageMeta<Payload>>
}

export type ChainStore = ChainStoreRead & ChainStoreWrite
