import type { Payload } from '@xyo-network/payload-model'
import { isPayloadOfSchemaType } from '@xyo-network/payload-model'

export const NetworkStatusSchema = 'network.xyo.chain.status' as const
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
