import '@xylabs/vitest-extended'

import { toFixedPoint } from '@xylabs/sdk-js'
import { asXL1BlockNumber } from '@xyo-network/xl1-protocol'
import {
  beforeAll, describe, expect, it,
} from 'vitest'

import { getDefaultConfig } from '../../../config/index.ts'
import { ProviderFactoryLocator } from '../../../CreatableProvider/index.ts'
import { SimpleBlockRewardViewer } from '../SimpleBlockRewardViewer.ts'

describe('MemoryBlockRewardService', () => {
  let sut: SimpleBlockRewardViewer
  const config = getDefaultConfig()
  const locator = new ProviderFactoryLocator({
    singletons: {}, caches: {}, config,
  })
  const context = {
    caches: {}, singletons: {}, config, locator,
  }
  beforeAll(async () => {
    sut = await SimpleBlockRewardViewer.create({ context })
  })

  describe('rewards', () => {
    it('for block 0', async () => {
      const reward = await sut.allowedRewardForBlock(asXL1BlockNumber(0, true))
      expect(reward).toEqual(20_000_000_000_000_000_000_000_000_000n)
      expect(reward).toEqual(toFixedPoint(20_000_000_000n))
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
