import { AsObjectFactory } from '@xylabs/sdk-js'
import type { Payload, WithSources } from '@xyo-network/payload-model'
import {
  asSchema,
  isPayloadOfSchemaType,
  isPayloadOfSchemaTypeWithSources,
} from '@xyo-network/payload-model'

import type { XL1BlockNumber } from '../BlockNumber/index.ts'

export const BlockNumberSchema = asSchema('network.xyo.chain.block.number', true)
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
