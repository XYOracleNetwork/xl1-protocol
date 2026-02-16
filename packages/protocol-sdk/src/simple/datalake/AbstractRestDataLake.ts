import { axiosJsonConfig } from '@xylabs/axios'
import {
  exists, type Hash, type PromisableArray,
} from '@xylabs/sdk-js'
import type { NextOptions } from '@xyo-network/archivist-model'
import type { Schema, Sequence } from '@xyo-network/payload-model'
import { asAnyPayload, isAnyPayload } from '@xyo-network/payload-model'
import type { DataLakeData, DataLakeViewer } from '@xyo-network/xl1-protocol'
import { Axios } from 'axios'

import { AbstractCreatableProvider, type CreatableProviderParams } from '../../CreatableProvider/index.ts'

export interface AbstractRestDataLakeParams extends
  CreatableProviderParams {

  allowedSchemas?: Schema[]
  disallowedSchemas?: Schema[]
  endpoint: string
}

export abstract class AbstractRestDataLake<TParams extends AbstractRestDataLakeParams = AbstractRestDataLakeParams> extends
  AbstractCreatableProvider<TParams> implements Omit<DataLakeViewer, 'moniker'> {
  get allowedSchemas(): Schema[] | undefined {
    return this.params.allowedSchemas
  }

  get axios() {
    return new Axios(axiosJsonConfig())
  }

  get disallowedSchemas(): Schema[] | undefined {
    return this.params.disallowedSchemas
  }

  get endpoint() {
    return this.params.endpoint
  }

  async get(hashes: Hash[]): Promise<DataLakeData[]> {
    return (await Promise.all(hashes.map(hash => this.getOne(hash)))).filter(exists)
  }

  next(_options?: NextOptions<Sequence> | undefined): PromisableArray<DataLakeData> {
    throw new Error('Method not implemented.')
  }

  protected async getOne(hash: Hash): Promise<DataLakeData | undefined> {
    return asAnyPayload((await this.axios.get(`${this.params.endpoint}/get/${hash}`)).data)
  }

  protected isAllowed(value: DataLakeData | undefined): boolean {
    if (isAnyPayload(value)) {
      return this.isAllowedSchema(value.schema)
    }
    return false
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
