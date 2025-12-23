import type { Hash } from '@xylabs/sdk-js'
import type { Payload, Schema } from '@xyo-network/payload-model'
import type { AllowedBlockPayload } from '@xyo-network/xl1-protocol'

import type { TransactionFeesInstance } from '../Fees.ts'

export interface TransactionFieldsInstance<TBlockPayload extends AllowedBlockPayload = AllowedBlockPayload> {
  elevatedPayloadCount: number
  elevatedPayloads: TBlockPayload[]
  externalPayloads: Record<Hash, Schema | Payload>

  fees: TransactionFeesInstance

  privateExternalPayloads: Record<Hash, Schema>
  publicExternalPayloads: Payload[]

  signatureCount: number

  elevatedPayload(index: number): TBlockPayload | undefined
  reward(): bigint
}
