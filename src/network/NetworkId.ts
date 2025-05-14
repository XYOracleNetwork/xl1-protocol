export type DefaultNetworkIds = 'mainnet' | 'sequence' | 'local'
export type NetworkId<T extends string | void = void> = | T extends void ? DefaultNetworkIds : T | DefaultNetworkIds
