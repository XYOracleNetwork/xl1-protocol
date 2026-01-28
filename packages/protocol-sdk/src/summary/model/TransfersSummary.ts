import type { Address } from '@xylabs/sdk-js'
import { AsObjectFactory } from '@xylabs/sdk-js'
import type { WithStorageMeta } from '@xyo-network/payload-model'
import {
  asSchema, isPayloadOfSchemaType, isStorageMeta,
} from '@xyo-network/payload-model'

import type { SignedBigInt } from '../../SignedBigInt.ts'
import type { StepSummary } from './StepSummary.ts'

export const TransfersStepSummarySchema = asSchema('network.xyo.step.summary.transfer', true)
export type TransfersStepSummarySchema = typeof TransfersStepSummarySchema

export type TransfersStepSummary = StepSummary<{
  transfers: Record<Address, Record<Address, SignedBigInt>>
}, TransfersStepSummarySchema>

/**
 * Identity function for determining if an object is an TransfersStepSummary
 */
export const isTransfersStepSummary = isPayloadOfSchemaType<TransfersStepSummary>(TransfersStepSummarySchema)
export const asTransfersStepSummary = AsObjectFactory.create<TransfersStepSummary>(isTransfersStepSummary)

/**
 * Identity function for determining if an object is an TransfersStepSummary with Storage Meta
 */
export const isTransfersStepSummaryWithStorageMeta = (value: unknown): value is WithStorageMeta<TransfersStepSummary> => {
  return isTransfersStepSummary(value) && isStorageMeta(value)
}
export const asTransfersStepSummaryWithStorageMeta
  = AsObjectFactory.create<WithStorageMeta<TransfersStepSummary>>(isTransfersStepSummaryWithStorageMeta)
