import { exists, type Hash } from '@xylabs/sdk-js'
import { isAnyPayload, PayloadBuilder } from '@xyo-network/sdk-js'
import {
  DataLakeData,
  DataLakeRunner,
  DataLakeRunnerMoniker, MapType,
} from '@xyo-network/xl1-protocol'

import { creatableProvider } from '../../CreatableProvider/index.ts'
import { AbstractSimpleDataLake } from './AbstractSimpleDataLake.ts'
import { SimpleDataLakeViewerParams } from './SimpleDataLakeViewer.ts'

export interface SimpleDataLakeRunnerParams extends SimpleDataLakeViewerParams<MapType<Hash, DataLakeData>> {}

@creatableProvider()
export class SimpleDataLakeRunner<TParams extends SimpleDataLakeRunnerParams> extends
  AbstractSimpleDataLake<TParams> implements DataLakeRunner {
  static readonly defaultMoniker = DataLakeRunnerMoniker
  static readonly dependencies = []
  static readonly monikers = [DataLakeRunnerMoniker]
  moniker = SimpleDataLakeRunner.defaultMoniker

  async clear(): Promise<void> {
    await this.map.clear()
  }

  async delete(hashes: Hash[]) {
    return (await Promise.all(hashes.map(async (hash) => {
      const payload = await this.map.get(hash)
      return (await this.map.delete(hash)) ? payload : undefined
    }))).filter(exists)
  }

  async insert(items: DataLakeData[]) {
    const payloads = items.filter(isAnyPayload).filter(i => this.isAllowed(i))
    const hashPairs = await PayloadBuilder.hashPairs(payloads)
    for (const [payload, hash] of hashPairs) {
      await this.map.set(hash, payload)
    }
    return hashPairs.map(([payload]) => payload)
  }
}
