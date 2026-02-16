import type { Hash, PromisableArray } from '@xylabs/sdk-js'
import type { NextOptions } from '@xyo-network/archivist-model'
import type { Schema, Sequence } from '@xyo-network/payload-model'
import { isAnyPayload } from '@xyo-network/payload-model'
import type {
  DataLakeData, DataLakeViewer, MapTypeRead,
} from '@xyo-network/xl1-protocol'

import { AbstractCreatableProvider, type CreatableProviderParams } from '../../CreatableProvider/index.ts'

export interface AbstractSimpleDataLakeParams<TMap extends
MapTypeRead<Hash, DataLakeData> = MapTypeRead<Hash, DataLakeData>> extends
  CreatableProviderParams {

  allowedSchemas?: Schema[]
  disallowedSchemas?: Schema[]
  map: TMap
}

export abstract class AbstractSimpleDataLake<TParams extends AbstractSimpleDataLakeParams = AbstractSimpleDataLakeParams> extends
  AbstractCreatableProvider<TParams> implements Omit<DataLakeViewer, 'moniker'> {
  get allowedSchemas(): Schema[] | undefined {
    return this.params.allowedSchemas
  }

  get disallowedSchemas(): Schema[] | undefined {
    return this.params.disallowedSchemas
  }

  protected get map(): TParams['map'] {
    return this.params.map
  }

  async get(hashes: Hash[]): Promise<DataLakeData[]> {
    const result = await this.map.getMany(hashes)
    return result.filter(data => this.isAllowed(data))
  }

  next(_options?: NextOptions<Sequence> | undefined): PromisableArray<DataLakeData> {
    throw new Error('Method not implemented.')
  }

  protected isAllowed(value: DataLakeData | undefined): boolean {
    if (isAnyPayload(value)) {
      return this.isAllowedSchema(value.schema)
    }
    return true
  }

  protected isAllowedSchema(schema: Schema): boolean {
    if (this.allowedSchemas && !this.allowedSchemas.includes(schema)) {
      return false
    }
    if (this.disallowedSchemas && this.disallowedSchemas.includes(schema)) {
      return false
    }
    return true
  }
}
