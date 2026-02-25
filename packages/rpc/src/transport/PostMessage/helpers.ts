import type { JsonRpcRequest } from '@metamask/utils'
import type { JsonObject } from '@xylabs/sdk-js'

export type JsonRpcRequestWithId = JsonRpcRequest & {
  id: string
}

export interface RpcError extends JsonObject {
  error: boolean
  message: string
}
