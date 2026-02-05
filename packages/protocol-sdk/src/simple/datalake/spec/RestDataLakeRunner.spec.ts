import '@xylabs/vitest-extended'

import type { Id } from '@xyo-network/id-payload-plugin'
import { IdSchema } from '@xyo-network/id-payload-plugin'
import { PayloadBuilder } from '@xyo-network/payload-builder'
import type { Payload } from '@xyo-network/payload-model'
import {
  describe, expect, it,
} from 'vitest'

import { ConfigZod } from '../../../config/index.ts'
import { getTestProviderContext } from '../../../test/index.ts'
import { RestDataLakeRunner } from '../RestDataLakeRunner.ts'
import type { RestDataLakeViewerParams } from '../RestDataLakeViewer.ts'

const endpoint = 'https://beta.api.archivist.xyo.network/dataLake'
const context = getTestProviderContext(ConfigZod.parse({}))

const testPayload: Id = { schema: IdSchema, salt: 'some-salt' }
const testBadPayload = { schema3: IdSchema, salt: 'some-salt' }

describe('RestDataLakeRunner', () => {
  it('insert - single - success', async () => {
    const hash = await PayloadBuilder.hash(testPayload)
    const sot = await RestDataLakeRunner.create({ context, endpoint } satisfies RestDataLakeViewerParams)
    const result = await sot.set(hash, testPayload)
    expect(result).toBeString()
  })
  it('insert - multi - success', async () => {
    const hash = await PayloadBuilder.hash(testPayload)
    const sot = await RestDataLakeRunner.create({ context, endpoint } satisfies RestDataLakeViewerParams)
    const result = await sot.setMany([[hash, testPayload]])
    expect(result).toBeArray()
  })
  it('insert - fail', async () => {
    const sot = await RestDataLakeRunner.create({ context, endpoint } satisfies RestDataLakeViewerParams)
    const hash = await PayloadBuilder.hash(testPayload)
    const result = await sot.set(hash, testBadPayload as unknown as Payload)
    expect(result).toBeUndefined()
  })
})
