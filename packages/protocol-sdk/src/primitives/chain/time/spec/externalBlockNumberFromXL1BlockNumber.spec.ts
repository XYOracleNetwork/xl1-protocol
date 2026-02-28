import { asHex, ZERO_ADDRESS } from '@xylabs/sdk-js'
import { MongoDBArchivistV2 } from '@xyo-network/archivist-mongodb'
import type { BlockViewer } from '@xyo-network/xl1-protocol'
import {
  asXL1BlockRange, BlockViewerMoniker, StepSizes,
} from '@xyo-network/xl1-protocol'
import {
  describe, expect, it,
} from 'vitest'

import { ConfigZod } from '../../../../config/index.ts'
import { ProviderFactoryLocator } from '../../../../CreatableProvider/index.ts'
import {
  SimpleBlockViewer, SimpleChainContractViewer, SimpleFinalizationViewer,
} from '../../../../simple/index.ts'
import { externalBlockNumberFromXL1BlockNumber } from '../externalBlockNumberFromXL1BlockNumber.ts'

describe('externalBlockNumberFromXL1BlockNumber', () => {
  it('should be tested', async () => {
    const chainArchivist = await MongoDBArchivistV2.create({
      payloadSdkConfig: {
        dbConnectionString: process.env.XL1_STORAGE__MONGO__CONNECTION_STRING,
        dbName: 'chain',
        collection: 'chain_validated',
      },
    })

    const chainId = asHex('0101', true)
    const config = ConfigZod.parse({ chain: { id: chainId } })
    const locator = new ProviderFactoryLocator({
      singletons: {}, caches: {}, config,
    })
    locator.registerMany([
      SimpleChainContractViewer.factory<SimpleChainContractViewer>(SimpleChainContractViewer.dependencies, {
        minWithdrawalBlocks: 10,
        rewardsContract: ZERO_ADDRESS,
        stakingTokenAddress: ZERO_ADDRESS,
      }),
      SimpleFinalizationViewer.factory<SimpleFinalizationViewer>(SimpleFinalizationViewer.dependencies, { finalizedArchivist: chainArchivist }),
      SimpleBlockViewer.factory<SimpleBlockViewer>(SimpleBlockViewer.dependencies, { finalizedArchivist: chainArchivist }),
    ])

    const blockViewer = await locator.getInstance<BlockViewer>(BlockViewerMoniker)
    const context = locator.context

    const stepNumber = 3
    const xl1BlockRange = asXL1BlockRange([StepSizes[3] * stepNumber, StepSizes[3] * (stepNumber + 1) - 1], { name: 'testRange' })
    const ethStartBlockNumber = await externalBlockNumberFromXL1BlockNumber(context, blockViewer, xl1BlockRange[0], 'ethereum')
    expect(ethStartBlockNumber).toBe(23_381_191)
    const ethStopBlockNumber = await externalBlockNumberFromXL1BlockNumber(context, blockViewer, xl1BlockRange[1], 'ethereum')
    expect(ethStopBlockNumber).toBe(23_382_801)
  })
})
