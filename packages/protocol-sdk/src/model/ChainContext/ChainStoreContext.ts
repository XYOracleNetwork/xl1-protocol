import type { ChainIdentity } from '../ChainIdentity.ts'
import type { ChainStoreRead, ChainStoreWrite } from '../ChainStore.ts'

export interface ChainStoreContextWrite extends ChainIdentity {
  store: ChainStoreWrite
}

export interface ChainStoreContextRead extends ChainIdentity {
  store: ChainStoreRead
}

export type ChainStoreContext = ChainStoreContextRead & ChainStoreContextWrite
