import { createAsyncMiddleware, JsonRpcEngine } from '@metamask/json-rpc-engine'
import type { Json } from '@metamask/utils'
import { asAddress, toAddress } from '@xylabs/sdk-js'
import { Account } from '@xyo-network/account'
import type { ChainId } from '@xyo-network/xl1-protocol'
import { asXL1BlockNumber, defaultTransactionFees } from '@xyo-network/xl1-protocol'
import type { XyoSigner } from '@xyo-network/xl1-protocol-sdk'
import { buildUnsignedTransaction, SimpleXyoSigner } from '@xyo-network/xl1-protocol-sdk'
import {
  beforeAll, describe, expect, it,
} from 'vitest'

import { requestSchemas, rpcMethodHandlersFromSigner } from '../../../engine/index.ts'
import { MemoryRpcTransport } from '../../../transport/index.ts'
import {
  createRequestSchema, JsonRpcErrorCodes, XyoSignerRpcSchemas,
} from '../../../types/index.ts'
import { RpcXyoSigner } from '../JsonRpcXyoSigner.ts'

describe('RpcEngine - XyoSigner', () => {
  let sut: XyoSigner
  const chain = toAddress('2AAE728aFd1777b79c34D79c4523797F9D9965b0') as ChainId
  beforeAll(async () => {
    const account = await Account.random()
    const signer = await SimpleXyoSigner.create({ account })
    const handlers = rpcMethodHandlersFromSigner(signer)
    const engine = new JsonRpcEngine()
    engine.push(
      createAsyncMiddleware(async (req, res) => {
      // Get method name
        const method = req.method as keyof typeof handlers & keyof typeof requestSchemas
        // Get schema for method
        const handler = handlers[method]
        // Get handler for method
        const schema = XyoSignerRpcSchemas[method]

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
        const result = await handler(params as never)
        // Parse handler result according to schema
        res.result = schema.result.to.parse(result) as Json
      }),
    )
    const transport = new MemoryRpcTransport(engine, XyoSignerRpcSchemas)
    sut = new RpcXyoSigner(transport)
  })
  describe('address', () => {
    it('should return signer addresses', async () => {
      const address = await sut.address()
      expect(asAddress(address)).toBeDefined()
    })
  })
  describe('signTransaction', () => {
    it('should return signed transaction', async () => {
      const address = await sut.address()
      const unsignedTransaction = await buildUnsignedTransaction(
        chain,
        [],
        [],
        asXL1BlockNumber(0, true),
        asXL1BlockNumber(1000, true),
        address,
        defaultTransactionFees,
      )
      const signedTransaction = await sut.signTransaction(unsignedTransaction)
      expect(signedTransaction).toBeDefined()
    })
  })
})
