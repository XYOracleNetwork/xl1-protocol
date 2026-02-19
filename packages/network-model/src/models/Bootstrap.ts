import type { Address } from '@xylabs/sdk-js'
import { AsObjectFactory } from '@xylabs/sdk-js'
import type { Payload } from '@xyo-network/sdk-js'
import { asSchema, isPayloadOfSchemaType } from '@xyo-network/sdk-js'
import type { ChainId, NetworkId } from '@xyo-network/xl1-protocol'

export interface ChainConnection {
  /** Chain Identifier - can be a hex (eth contract address) or a string */
  chain?: ChainId
  /** Name of the chain */
  name: string
  /** Url for accessing the network */
  url: string
}

export const NetworkBootstrapSchema = asSchema('network.xyo.network.bootstrap', true)
export type NetworkBootstrapSchema = typeof NetworkBootstrapSchema

export interface ChainForkFields {
  /** Block Number at which the chain was forked from */
  forkedAtLastBlockNumber?: string
  /** Hash in the last block the chain was forked from */
  forkedAtLastHash?: string
  /** Address of the forked chain */
  forkedChainId?: Address
}

export interface NetworkFields {
  /** Description of the network */
  description: string
  /** Url for accessing the network explorer */
  explorerUrl?: string
  /** string representation of the icon (svg) */
  icon?: string
  /** Machine-readable identifier */
  id: NetworkId
  schema: NetworkBootstrapSchema
  /** Symbol of the network */
  symbol?: string
}

/** Optional Properties can be found walking the chain to the genesis block */
export interface NetworkBootstrapFields extends NetworkFields, ChainForkFields, ChainConnection {}

export interface Network extends NetworkBootstrap {
  custom: boolean
}

export type NetworkBootstrap = Payload<NetworkBootstrapFields, NetworkBootstrapSchema>

export const isNetworkBootstrap = isPayloadOfSchemaType<NetworkBootstrap>(NetworkBootstrapSchema)

export const asOptionalNetwork = AsObjectFactory.createOptional(isNetworkBootstrap)
