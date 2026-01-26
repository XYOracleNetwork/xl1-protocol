import type { ChainIdentity } from '../ChainIdentity.ts'
import type { StakeRunner, StakeViewer } from '../viewers/index.ts'

export interface ChainStakeContextWrite extends ChainIdentity {
  stake: StakeRunner
}

export interface ChainStakeContextRead extends ChainIdentity {
  stake: StakeViewer
}

export type ChainStakeContext = ChainStakeContextRead & ChainStakeContextWrite
