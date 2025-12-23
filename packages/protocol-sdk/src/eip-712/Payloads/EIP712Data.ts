import { AsObjectFactory } from '@xylabs/sdk-js'
import { isPayloadOfZodType, type Payload } from '@xyo-network/payload-model'
import { z } from 'zod'

import {
  TypedDataDomainZod, TypedDataTypesZod, TypedDataValueZod,
} from '../Types.ts'

export const EIP712DataPayloadFieldsZod = z.object({
  domain: TypedDataDomainZod,
  types: TypedDataTypesZod,
  values: TypedDataValueZod,
})
export type EIP712DataPayloadFields = z.infer<typeof EIP712DataPayloadFieldsZod>

export const EIP712DataPayloadSchema = 'network.xyo.chains.ethereum.eip712.data' as const
export type EIP712DataPayloadSchema = typeof EIP712DataPayloadSchema

export type EIP712DataPayload = Payload<EIP712DataPayloadFields, EIP712DataPayloadSchema>

export const isEIP712DataPayload = isPayloadOfZodType<EIP712DataPayload>(
  EIP712DataPayloadFieldsZod,
  EIP712DataPayloadSchema,
)

export const asEIP712DataPayload = AsObjectFactory.create(isEIP712DataPayload)
