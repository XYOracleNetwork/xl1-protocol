import type { AllowedBlockPayload, HydratedTransaction } from '../../protocol/index.ts'
import type { SignedInstance } from '../modifiers/Signed.ts'
import type { HydratedTransactionInstance } from './HydratedTransaction.ts'

export interface SignedHydratedTransactionInstance<T extends HydratedTransaction = HydratedTransaction,
  TBlockPayload extends AllowedBlockPayload = AllowedBlockPayload> extends HydratedTransactionInstance<T, TBlockPayload>, SignedInstance {
}
