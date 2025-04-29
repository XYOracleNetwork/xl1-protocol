import type { AllowedBlockPayload, HydratedTransaction } from '../../protocol/index.ts'
import type { HydratedBoundWitnessInstance } from '../HydratedBoundWitness.ts'
import type { TransactionFieldsInstance } from './TransactionFields.ts'

export interface HydratedTransactionInstance<T extends HydratedTransaction = HydratedTransaction,
  TElevatedPayload extends AllowedBlockPayload = AllowedBlockPayload>
  extends TransactionFieldsInstance<T[1][number] & TElevatedPayload>, HydratedBoundWitnessInstance<T> {
}
