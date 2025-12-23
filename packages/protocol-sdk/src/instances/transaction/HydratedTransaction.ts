import type { AllowedBlockPayload, HydratedTransaction } from '@xyo-network/xl1-protocol'

import type { HydratedBoundWitnessInstance } from '../HydratedBoundWitness.ts'
import type { TransactionFieldsInstance } from './TransactionFields.ts'

export interface HydratedTransactionInstance<T extends HydratedTransaction = HydratedTransaction>
  extends TransactionFieldsInstance<T[1][number] & AllowedBlockPayload>, HydratedBoundWitnessInstance<T> {
}
