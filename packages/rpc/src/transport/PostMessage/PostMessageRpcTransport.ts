import type {
  Json,
  JsonRpcRequest,
} from '@metamask/utils'
import {
  isJsonRpcFailure, isJsonRpcResponse, isJsonRpcSuccess,
} from '@metamask/utils'
import type { Logger } from '@xylabs/sdk-js'
import { isDefined } from '@xylabs/sdk-js'
import { v4 } from 'uuid'
import type * as z from 'zod'

import type { RpcSchemaMap } from '../../types/index.ts'
import { jsonrpc } from '../../types/index.ts'
import type { RpcTransport } from '../RpcTransport.ts'
import type { MessageBusConnection } from './bus/index.ts'
import { PostMessageBus } from './bus/index.ts'
import type { SessionMessageEnvelope } from './SessionEnvelope.ts'

export class PostMessageRpcTransport<T extends RpcSchemaMap> implements RpcTransport<T> {
  private readonly _destination?: string
  private readonly _logger?: Logger
  private readonly _schemas: T
  private readonly _sessionId: string | undefined

  constructor(
    defaultDestination: string,
    schemas: T,
    sessionId: string,
    logger?: Logger,
  ) {
    this._schemas = schemas
    this._destination = defaultDestination
    this._logger = logger
    this._sessionId = sessionId
  }

  protected get destination() {
    return this._destination
  }

  protected get logger() {
    return this._logger
  }

  protected get schemas() {
    return this._schemas
  }

  protected get sessionId() {
    return this._sessionId
  }

  async sendRequest<
    TMethod extends keyof T,
  >(
    method: TMethod,
    params?: z.input<T[TMethod]['params']['to']>,
  ): Promise<z.output<T[TMethod]['result']['from']>> {
    const id = v4()
    return await this.callRpc(this.schemas, method, id, params)
  }

  private async callRpc<
    TSchemas extends RpcSchemaMap,
    TMethod extends keyof TSchemas,
  >(
    schemas: TSchemas,
    method: TMethod,
    id: string,
    params?: z.input<TSchemas[TMethod]['params']['to']>,
  ): Promise<z.output<TSchemas[TMethod]['result']['from']>> {
    this.logger?.log(`PostMessageRpcTransport: callRpc method=${String(method)} id=${id}`)
    const body: JsonRpcRequest = {
      jsonrpc,
      id,
      method: method as string,
      params: ((isDefined(params) && isDefined(schemas[method])) ? schemas[method].params.to.parse(params) : params) as Json[],
    }

    return await new Promise((resolve, reject) => {
      const postMessageBus = new PostMessageBus(this.sessionId)
      const postMessageConnection: MessageBusConnection<MessageEvent> = {
        listener: (event) => {
          if ('data' in event.data && isJsonRpcResponse(event.data.data)) {
            const response = event.data.data
            if (isJsonRpcSuccess(response) && Array.isArray(response.result)) {
              // Handle successful response
              const ret = schemas[method].result.from.parse(response.result[0]) as z.infer<TSchemas[TMethod]['result']['from']>
              resolve(ret)
              return
            }
            if (isJsonRpcFailure(response)) {
              // Handle error response
              console.error('Error in PostMessageRpcTransport:', response)
              reject(new Error(response.error.message))
              return
            }
            throw new Error(`Invalid response from wallet extension, ${JSON.stringify(event.data)}`)
          }
        },
        id,
      }
      postMessageBus.addConnection(postMessageConnection)

      const message: SessionMessageEnvelope<JsonRpcRequest> = {
        data: body, destination: this.destination, sessionId: this.sessionId ?? '',
      }
      postMessageBus.postMessage(message)
    })
  }
}
