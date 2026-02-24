import { zodIsFactory } from '@xylabs/sdk-js'
import type {
  Schema, SchemaPayload, WithStorageMeta,
} from '@xyo-network/sdk-js'
import {
  BoundWitnessSchema, isHashMeta, isSchemaPayload, SchemaSchema,
} from '@xyo-network/sdk-js'
import { z } from 'zod'

import type {
  BridgeDestinationObservation, BridgeIntent, BridgeSourceObservation, ChainStakeIntent, HashPayload, StepComplete, TimePayload,
} from '../payload/index.ts'
import {
  BridgeDestinationObservationSchema, BridgeIntentSchema, BridgeSourceObservationSchema, ChainStakeIntentSchema, HashSchema,
  isBridgeDestinationObservation, isBridgeIntent, isBridgeSourceObservation, isChainStakeIntent, isHashPayload, isTimePayload, StepCompleteSchema,
  TimeSchema,
} from '../payload/index.ts'
import { isTransactionBoundWitness, type TransactionBoundWitness } from '../transaction/index.ts'
import {
  isTransfer, type Transfer, TransferSchema,
} from '../TransferPayload.ts'

export type AllowedBlockPayload
  = | BridgeDestinationObservation
    | BridgeIntent
    | BridgeSourceObservation
    | ChainStakeIntent
    | HashPayload
    | SchemaPayload
    | StepComplete
    | TimePayload
    | TransactionBoundWitness
    | Transfer

export const AllowedBlockPayloadSchemas = [
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
] satisfies Schema[]

export const AllowedBlockPayloadSchemaZod = z.enum(AllowedBlockPayloadSchemas)
export type AllowedBlockPayloadSchema = z.infer<typeof AllowedBlockPayloadSchemaZod>
export const isAllowedBlockPayloadSchema = zodIsFactory(AllowedBlockPayloadSchemaZod)

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
