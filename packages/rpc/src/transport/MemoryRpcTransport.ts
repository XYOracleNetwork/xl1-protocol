import type { JsonRpcEngine } from '@metamask/json-rpc-engine'
import type { JsonRpcParams, JsonRpcRequest } from '@metamask/utils'
import {
  assertEx, isObject, isString,
} from '@xylabs/sdk-js'
import { v4 } from 'uuid'
import type { z, ZodRawShape } from 'zod'

import type { RpcSchemaMap } from '../types/index.ts'
import {
  createRequestSchema, createResponseSchema, jsonrpc,
} from '../types/index.ts'
import type { RpcTransport } from './RpcTransport.ts'

export class MemoryRpcTransport<T extends RpcSchemaMap> implements RpcTransport<T> {
  protected readonly _rpcEngine: JsonRpcEngine
  protected readonly _schemas: T
  protected readonly requestSchemas = {} as Record<keyof T, z.ZodObject<ZodRawShape>>
  protected readonly responseSchemas = {} as Record<keyof T, z.ZodObject<ZodRawShape>>

  constructor(rpcEngine: JsonRpcEngine, schemas: T) {
    this._rpcEngine = rpcEngine
    this._schemas = schemas
  }

  async sendRequest<
    TMethod extends keyof T,
  >(
    method: TMethod,
    params?: z.input<T[TMethod]['params']['to']>,
  ): Promise<z.output<T[TMethod]['result']['from']>> {
    // Get schema for method
    // Get handler for method
    const schema = this._schemas[method]
    let requestSchema = this.requestSchemas[method]
    if (!isObject(requestSchema)) {
      const stringMethod = assertEx(isString(method) ? method : null, () => 'Method must be a string')
      requestSchema = createRequestSchema(stringMethod, schema.params.to)
      this.requestSchemas[method] = requestSchema
    }
    const req = {
      jsonrpc, id: v4(), method: method as string, params: params as JsonRpcParams,
    } satisfies JsonRpcRequest
    const request = requestSchema.parse(req) as JsonRpcRequest
    const response = await this._rpcEngine.handle(request)
    let responseSchema = this.responseSchemas[method]
    if (!isObject(responseSchema)) {
      responseSchema = createResponseSchema(schema.result.from)
      this.responseSchemas[method] = responseSchema
    }
    return responseSchema.parse(response)?.result as z.infer<T[TMethod]['result']['from']>
  }
}
