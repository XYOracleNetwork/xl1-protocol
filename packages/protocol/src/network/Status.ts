import type { Payload } from '@xyo-network/sdk-js'
import { asSchema, isPayloadOfSchemaType } from '@xyo-network/sdk-js'

export const NetworkStatusSchema = asSchema('network.xyo.chain.status', true)
export type NetworkStatusSchema = typeof NetworkStatusSchema

export type NetworkStatusState = 'online' | 'offline' | 'degraded' | 'unknown'

export type NetworkStatusUpdate = {
  end: number
  start: number
  update: string
}

export interface NetworkStatusFields {
  description: string
  state: NetworkStatusState
  updates?: NetworkStatusUpdate[]
}

export type NetworkStatus = Payload<NetworkStatusFields, NetworkStatusSchema>

export const isNetworkStatus = isPayloadOfSchemaType<NetworkStatus>(NetworkStatusSchema)
