import type { Address } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { XyoWallet } from '../../v1/index.ts'
import type { DataLakeViewer } from '../lake/index.ts'
import type { ChainViewer } from './Chain.ts'

export interface XyoViewerV2 {
  // wallet that is used for viewer operations if they require payment
  wallet?: XyoWallet
  // get a chain viewer for the given chain
  chain(id: Address): Promisable<ChainViewer>
  // list of the chains available in the network
  chains(): Promisable<Address[]>
  // get a data lake viewer for the given data lake
  dataLake(id: Address): Promisable<DataLakeViewer>
  // list of the data lakes available in the network
  dataLakes(): Promisable<Address[]>
}
