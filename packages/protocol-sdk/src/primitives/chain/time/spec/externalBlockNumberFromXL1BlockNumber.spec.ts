import { MongoDBArchivistV2 } from '@xyo-network/archivist-mongodb'
import { asXL1BlockRange, StepSizes } from '@xyo-network/xl1-protocol'
import {
  describe, expect, it,
} from 'vitest'

import type { BaseContext } from '../../../../model/index.ts'
import { SimpleBlockViewer } from '../../../../simple/index.ts'
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

    const context: BaseContext = { singletons: {} }
    const blockViewer = await SimpleBlockViewer.create({ finalizedArchivist: chainArchivist })

    const stepNumber = 3
    const xl1BlockRange = asXL1BlockRange([StepSizes[3] * stepNumber, StepSizes[3] * (stepNumber + 1) - 1], { name: 'testRange' })
    const ethStartBlockNumber = await externalBlockNumberFromXL1BlockNumber(context, blockViewer, xl1BlockRange[0], 'ethereum')
    expect(ethStartBlockNumber).toBe(23_381_191)
    const ethStopBlockNumber = await externalBlockNumberFromXL1BlockNumber(context, blockViewer, xl1BlockRange[1], 'ethereum')
    expect(ethStopBlockNumber).toBe(23_382_801)
  })
})
