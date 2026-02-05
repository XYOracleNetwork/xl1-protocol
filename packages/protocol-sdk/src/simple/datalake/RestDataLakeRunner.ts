import {
  assertEx, exists, type Hash,
} from '@xylabs/sdk-js'
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

  async set(hash: Hash, data: DataLakeData): Promise<void> {
    if (this.isAllowed(data)) {
      assertEx(typeof data === 'object' && data !== null, () => 'Data must be an object')
      await this.axios.post(`${this.params.endpoint}/insert`, data)
    }
  }

  async setMany(entries: [Hash, DataLakeData][]): Promise<void> {
    const data = entries.map(([, data]) => {
      if (this.isAllowed(data)) {
        assertEx(typeof data === 'object' && data !== null, () => 'Data must be an object')
        return data
      }
      return null
    }).filter(exists)
    if (data.length > 0) {
      assertEx(typeof data === 'object' && data !== null, () => 'Data must be an object')
      await this.axios.post(`${this.params.endpoint}/insert`, data)
    }
  }
}
