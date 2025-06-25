import type { Hex } from '@xylabs/hex'
import { AsObjectFactory } from '@xylabs/object'
import type { Payload, WithSources } from '@xyo-network/payload-model'
import {
  isPayloadOfSchemaType,
  isPayloadOfSchemaTypeWithSources,
} from '@xyo-network/payload-model'

export const BlockNumberSchema = 'network.xyo.chain.block.number' as const
export type BlockNumberSchema = typeof BlockNumberSchema

export interface BlockNumberFields {
  /**
   * The block number
   */
  block: Hex
}
/**
 * The number of a block
 */
export type BlockNumber = Payload<BlockNumberFields, BlockNumberSchema>

/**
 * Identity function for determining if an object is a BlockNumber
 */
export const isBlockNumber = isPayloadOfSchemaType<BlockNumber>(BlockNumberSchema)
export const asBlockNumber = AsObjectFactory.create<BlockNumber>(isBlockNumber)

/**
 * Identity function for determining if an object is a BlockNumber with sources
 */
export const isBlockNumberWithSources = isPayloadOfSchemaTypeWithSources<BlockNumber>(BlockNumberSchema)
export const asBlockNumberWithSources = AsObjectFactory.create<WithSources<BlockNumber>>(isBlockNumberWithSources)
