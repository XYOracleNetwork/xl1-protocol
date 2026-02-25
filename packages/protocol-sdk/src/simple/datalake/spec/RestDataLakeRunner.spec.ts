import '@xylabs/vitest-extended'

import type { Id, Payload } from '@xyo-network/sdk-js'
import { IdSchema } from '@xyo-network/sdk-js'
import {
  describe, expect, it,
} from 'vitest'

import { ConfigZod } from '../../../config/index.ts'
import { isInternetAvailable } from '../../../isInternetAvailable.ts'
import { getTestProviderContext } from '../../../test/index.ts'
import { RestDataLakeRunner } from '../RestDataLakeRunner.ts'
import type { RestDataLakeViewerParams } from '../RestDataLakeViewer.ts'

const endpoint = 'https://beta.api.archivist.xyo.network/dataLake'
const context = getTestProviderContext(ConfigZod.parse({}))

const testPayload: Id = { schema: IdSchema, salt: `some-salt-${Date.now()}` }
const testPayload2: Id = { schema: IdSchema, salt: `some-salt-${Date.now() + 1}` }
const testPayload3: Id = { schema: IdSchema, salt: `some-salt-${Date.now() + 2}` }
const testBadPayload = { schema3: IdSchema, salt: `some-salt-${Date.now() + 3}` }

describe('RestDataLakeRunner', async () => {
  const noInternet = !(await isInternetAvailable())
  if (noInternet) {
    console.warn('No internet connection detected. Skipping RestDataLakeViewer tests.')
  }
  it.skipIf(noInternet)('insert - single - success', async () => {
    const sot = await RestDataLakeRunner.create({ context, endpoint } satisfies RestDataLakeViewerParams)
    const result = await sot.insert([testPayload])
    expect(result).toBeArray()
    expect(result).toHaveLength(1)
  })
  it.skipIf(noInternet)('insert - multi - success', async () => {
    const sot = await RestDataLakeRunner.create({ context, endpoint } satisfies RestDataLakeViewerParams)
    const result = await sot.insert([testPayload2, testPayload3])
    expect(result).toBeArray()
    expect(result).toHaveLength(2)
  })
  it.skipIf(noInternet)('insert - fail', async () => {
    const sot = await RestDataLakeRunner.create({ context, endpoint } satisfies RestDataLakeViewerParams)
    const result = await sot.insert([testBadPayload as unknown as Payload])
    expect(result).toBeArray()
    expect(result).toHaveLength(0)
  })
})
