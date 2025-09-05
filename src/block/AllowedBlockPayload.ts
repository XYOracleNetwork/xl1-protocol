import { BoundWitnessSchema } from '@xyo-network/boundwitness-model'
import type { Schema, WithStorageMeta } from '@xyo-network/payload-model'
import { isHashStorageMeta, isSchema } from '@xyo-network/payload-model'
import type { SchemaPayload } from '@xyo-network/schema-payload-plugin'
import { isSchemaPayload, SchemaSchema } from '@xyo-network/schema-payload-plugin'
import z from 'zod'

import type {
  BridgeBack,
  BridgeComplete,
  BridgeRequest,
  ChainStakeIntent, HashPayload, StepComplete,
  TimePayload,
  Transfer,
} from '../payload/index.ts'
import {
  BridgeBackSchema, BridgeCompleteSchema, BridgeRequestSchema, ChainStakeIntentSchema, HashSchema, isBridgeBack, isBridgeComplete, isBridgeRequest,
  isChainStakeIntent, isHashPayload, isTimePayload, isTransfer, StepCompleteSchema, TimeSchema, TransferSchema,
} from '../payload/index.ts'
import { isTransactionBoundWitness, type TransactionBoundWitness } from '../transaction/index.ts'

export type AllowedBlockPayload = Transfer
  | ChainStakeIntent | SchemaPayload
  | TransactionBoundWitness | HashPayload
  | StepComplete | TimePayload
  | BridgeRequest | BridgeComplete
  | BridgeBack

export const AllowedBlockPayloadSchemas: Schema[] = [TransferSchema,
  ChainStakeIntentSchema,
  SchemaSchema,
  BoundWitnessSchema,
  HashSchema,
  StepCompleteSchema,
  TimeSchema,
  BridgeCompleteSchema,
  BridgeRequestSchema,
  BridgeBackSchema,
]

export type AllowedBlockPayloadSchema = typeof AllowedBlockPayloadSchemas[number]

export const isAllowedBlockPayloadSchema = (value: unknown): value is AllowedBlockPayloadSchema => {
  return isSchema(value) && AllowedBlockPayloadSchemas.includes(value)
}

export const isAllowedBlockPayload = (value: unknown): value is AllowedBlockPayload => {
  return isTransfer(value) || isChainStakeIntent(value) || isSchemaPayload(value) || isTransactionBoundWitness(value)
    || isHashPayload(value) || isTimePayload(value) || isBridgeBack(value) || isBridgeComplete(value) || isBridgeRequest(value)
}

export const isAllowedBlockPayloadWithHashStorageMeta = (value: unknown): value is WithStorageMeta<AllowedBlockPayload> => {
  return isAllowedBlockPayload(value) && isHashStorageMeta(value)
}

export const AllowedBlockPayloadZod = z.object({ schema: z.enum(AllowedBlockPayloadSchemas) })
