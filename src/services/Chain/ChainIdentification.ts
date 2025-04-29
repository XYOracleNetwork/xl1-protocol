import type { Address } from '@xylabs/hex'
import type { Payload } from '@xyo-network/payload-model'
import { isPayloadOfSchemaType } from '@xyo-network/payload-model'

export const ChainIdentificationPayloadSchema = 'network.xyo.chain.identification' as const
export type ChainIdentificationPayloadSchema = typeof ChainIdentificationPayloadSchema

/**
 * Identification required to uniquely identify a chain
 */
export interface ChainIdentification {
  /** @field the id of the chain */
  id: Address
}

export type ChainIdentificationPayload = Payload<ChainIdentification, ChainIdentificationPayloadSchema>
export const isChainIdentificationPayload = isPayloadOfSchemaType<ChainIdentificationPayload>(ChainIdentificationPayloadSchema)
