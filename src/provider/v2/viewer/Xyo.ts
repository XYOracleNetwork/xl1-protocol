import type { Address } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { XyoWallet } from '../../v1/XyoWallet.ts'
import type { ChainViewer } from './Chain.ts'
import type { DataLakeViewer } from './DataLake.ts'

export interface XyoViewerV2 {
  wallet?: XyoWallet
  chain(id: Address): Promisable<ChainViewer>
  chains(): Promisable<Address[]>
  dataLake(id: Address): Promisable<DataLakeViewer>
  dataLakes(): Promisable<Address[]>
}
