import type { Hash } from '@xylabs/sdk-js'
import { isAnyPayload, type Schema } from '@xyo-network/payload-model'

import { AbstractCreatableProvider, type CreatableProviderParams } from '../../CreatableProvider/index.ts'
import type { MapTypeRead } from '../../map/index.ts'
import { type DataLakeData } from '../../provider/index.ts'

export interface AbstractSimpleDataLakeParams<TMap extends
MapTypeRead<Hash, DataLakeData> = MapTypeRead<Hash, DataLakeData>> extends
  CreatableProviderParams {

  allowedSchemas?: Schema[]
  disallowedSchemas?: Schema[]
  map: TMap
}

export abstract class AbstractSimpleDataLake<TParams extends AbstractSimpleDataLakeParams = AbstractSimpleDataLakeParams> extends
  AbstractCreatableProvider<TParams> {
  get allowedSchemas(): Schema[] | undefined {
    return this.params.allowedSchemas
  }

  get disallowedSchemas(): Schema[] | undefined {
    return this.params.disallowedSchemas
  }

  protected get map(): TParams['map'] {
    return this.params.map
  }

  async get(hash: Hash): Promise<DataLakeData | undefined> {
    const result = await this.map.get(hash)
    return this.isAllowed(result) ? result : undefined
  }

  async getMany(hashes: Hash[]): Promise<DataLakeData[]> {
    const result = await this.map.getMany(hashes)
    return result.filter(data => this.isAllowed(data))
  }

  async has(hash: Hash): Promise<boolean> {
    const value = await this.get(hash)
    if (isAnyPayload(value)) {
      return this.isAllowed(value)
    }
    return value !== undefined
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
