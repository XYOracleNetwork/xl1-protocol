import { AsObjectFactory, HashZod } from '@xylabs/sdk-js'
import {
  asSchema, isPayloadOfZodType, type Payload,
} from '@xyo-network/sdk-js'
import { z } from 'zod'

export const EIP712SignaturePayloadFieldsZod = z.object({
  address: z.string(),
  hash: HashZod,
  signature: z.string(),
})

export type EIP712SignaturePayloadFields = z.infer<typeof EIP712SignaturePayloadFieldsZod>

export const EIP712SignaturePayloadSchema = asSchema('network.xyo.chains.ethereum.eip712.signature', true)
export type EIP712SignaturePayloadSchema = typeof EIP712SignaturePayloadSchema

export type EIP712SignaturePayload = Payload<EIP712SignaturePayloadFields, EIP712SignaturePayloadSchema>

export const isEIP712SignaturePayload = isPayloadOfZodType<EIP712SignaturePayload>(
  EIP712SignaturePayloadFieldsZod,
  EIP712SignaturePayloadSchema,
)

export const asEIP712SignaturePayload = AsObjectFactory.create(isEIP712SignaturePayload)
