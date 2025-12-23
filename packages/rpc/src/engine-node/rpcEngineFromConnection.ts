import { createAsyncMiddleware, JsonRpcEngine } from '@metamask/json-rpc-engine'
import type { Json } from '@metamask/utils'
import type { XyoConnection } from '@xyo-network/xl1-protocol-sdk'

import { requestSchemas, rpcMethodHandlersFromConnection } from '../engine/index.ts'
import {
  AllRpcSchemas, createRequestSchema, JsonRpcErrorCodes,
} from '../types/index.ts'

/* networkStakeViewer is temporary as a param until it goes into root viewer */
export const rpcEngineFromConnection = (
  connection: XyoConnection,
) => {
  const engine = new JsonRpcEngine()
  const handlers = rpcMethodHandlersFromConnection(connection)
  engine.push(
    createAsyncMiddleware(async (req, res) => {
      // Get method name
      const method = req.method as keyof typeof handlers & keyof typeof requestSchemas
      // Get schema for method
      const handler = handlers[method]
      // Get handler for method
      const schema = AllRpcSchemas[method]

      // If no schema or handler exists
      if (schema === undefined || handler === undefined) {
        // return method not found error
        res.error = JsonRpcErrorCodes.MethodNotFound
        return
      }

      // Validate request according to schema
      let requestSchema = requestSchemas[method]
      if (requestSchema == undefined) {
        requestSchema = createRequestSchema(method, schema.params.from)
        requestSchemas[method] = requestSchema
      }

      const parsed = requestSchema.safeParse(req)
      // If validation fails
      if (!parsed.success) {
        console.error('RPC Request Validation Error:', parsed.error)
        res.error = {
          // Return invalid params error
          ...JsonRpcErrorCodes.InvalidParams,
          // with the specific validation error message
          message: parsed.error.message,
        }
        return
      }

      // Call handler with validated params
      const { params } = parsed.data
      try {
        const result = await handler(params as never)
        // Parse handler result according to schema
        res.result = schema.result.to.parse(result) as Json
      } catch (error) {
        console.error('RPC Response Handler Error:', error)
        throw error
      }
    }),
  )
  return engine
}
