import type { Provider } from '../provider/index.ts'
import type { NetworkStakeViewer, XyoViewer } from '../viewers/index.ts'
import type { DataLakeRunner, DataLakeViewer } from './DataLake.ts'
import type { XyoNetwork } from './XyoNetwork.ts'
import type { XyoRunner } from './XyoRunner.ts'

export const XyoConnectionMoniker = 'XyoConnection' as const
export type XyoConnectionMoniker = typeof XyoConnectionMoniker

export interface XyoConnection extends Provider<XyoConnectionMoniker> {
  network?: XyoNetwork
  networkStake?: NetworkStakeViewer
  runner?: XyoRunner
  storage?: DataLakeRunner | DataLakeViewer | (DataLakeRunner & DataLakeViewer)
  viewer?: XyoViewer
}
