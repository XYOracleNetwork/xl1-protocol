import { AsObjectFactory } from '@xylabs/sdk-js'
import type { Schema, WithStorageMeta } from '@xyo-network/payload-model'
import { isPayloadOfSchemaType, isStorageMeta } from '@xyo-network/payload-model'

import type { StepSummary } from './StepSummary.ts'

export const SchemasStepSummarySchema: Schema = 'network.xyo.step.summary.schemas'
export type SchemasStepSummarySchema = typeof SchemasStepSummarySchema

export type SchemasStepSummary = StepSummary<{
  schemas: Record<Schema, number>
}, SchemasStepSummarySchema>

/**
 * Identity function for determining if an object is an SchemasStepSummary
 */
export const isSchemasStepSummary = isPayloadOfSchemaType<SchemasStepSummary>(SchemasStepSummarySchema)
export const asSchemasStepSummary = AsObjectFactory.create<SchemasStepSummary>(isSchemasStepSummary)

/**
 * Identity function for determining if an object is an SchemasStepSummary with Storage Meta
 */
export const isSchemasStepSummaryWithStorageMeta = (value: unknown): value is WithStorageMeta<SchemasStepSummary> => {
  return isSchemasStepSummary(value) && isStorageMeta(value)
}
export const asSchemasStepSummaryWithStorageMeta = AsObjectFactory.create<WithStorageMeta<SchemasStepSummary>>(isSchemasStepSummaryWithStorageMeta)
