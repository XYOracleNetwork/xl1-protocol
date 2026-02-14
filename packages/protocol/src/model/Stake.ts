import { AddressZod, HexZod } from '@xylabs/sdk-js'
import { z } from 'zod'

import type { PositionId } from './PositionId.ts'
import {
  AttoToJsonZod, AttoZod, JsonToAttoZod,
} from './TransactionFees.ts'

export const StakeZod = z.object({
  amount: AttoZod,
  // the block number when the stake was added
  addBlock: z.number(),
  // the unique id for the stake item
  id: z.number(),
  // the block number when the stake was removed (set to 0 if not removed)
  removeBlock: z.number(),
  // the address that is being staked
  staked: AddressZod,
  // the address that owns the stake
  staker: AddressZod,
  // the block number when the stake was withdrawn (set to 0 if not withdrawn)
  withdrawBlock: z.number(),
})

export const StakeToJsonZod = StakeZod.transform(val => ({
  addBlock: val.addBlock,
  amount: AttoToJsonZod.parse(val.amount),
  id: val.id,
  removeBlock: val.removeBlock,
  staked: AddressZod.parse(val.staked),
  staker: AddressZod.parse(val.staker),
  withdrawBlock: val.withdrawBlock,
}))

// we intentionally use extend and not safeExtend here to ensure all fields are present
export const JsonToStakeZod = StakeZod.extend({ amount: HexZod }).transform(val => ({
  addBlock: val.addBlock,
  amount: JsonToAttoZod.parse(val.amount),
  id: val.id as PositionId,
  removeBlock: val.removeBlock,
  staked: val.staked,
  staker: val.staker,
  withdrawBlock: val.withdrawBlock,
}))
