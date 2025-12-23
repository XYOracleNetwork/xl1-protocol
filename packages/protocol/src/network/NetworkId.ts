import type { GatewayName } from '../model/index.ts'

export type DefaultNetworkIds = ('mainnet' & { __gatewayName: true }) | ('sequence' & { __gatewayName: true }) | ('local' & { __gatewayName: true })
export type NetworkId<T extends GatewayName | void = void> = | T extends void ? DefaultNetworkIds : T | DefaultNetworkIds
