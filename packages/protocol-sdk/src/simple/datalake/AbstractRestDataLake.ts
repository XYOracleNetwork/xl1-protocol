import { axiosJsonConfig } from '@xylabs/axios'
import { exists, type Hash } from '@xylabs/sdk-js'
import type { Payload, Schema } from '@xyo-network/payload-model'
import {
  isAnyPayload,
  PayloadZodLoose,
} from '@xyo-network/payload-model'
import type { DataLakeData } from '@xyo-network/xl1-protocol'
import { Axios } from 'axios'

import { AbstractCreatableProvider, type CreatableProviderParams } from '../../CreatableProvider/index.ts'

export interface AbstractRestDataLakeParams extends
  CreatableProviderParams {

  allowedSchemas?: Schema[]
  disallowedSchemas?: Schema[]
  endpoint: string
}

export abstract class AbstractRestDataLake<TParams extends AbstractRestDataLakeParams = AbstractRestDataLakeParams> extends
  AbstractCreatableProvider<TParams> {
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

  async get(hash: Hash): Promise<DataLakeData | undefined> {
    const { data } = await this.axios.get(`${this.params.endpoint}/get/${hash}`)
    return (this.isAllowed(data) ? data : undefined) ?? undefined
  }

  async getMany(hashes: Hash[]): Promise<DataLakeData[]> {
    return (await Promise.all(hashes.map(hash => this.get(hash)))).filter(exists)
  }

  async has(hash: Hash): Promise<boolean> {
    const value = await this.get(hash)
    if (isAnyPayload(value)) {
      return this.isAllowed(value)
    }
    return !!(await this.get(hash))
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
