import type { Hash, JsonValue } from '@xylabs/sdk-js'
import { AsObjectFactory } from '@xylabs/sdk-js'
import type { Payload, WithStorageMeta } from '@xyo-network/payload-model'
import { isPayloadOfSchemaType, isStorageMeta } from '@xyo-network/payload-model'

export interface ChainIndexingServiceStateFields<T extends JsonValue = JsonValue> {
  /**
   * The hash of the last block that this service has indexing
   */
  endBlockHash: Hash
  /**
   * The hash of the block that the service started indexing. If undefined, the service is
   * assumed to have started indexing from the genesis block
   */
  startBlockHash?: Hash
  /**
   * The indexed state for the range
   */
  state: T
}
export const ChainIndexingServiceStateSchema = 'network.xyo.chain.indexing.service.state' as const
export type ChainIndexingServiceStateSchema = typeof ChainIndexingServiceStateSchema

/**
 * The result of a ChainIndexingServiceState
 */
export type ChainIndexingServiceState<T extends JsonValue = JsonValue> = Payload<ChainIndexingServiceStateFields<T>, ChainIndexingServiceStateSchema>

/**
 * Identity functions for determining if an object is an ChainIndexingServiceState
 */
export const isChainIndexingServiceState = <T extends JsonValue = JsonValue>(payload?: unknown): payload is ChainIndexingServiceState<T> => {
  return isPayloadOfSchemaType<ChainIndexingServiceState<T>>(ChainIndexingServiceStateSchema)(payload)
}
export const asChainIndexingServiceState = AsObjectFactory.create<ChainIndexingServiceState<JsonValue>>(isChainIndexingServiceState)

export const isChainIndexingServiceStateWithStorageMeta
  = <T extends JsonValue = JsonValue>(value: unknown): value is WithStorageMeta<ChainIndexingServiceState<T>> =>
    isChainIndexingServiceState<T>(value) && isStorageMeta(value)

export const asChainIndexingServiceStateWithStorageMeta
  = AsObjectFactory.create<WithStorageMeta<ChainIndexingServiceState>>(isChainIndexingServiceStateWithStorageMeta)
