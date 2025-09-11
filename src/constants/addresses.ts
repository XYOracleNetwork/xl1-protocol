import type { Address } from '@xylabs/hex'

/**
 * The Zero Address is used as a marker address for various protocol operations.
 */
export const XYO_ZERO_ADDRESS = '0000000000000000000000000000000000000000' as const as Address

/**
 * The Bridge Address is used as a marker address for bridge transactions.
 */
export const XYO_BRIDGE_ADDRESS = '3012193230121932301219323012193230121932' as const as Address

/**
 * The Network Staking Address is used as a marker address for staking the network.
 */
export const XYO_NETWORK_STAKING_ADDRESS = '1969196919691969196919691969196919691969' as const as Address

/**
 * The Step Reward Address is used as a marker address for step rewards.
 */
export const XYO_STEP_REWARD_ADDRESS = '1216197612161976121619761216197612161976' as const as Address
