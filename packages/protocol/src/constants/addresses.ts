import type { Address, EthAddress } from '@xylabs/hex'

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

export const XL1_ETH_MAIN_ERC20_CONTRACT_ADDRESS = '0xf72aE3E0DA743033AbD7A407557D684c1aE66aed' as const as EthAddress

export const XL1_ETH_MAIN_SUB_GOVERNOR_ADDRESS = '0xbA296Bc5D0949C0484f08c56c30FB95CC4675A29' as const as EthAddress

export const XL1_ETH_MAIN_REWARDS_ADDRESS = '0x1a546e091FB4EFb274DC584334a28b8754c4ece7' as const as EthAddress

export const XL1_ETH_MAIN_STAKED_XYO_CHAIN_ADDRESS = '0x319e667cED10452A117472811130444dED357F26' as const as EthAddress

export const XL1_ETH_MAIN_GOVERNANCE_ADDRESS = '0x7595710956d6B14b4f2F51a8dF41379eEeC9074E' as const as EthAddress
