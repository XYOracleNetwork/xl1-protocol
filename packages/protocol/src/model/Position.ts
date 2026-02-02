import type { Address } from '@xylabs/sdk-js'

import type { PositionId } from './PositionId.ts'

export type Position = {
  // the block number when the stake was added
  addBlock: number
  // the amount that is staked
  amount: bigint
  // the unique id for the stake item
  id: PositionId
  // the block number when the stake was removed (set to 0 if not removed)
  removeBlock: number
  // the address that is being staked
  staked: Address
  // the address that owns the stake
  staker: Address
  // the block number when the stake was withdrawn (set to 0 if not withdrawn)
  withdrawBlock: number
}
