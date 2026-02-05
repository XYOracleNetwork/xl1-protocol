import type { Hash } from '@xylabs/sdk-js'
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

  async delete(hash: Hash): Promise<boolean> {
    return await this.map.delete(hash)
  }

  async set(hash: Hash, data: DataLakeData): Promise<void> {
    if (this.isAllowed(data)) {
      await this.map.set(hash, data)
    }
  }

  async setMany(entries: [Hash, DataLakeData][]): Promise<void> {
    const allowed = entries.filter(([_, data]) => this.isAllowed(data))
    await this.map.setMany(allowed)
  }
}
