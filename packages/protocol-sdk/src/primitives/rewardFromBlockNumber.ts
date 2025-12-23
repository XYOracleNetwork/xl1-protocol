import { toFixedPoint } from '@xylabs/sdk-js'
import { asAttoXL1, type XL1BlockNumber } from '@xyo-network/xl1-protocol'

export const rewardFromBlockNumber = (places = 18) => {
  return (
    blockNumber: XL1BlockNumber,
    startingReward = asAttoXL1(toFixedPoint(500n, places)),
    blocksPerStep = 1_000_000,
    stepFactorNumerator = 95n,
    stepFactorDenominator = 100n,
    minBlockReward = asAttoXL1(toFixedPoint(10n, places)),
    creatorReward = asAttoXL1(toFixedPoint(20_000_000_000n, places)),
  ) => {
    if (blockNumber === 0) {
      return creatorReward
    }
    const step = Math.floor((blockNumber + blocksPerStep) / blocksPerStep)
    const stepExp = BigInt(step - 1)
    const poweredNumerator = stepExp > 0 ? stepFactorNumerator ** stepExp : 1n
    const poweredDenominator = stepExp > 0 ? stepFactorDenominator ** stepExp : 1n
    let reward = (startingReward * poweredNumerator) / poweredDenominator
    // eslint-disable-next-line unicorn/prefer-math-min-max
    return asAttoXL1((reward < minBlockReward) ? minBlockReward : reward)
  }
}
