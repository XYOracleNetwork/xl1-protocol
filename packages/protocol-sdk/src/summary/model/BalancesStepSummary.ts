import type { Address } from '@xylabs/sdk-js'
import { AsObjectFactory } from '@xylabs/sdk-js'
import type { WithStorageMeta } from '@xyo-network/sdk-js'
import {
  asSchema, isPayloadOfSchemaType, isStorageMeta,
} from '@xyo-network/sdk-js'

import type { SignedBigInt } from '../../SignedBigInt.ts'
import type { StepSummary } from './StepSummary.ts'

export const BalancesStepSummarySchema = asSchema('network.xyo.step.summary.balances', true)
export type BalancesStepSummarySchema = typeof BalancesStepSummarySchema

export type BalancesStepSummary = StepSummary<{
  balances: Record<Address, SignedBigInt>
}, BalancesStepSummarySchema>

/**
 * Identity function for determining if an object is an BalancesStepSummary
 */
export const isBalancesStepSummary = isPayloadOfSchemaType<BalancesStepSummary>(BalancesStepSummarySchema)
export const asBalancesStepSummary = AsObjectFactory.create<BalancesStepSummary>(isBalancesStepSummary)

/**
 * Identity function for determining if an object is an BalancesStepSummary with Storage Meta
 */
export const isBalancesStepSummaryWithStorageMeta = (value: unknown): value is WithStorageMeta<BalancesStepSummary> => {
  return isBalancesStepSummary(value) && isStorageMeta(value)
}
export const asBalancesStepSummaryWithStorageMeta = AsObjectFactory.create<WithStorageMeta<BalancesStepSummary>>(isBalancesStepSummaryWithStorageMeta)
