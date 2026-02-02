import type { StakeRunner, StakeViewer } from '@xyo-network/xl1-protocol'

import type { ChainIdentity } from '../ChainIdentity.ts'

export interface ChainStakeContextWrite extends ChainIdentity {
  stake: StakeRunner
}

export interface ChainStakeContextRead extends ChainIdentity {
  stake: StakeViewer
}

export type ChainStakeContext = ChainStakeContextRead & ChainStakeContextWrite
