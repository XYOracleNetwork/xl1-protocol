import { toFixedPoint } from '@xylabs/sdk-js'

import { asAttoXL1 } from '../xl1/index.ts'

export const XL1_REWARDS_PLACES = 18 as const
export const XL1_REWARDS_STARTING_REWARD = asAttoXL1(toFixedPoint(500n, XL1_REWARDS_PLACES))
export const XL1_REWARDS_BLOCKS_PER_STEP = 1_000_000
export const XL1_REWARDS_STEP_FACTOR_NUMERATOR = 95n
export const XL1_REWARDS_STEP_FACTOR_DENOMINATOR = 100n
export const XL1_REWARDS_MIN_BLOCK_REWARD = asAttoXL1(toFixedPoint(10n, XL1_REWARDS_PLACES))
export const XL1_REWARDS_CREATOR_REWARD = asAttoXL1(toFixedPoint(20_000_000_000n, XL1_REWARDS_PLACES))
