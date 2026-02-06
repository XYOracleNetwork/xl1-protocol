import { asHash } from '@xylabs/sdk-js'
import type { Id } from '@xyo-network/id-payload-plugin'
import { IdSchema } from '@xyo-network/id-payload-plugin'
import { PayloadBuilder } from '@xyo-network/payload-builder'
import {
  describe, expect, it,
} from 'vitest'

import { ConfigZod } from '../../../config/index.ts'
import { getTestProviderContext } from '../../../test/index.ts'
import type { RestDataLakeViewerParams } from '../RestDataLakeViewer.ts'
import { RestDataLakeViewer } from '../RestDataLakeViewer.ts'

const knownHash1 = asHash('ffa38ea3ec4a62b6de60f34e7d6736d9a35398d8189c970ad39e60894fa75f65', true)
const knownHash2 = asHash('1f948c1e9b96dd3c454d6c73ac50d7d64892971c4ca38cf4164dd6da4c514945', true)
const endpoint = 'https://beta.api.archivist.xyo.network/dataLake'
const context = getTestProviderContext(ConfigZod.parse({}))

describe('RestDataLakeViewer', () => {
  it('get - success', async () => {
    const sot = await RestDataLakeViewer.create({ context, endpoint } satisfies RestDataLakeViewerParams)
    const result = await sot.get(knownHash1)
    expect(result).toBeDefined()
  })
  it('get - fail', async () => {
    const sot = await RestDataLakeViewer.create({ context, endpoint } satisfies RestDataLakeViewerParams)
    const hash = await PayloadBuilder.hash({ schema: IdSchema, salt: 'some-salt-5' } satisfies Id)
    const result = await sot.get(hash)
    expect(result).toBeUndefined()
  })
  it('getMany - success', async () => {
    const sot = await RestDataLakeViewer.create({ context, endpoint } satisfies RestDataLakeViewerParams)
    const result = await sot.getMany([knownHash1, knownHash2])
    expect(result).toHaveLength(2)
  })
  it('getMany - fail', async () => {
    const sot = await RestDataLakeViewer.create({ context, endpoint } satisfies RestDataLakeViewerParams)
    const hash = await PayloadBuilder.hash({ schema: IdSchema, salt: 'some-salt-7' } satisfies Id)
    const result = await sot.getMany([hash])
    expect(result).toHaveLength(0)
  })
})
