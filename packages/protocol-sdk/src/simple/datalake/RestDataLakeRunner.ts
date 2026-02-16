import {
  assertEx, BrandedHash, exists, type Hash,
  Promisable,
  PromisableArray,
} from '@xylabs/sdk-js'
import { isAnyPayload, PayloadZodLoose } from '@xyo-network/payload-model'
import {
  DataLakeData,
  DataLakeRunner,
  DataLakeRunnerMoniker,
} from '@xyo-network/xl1-protocol'
import { AxiosResponse } from 'axios'
import z from 'zod'

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

  clear(): Promisable<void> {
    throw new Error('Method not implemented.')
  }

  delete(_hashes: BrandedHash[]): PromisableArray<DataLakeData> {
    throw new Error('Method not implemented.')
  }

  async insert(items: DataLakeData[]): Promise<DataLakeData[]> {
    const allowedItems = items.map((item) => {
      if (isAnyPayload(item) && this.isAllowed(item)) {
        assertEx(typeof item === 'object' && item !== null, () => 'Data must be an object')
        return item
      }
      return null
    }).filter(exists)
    if (allowedItems.length > 0) {
      const result = await this.axios.post<DataLakeData[], AxiosResponse<Hash[]>>(`${this.params.endpoint}/insert`, allowedItems)
      return z.array(PayloadZodLoose).parse(result.data)
    } else {
      return []
    }
  }
}
