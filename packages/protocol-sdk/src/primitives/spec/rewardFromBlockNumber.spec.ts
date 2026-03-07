import {
  asAttoXL1,
  asXL1BlockNumber,
  XL1_REWARDS_CREATOR_REWARD,
  XL1_REWARDS_MIN_BLOCK_REWARD,
  XL1_REWARDS_STARTING_REWARD,
} from '@xyo-network/xl1-protocol'
import {
  describe, expect, it,
} from 'vitest'

import { rewardFromBlockNumber } from '../rewardFromBlockNumber.ts'

describe('rewardFromBlockNumber', () => {
  it('should return creator reward for block 0', () => {
    const reward = rewardFromBlockNumber(asXL1BlockNumber(0, true))
    expect(reward).toBe(XL1_REWARDS_CREATOR_REWARD)
  })

  it('should return starting reward for block 1', () => {
    const reward = rewardFromBlockNumber(asXL1BlockNumber(1, true))
    expect(reward).toBe(XL1_REWARDS_STARTING_REWARD)
  })

  it('should return starting reward for early blocks (within first step)', () => {
    const reward = rewardFromBlockNumber(asXL1BlockNumber(100, true))
    expect(reward).toBe(XL1_REWARDS_STARTING_REWARD)
  })

  it('should decrease reward after first step boundary', () => {
    const earlyReward = rewardFromBlockNumber(asXL1BlockNumber(1, true))
    const laterReward = rewardFromBlockNumber(asXL1BlockNumber(1_000_001, true))
    expect(laterReward).toBeLessThan(earlyReward)
  })

  it('should never go below minimum block reward', () => {
    const veryLateReward = rewardFromBlockNumber(asXL1BlockNumber(100_000_000, true))
    expect(veryLateReward).toBeGreaterThanOrEqual(XL1_REWARDS_MIN_BLOCK_REWARD)
  })

  it('should return a valid AttoXL1 value', () => {
    const reward = rewardFromBlockNumber(asXL1BlockNumber(500_000, true))
    expect(typeof reward).toBe('bigint')
    expect(reward).toBeGreaterThan(0n)
    expect(() => asAttoXL1(reward)).not.toThrow()
  })
})
