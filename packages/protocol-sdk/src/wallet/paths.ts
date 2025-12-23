export const WALLET_COMPLIANCE = '44\'' as const

export const COIN_TYPES = { Ethereum: '60\'' } as const

export const ACCOUNT_TYPE = { GANACHE: '0\'', XYO: '0\'' } as const

export const CHANGE_ADDRESS = { META_MASK: '0', XYO: '0' } as const

export const ADDRESS_INDEX = { META_MASK: '0', XYO: '0' } as const

export const DEFAULT_WALLET_PATH = `m/${WALLET_COMPLIANCE}/${COIN_TYPES.Ethereum}/${ACCOUNT_TYPE.XYO}/${CHANGE_ADDRESS.XYO}`
