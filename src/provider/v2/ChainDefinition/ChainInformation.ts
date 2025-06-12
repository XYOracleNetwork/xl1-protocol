import type {
  Address, Hash, Hex,
} from '@xylabs/hex'
import type { Payload } from '@xyo-network/payload-model'
import { isPayloadOfSchemaType } from '@xyo-network/payload-model'

import type { ChainIdentification } from './ChainIdentification.ts'

export const ChainInformationPayloadSchema = 'network.xyo.chain.information' as const
export type ChainInformationPayloadSchema = typeof ChainInformationPayloadSchema

/**
 * Information that defines an XL1 chain
 */
export interface ChainInformation extends ChainIdentification {
  forkedAtBlockNumber: bigint
  forkedAtHash: Hash
  forkedChainId: Address
  minWithdrawalBlocks: bigint
  rewardsContract: Hex
  stakingTokenAddress: Hex
}

export type ChainInformationPayload = Payload<ChainInformation, ChainInformationPayloadSchema>
export const isChainInformationPayload = isPayloadOfSchemaType<ChainInformationPayload>(ChainInformationPayloadSchema)
