import '@xylabs/vitest-extended'

import { toFixedPoint } from '@xylabs/sdk-js'
import { asAttoXL1, asXL1BlockNumber } from '@xyo-network/xl1-protocol'
import {
  beforeAll, describe, expect, it,
} from 'vitest'

import { SimpleBlockRewardViewer } from '../SimpleBlockRewardViewer.ts'

describe('MemoryBlockRewardService', () => {
  let sut: SimpleBlockRewardViewer
  // const genesisReward = toFixedPoint(18_000_000_000n)
  // const initialReward = toFixedPoint(500n)
  // const minRewardPerBlock = toFixedPoint(10n)
  const genesisReward = asAttoXL1(18_000_000_000_000_000_000_000_000_000n)
  const initialReward = asAttoXL1(500_000_000_000_000_000_000n)
  const minRewardPerBlock = asAttoXL1(10_000_000_000_000_000_000n)
  const stepFactorDenominator = 100n
  const stepFactorNumerator = 95n
  const stepSize = asXL1BlockNumber(1_000_000, true)
  beforeAll(async () => {
    sut = await SimpleBlockRewardViewer.create({
      stepFactorNumerator,
      stepFactorDenominator,
      stepSize,
      initialReward,
      minRewardPerBlock,
      creatorReward: genesisReward,
    })
  })

  describe('rewards', () => {
    it('for block 0', async () => {
      const reward = await sut.allowedRewardForBlock(asXL1BlockNumber(0, true))
      expect(reward).toEqual(18_000_000_000_000_000_000_000_000_000n)
      expect(reward).toEqual(toFixedPoint(18_000_000_000n))
    })
    it('for block 1', async () => {
      const reward = await sut.allowedRewardForBlock(asXL1BlockNumber(1, true))
      expect(reward).toEqual(500_000_000_000_000_000_000n)
      expect(reward).toEqual(toFixedPoint(500n))
    })
    it('for block 2', async () => {
      const reward = await sut.allowedRewardForBlock(asXL1BlockNumber(2, true))
      expect(reward).toEqual(500_000_000_000_000_000_000n)
      expect(reward).toEqual(toFixedPoint(500n))
    })
    it('for block 3', async () => {
      const reward = await sut.allowedRewardForBlock(asXL1BlockNumber(3, true))
      expect(reward).toEqual(500_000_000_000_000_000_000n)
      expect(reward).toEqual(toFixedPoint(500n))
    })
    it('for block 4', async () => {
      const reward = await sut.allowedRewardForBlock(asXL1BlockNumber(4, true))
      expect(reward).toEqual(500_000_000_000_000_000_000n)
      expect(reward).toEqual(toFixedPoint(500n))
    })
    it('for block 1000000', async () => {
      const reward = await sut.allowedRewardForBlock(asXL1BlockNumber(1_000_000, true))
      expect(reward).toEqual(475_000_000_000_000_000_000n)
      expect(reward).toEqual(toFixedPoint(475n))
    })
  })
})
