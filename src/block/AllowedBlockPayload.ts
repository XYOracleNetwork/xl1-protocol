import { BoundWitnessSchema } from '@xyo-network/boundwitness-model'
import type { Schema, WithStorageMeta } from '@xyo-network/payload-model'
import { isHashStorageMeta, isSchema } from '@xyo-network/payload-model'
import type { SchemaPayload } from '@xyo-network/schema-payload-plugin'
import { isSchemaPayload, SchemaSchema } from '@xyo-network/schema-payload-plugin'

import type {
  ChainStakeIntent, HashPayload, StepComplete,
  Transfer,
  TransferRequest,
} from '../payload/index.ts'
import {
  ChainStakeIntentSchema, HashSchema, isChainStakeIntent, isHashPayload, isTransfer, StepCompleteSchema, TransferRequestSchema, TransferSchema,
} from '../payload/index.ts'
import { isTransactionBoundWitness, type TransactionBoundWitness } from '../transaction/index.ts'

export type AllowedBlockPayload = Transfer | ChainStakeIntent | SchemaPayload | TransactionBoundWitness | HashPayload | TransferRequest | StepComplete

export const AllowedBlockPayloadSchemas: Schema[] = [TransferSchema,
  ChainStakeIntentSchema,
  SchemaSchema,
  BoundWitnessSchema,
  HashSchema,
  TransferRequestSchema,
  StepCompleteSchema,
]

export type AllowedBlockPayloadSchema = typeof AllowedBlockPayloadSchemas[number]

export const isAllowedBlockPayloadSchema = (value: unknown): value is AllowedBlockPayloadSchema => {
  return isSchema(value) && AllowedBlockPayloadSchemas.includes(value)
}

export const isAllowedBlockPayload = (value: unknown): value is AllowedBlockPayload => {
  return isTransfer(value) || isChainStakeIntent(value) || isSchemaPayload(value) || isTransactionBoundWitness(value) || isHashPayload(value)
}

export const isAllowedBlockPayloadWithHashStorageMeta = (value: unknown): value is WithStorageMeta<AllowedBlockPayload> => {
  return isAllowedBlockPayload(value) && isHashStorageMeta(value)
}
