import type { Provider } from '../Provider.ts'
import type { ChainContractViewer } from './ChainContract.ts'
import type { StakeTotalsViewer } from './StakeTotals.ts'

export const ChainStakeViewerMoniker = 'ChainStakeViewer' as const
export type ChainStakeViewerMoniker = typeof ChainStakeViewerMoniker

export interface ChainStakeViewer extends Omit<ChainContractViewer, 'moniker'>, Omit<StakeTotalsViewer, 'moniker'>,
  Provider<ChainStakeViewerMoniker> {

}
