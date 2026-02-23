import type {
  JsonRpcFailure, JsonRpcRequest, JsonRpcSuccess,
} from '@metamask/utils'
import {
  axiosJsonConfig,
  isDefined, isError, isUndefinedOrNull,
} from '@xylabs/sdk-js'
import { Axios, isAxiosError } from 'axios'
import { v4 } from 'uuid'
import { z } from 'zod'

import type { RpcSchemaMap } from '../types/index.ts'
import { jsonrpc } from '../types/index.ts'
import type { RpcTransport } from './RpcTransport.ts'

export class HttpRpcTransport<T extends RpcSchemaMap = RpcSchemaMap> implements RpcTransport<T> {
  protected readonly _passThrough: boolean
  protected readonly _rpcUrl: string
  protected readonly _schemas: T

  constructor(rpcUrl: string, schemas: T, passThrough = false) {
    this._rpcUrl = rpcUrl
    this._schemas = schemas
    this._passThrough = passThrough
  }

  async sendRequest<
    TMethod extends keyof T,
  >(
    method: TMethod,
    params?: z.input<T[TMethod]['params']['to']>,
  ): Promise<z.output<T[TMethod]['result']['from']>> {
    return await this.callRpc(this._rpcUrl, this._schemas, method, params)
  }

  private async callRpc<
    TSchemas extends RpcSchemaMap,
    TMethod extends keyof TSchemas,
  >(
    url: string,
    schemas: TSchemas,
    method: TMethod,
    params?: z.input<TSchemas[TMethod]['params']['to']>,
  ): Promise<z.output<TSchemas[TMethod]['result']['from']>> {
    try {
      const id = v4()
      const body: JsonRpcRequest = {
        jsonrpc,
        id,
        method: method as string,
      }

      const schema = schemas[method]

      if (params) {
        body.params = isDefined(schema)
          ? schema.params.to.parse(params) as JsonRpcRequest
          : this._passThrough ? z.json().parse(params) as JsonRpcRequest : undefined
        if (!isDefined(body.params)) {
          throw new Error(`[callRpc] RPC method ${String(method)} missing schema`)
        }
      }

      const res = await new Axios(axiosJsonConfig()).post(url, body)

      const json = res.data
      if (isUndefinedOrNull(json) || (json as Partial<JsonRpcFailure>).error) {
        throw new Error((json as JsonRpcFailure).error.message)
      }

      const result = isDefined(schema)
        ? schemas[method].result.from.parse((json as JsonRpcSuccess).result) as z.output<TSchemas[TMethod]['result']['from']>
        : (json as JsonRpcSuccess).result as z.output<TSchemas[TMethod]['result']['from']>

      return result
    } catch (ex) {
      let message = isError(ex) ? ex.message : String(ex)
      if (isAxiosError(ex)) {
        message = `Http error occurred [${ex.status}|${ex.code ?? '<unknown>'}]: ${ex.message}`
      }
      throw new Error(`Error occurred while calling RPC method ${String(method)}: ${message}`)
    }
  }
}
