import type { AllowedBlockPayload } from '../../protocol/index.ts'
import type { TransactionFeesInstance } from '../Fees.ts'

export interface TransactionFieldsInstance<TBlockPayload extends AllowedBlockPayload = AllowedBlockPayload> {

  elevatedPayloadCount: number
  elevatedPayloads: TBlockPayload[]

  fees: TransactionFeesInstance

  elevatedPayload(index: number): TBlockPayload | undefined
}
