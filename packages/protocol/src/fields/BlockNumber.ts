import { AsObjectFactory } from '@xylabs/sdk-js'
import type { Payload, WithSources } from '@xyo-network/payload-model'
import {
  isPayloadOfSchemaType,
  isPayloadOfSchemaTypeWithSources,
} from '@xyo-network/payload-model'

import type { XL1BlockNumber } from '../model/index.ts'

export const BlockNumberSchema = 'network.xyo.chain.block.number' as const
export type BlockNumberSchema = typeof BlockNumberSchema

export interface BlockNumberFields {
  /**
   * The block number
   */
  block: XL1BlockNumber
}
/**
 * The number of a block
 */
export type BlockNumberPayload = Payload<BlockNumberFields, BlockNumberSchema>

/**
 * Identity function for determining if an object is a BlockNumber
 */
export const isBlockNumberPayload = isPayloadOfSchemaType<BlockNumberPayload>(BlockNumberSchema)
export const asBlockNumberPayload = AsObjectFactory.create<BlockNumberPayload>(isBlockNumberPayload)

/**
 * Identity function for determining if an object is a BlockNumber with sources
 */
export const isBlockNumberPayloadWithSources = isPayloadOfSchemaTypeWithSources<BlockNumberPayload>(BlockNumberSchema)
export const asBlockNumberPayloadWithSources = AsObjectFactory.create<WithSources<BlockNumberPayload>>(isBlockNumberPayloadWithSources)
