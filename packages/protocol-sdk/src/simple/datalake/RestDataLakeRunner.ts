import {
  assertEx, exists, type Hash,
} from '@xylabs/sdk-js'
import { isAnyPayload } from '@xyo-network/payload-model'
import { PayloadBuilder } from '@xyo-network/sdk-js'
import {
  DataLakeData,
  DataLakeRunner,
  DataLakeRunnerMoniker,
} from '@xyo-network/xl1-protocol'

import { creatableProvider } from '../../CreatableProvider/index.ts'
import { AbstractRestDataLake } from './AbstractRestDataLake.ts'
import { RestDataLakeViewerParams } from './RestDataLakeViewer.ts'

export interface RestDataLakeRunnerParams extends RestDataLakeViewerParams {}

@creatableProvider()
export class RestDataLakeRunner<TParams extends RestDataLakeRunnerParams> extends
  AbstractRestDataLake<TParams> implements DataLakeRunner {
  static readonly defaultMoniker = DataLakeRunnerMoniker
  static readonly dependencies = []
  static readonly monikers = [DataLakeRunnerMoniker]
  moniker = RestDataLakeRunner.defaultMoniker

  clear(): Promise<void> {
    throw new Error('Clear is not supported on RestDataLakeRunner')
  }

  delete(_hash: Hash): Promise<boolean> {
    throw new Error('Delete is not supported on RestDataLakeRunner')
  }

  async set(hash: Hash, data: DataLakeData): Promise<Hash | undefined | void> {
    if (isAnyPayload(data) && this.isAllowed(data)) {
      const actualHash = await PayloadBuilder.hash(data)
      assertEx(actualHash === hash, () => `Hash of data does not match provided hash. Expected ${hash}, got ${actualHash}`)
      assertEx(typeof data === 'object' && data !== null, () => 'Data must be an object')
      const result = await this.axios.post(`${this.params.endpoint}/insert`, data)
      return result.status === 200 ? actualHash : undefined
    }
  }

  async setMany(entries: [Hash, DataLakeData][]): Promise<Hash[] | void> {
    const data = entries.map(([, data]) => {
      if (isAnyPayload(data) && this.isAllowed(data)) {
        assertEx(typeof data === 'object' && data !== null, () => 'Data must be an object')
        return data
      }
      return null
    }).filter(exists)
    if (data.length > 0) {
      const result = await this.axios.post(`${this.params.endpoint}/insert`, data)
      return result.data
    }
  }
}
