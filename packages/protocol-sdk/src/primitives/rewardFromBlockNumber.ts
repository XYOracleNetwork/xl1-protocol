import {
  asAttoXL1, XL1_REWARDS_BLOCKS_PER_STEP, XL1_REWARDS_CREATOR_REWARD,
  XL1_REWARDS_MIN_BLOCK_REWARD, XL1_REWARDS_STARTING_REWARD, XL1_REWARDS_STEP_FACTOR_DENOMINATOR,
  XL1_REWARDS_STEP_FACTOR_NUMERATOR, type XL1BlockNumber,
} from '@xyo-network/xl1-protocol'

export function rewardFromBlockNumber(blockNumber: XL1BlockNumber) {
  if (blockNumber === 0) {
    return XL1_REWARDS_CREATOR_REWARD
  }
  const step = Math.floor((blockNumber + XL1_REWARDS_BLOCKS_PER_STEP) / XL1_REWARDS_BLOCKS_PER_STEP)
  const stepExp = BigInt(step - 1)
  const poweredNumerator = stepExp > 0 ? XL1_REWARDS_STEP_FACTOR_NUMERATOR ** stepExp : 1n
  const poweredDenominator = stepExp > 0 ? XL1_REWARDS_STEP_FACTOR_DENOMINATOR ** stepExp : 1n
  let reward = (XL1_REWARDS_STARTING_REWARD * poweredNumerator) / poweredDenominator
  // eslint-disable-next-line unicorn/prefer-math-min-max
  return asAttoXL1((reward < XL1_REWARDS_MIN_BLOCK_REWARD) ? XL1_REWARDS_MIN_BLOCK_REWARD : reward)
}
