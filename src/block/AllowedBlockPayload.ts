import { BoundWitnessSchema } from '@xyo-network/boundwitness-model'
import type { Schema, WithStorageMeta } from '@xyo-network/payload-model'
import { isHashMeta, isSchema } from '@xyo-network/payload-model'
import type { SchemaPayload } from '@xyo-network/schema-payload-plugin'
import { isSchemaPayload, SchemaSchema } from '@xyo-network/schema-payload-plugin'
import z from 'zod'

import type {
  BridgeDestinationObservation, BridgeIntent, BridgeSourceObservation, ChainStakeIntent, HashPayload, StepComplete, TimePayload, Transfer,
} from '../payload/index.ts'
import {
  BridgeDestinationObservationSchema, BridgeIntentSchema, BridgeSourceObservationSchema, ChainStakeIntentSchema, HashSchema,
  isBridgeDestinationObservation, isBridgeIntent, isBridgeSourceObservation, isChainStakeIntent, isHashPayload, isTimePayload, isTransfer, StepCompleteSchema,
  TimeSchema, TransferSchema,
} from '../payload/index.ts'
import { isTransactionBoundWitness, type TransactionBoundWitness } from '../transaction/index.ts'

export type AllowedBlockPayload
  = Transfer
    | BridgeDestinationObservation
    | BridgeIntent
    | BridgeSourceObservation
    | ChainStakeIntent
    | HashPayload
    | SchemaPayload
    | StepComplete
    | TimePayload
    | TransactionBoundWitness

export const AllowedBlockPayloadSchemas: Schema[] = [
  BoundWitnessSchema,
  BridgeDestinationObservationSchema,
  BridgeIntentSchema,
  BridgeSourceObservationSchema,
  ChainStakeIntentSchema,
  HashSchema,
  SchemaSchema,
  StepCompleteSchema,
  TimeSchema,
  TransferSchema,
]

export type AllowedBlockPayloadSchema = typeof AllowedBlockPayloadSchemas[number]

export const isAllowedBlockPayloadSchema = (value: unknown): value is AllowedBlockPayloadSchema => {
  return isSchema(value) && AllowedBlockPayloadSchemas.includes(value)
}

export const isAllowedBlockPayload = (value: unknown): value is AllowedBlockPayload => {
  return isTransfer(value)
    || isBridgeDestinationObservation(value)
    || isBridgeIntent(value)
    || isBridgeSourceObservation(value)
    || isChainStakeIntent(value)
    || isHashPayload(value)
    || isSchemaPayload(value)
    || isTimePayload(value)
    || isTransactionBoundWitness(value)
}

export const isAllowedBlockPayloadWithHashMeta = (value: unknown): value is WithStorageMeta<AllowedBlockPayload> => {
  return isAllowedBlockPayload(value) && isHashMeta(value)
}

export const AllowedBlockPayloadZod = z.object({ schema: z.enum(AllowedBlockPayloadSchemas) })
