import type { Payload } from '@xyo-network/payload-model'
import { isPayloadOfSchemaType } from '@xyo-network/payload-model'

export const ChainInformationPayloadSchema = 'network.xyo.chain.information' as const
export type ChainInformationPayloadSchema = typeof ChainInformationPayloadSchema

import type { ChainIdentification } from './ChainIdentification.ts'

/**
 * Information required to produce a chain
 */
export interface ChainInformation extends ChainIdentification {
  // TODO: Add these fields which are currently promises on the smart contract
  // forkedAtBlockNumber: bigint
  // forkedAtHash: Hash
  // forkedChainId: Address
}

export type ChainInformationPayload = Payload<ChainIdentification, ChainInformationPayloadSchema>
export const isChainInformationPayload = isPayloadOfSchemaType<ChainInformationPayload>(ChainInformationPayloadSchema)
