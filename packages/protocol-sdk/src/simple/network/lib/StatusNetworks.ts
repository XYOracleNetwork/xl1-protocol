import type { GatewayName } from '@xyo-network/xl1-protocol'

export type StatusNetwork = {
  id: GatewayName
  statusUrl: string
}

export const MainNetworkStats: StatusNetwork = {
  id: 'mainnet' as GatewayName,
  statusUrl: 'https://xyo.network/chain-network-status-mainnet.json',
}

export const SequenceNetworkStats: StatusNetwork = {
  id: 'sequence' as GatewayName,
  statusUrl: 'https://beta.xyo.network/chain-network-status-sequence.json',
}

export const LocalNetworkStats: StatusNetwork = {
  id: 'local' as GatewayName,
  statusUrl: 'http://localhost:3002/chain-network-status-local.json',
}

export const StatusNetworks: Record<GatewayName, StatusNetwork> = {
  ['mainnet' as GatewayName]: MainNetworkStats,
  ['sequence' as GatewayName]: SequenceNetworkStats,
  ['local' as GatewayName]: LocalNetworkStats,
}
