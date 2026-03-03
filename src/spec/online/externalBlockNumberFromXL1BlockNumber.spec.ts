import { asHex, ZERO_ADDRESS } from '@xylabs/sdk-js'
import type { BlockViewer } from '@xyo-network/xl1-protocol'
import {
  asXL1BlockRange, BlockViewerMoniker, StepSizes,
} from '@xyo-network/xl1-protocol'
import {
  ConfigZod, externalBlockNumberFromXL1BlockNumber, ProviderFactoryLocator,
  SimpleChainContractViewer,
} from '@xyo-network/xl1-protocol-sdk'
import { JsonRpcBlockViewer, JsonRpcFinalizationViewer } from '@xyo-network/xl1-rpc'
import {
  describe, expect, it,
} from 'vitest'

describe('externalBlockNumberFromXL1BlockNumber', () => {
  it('should be tested', async () => {
    const chainId = asHex('0101', true)
    const config = ConfigZod.parse({
      chain: { id: chainId },
      remote: { rpc: { protocol: 'http', url: 'https://beta.api.chain.xyo.network/rpc' } },
    })
    const locator = new ProviderFactoryLocator({
      singletons: {}, caches: {}, config,
    })
    locator.registerMany([
      SimpleChainContractViewer.factory<SimpleChainContractViewer>(SimpleChainContractViewer.dependencies, {
        minWithdrawalBlocks: 10,
        rewardsContract: ZERO_ADDRESS,
        stakingTokenAddress: ZERO_ADDRESS,
      }),
      JsonRpcFinalizationViewer.factory<JsonRpcFinalizationViewer>(JsonRpcFinalizationViewer.dependencies, {}),
      JsonRpcBlockViewer.factory<JsonRpcBlockViewer>(JsonRpcBlockViewer.dependencies, {}),
    ])

    const blockViewer = await locator.getInstance<BlockViewer>(BlockViewerMoniker)
    const context = locator.context

    const stepNumber = 3
    const xl1BlockRange = asXL1BlockRange([StepSizes[3] * stepNumber, StepSizes[3] * (stepNumber + 1) - 1], { name: 'testRange' })
    const ethStartBlockNumber = await externalBlockNumberFromXL1BlockNumber(context, blockViewer, xl1BlockRange[0], 'ethereum')
    expect(ethStartBlockNumber).toBe(23_372_716)
    const ethStopBlockNumber = await externalBlockNumberFromXL1BlockNumber(context, blockViewer, xl1BlockRange[1], 'ethereum')
    expect(ethStopBlockNumber).toBe(23_372_716)
  })
})
