import { HDWallet } from '@xyo-network/sdk-js'

import { DEFAULT_WALLET_PATH } from './paths.ts'

/**
 * Initializes a wallet to the default XYO path from a mnemonic phrase
 * @param walletPhrase The mnemonic phrase for the wallet
 * @returns A wallet initialized to the default XYO path using the provided phrase
 */
export const generateXyoBaseWalletFromPhrase = (walletPhrase: string) => {
  const wallet = HDWallet.fromPhrase(walletPhrase, DEFAULT_WALLET_PATH)
  return wallet
}
