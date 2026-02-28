import type { Hash } from '@xylabs/sdk-js'
import { delay, isDefined } from '@xylabs/sdk-js'
import type {
  ConfirmSubmittedTransactionOptions, SignedHydratedTransaction,
  XyoViewer,
} from '@xyo-network/xl1-protocol'

const DEFAULT_CONFIRMATION_ATTEMPTS = 20
const DEFAULT_DELAY_BETWEEN_ATTEMPTS = 1000 // milliseconds

/**
 * Confirms a submitted transaction by checking if it has been included in the blockchain.
 * @param viewer The viewer
 * @param txHash The hash of the transaction to confirm
 * @param options Options for confirmation
 * @returns The confirmed transaction or throws an error if not confirmed
 */
export const confirmSubmittedTransaction = async (
  viewer: XyoViewer,
  txHash: Hash,
  options?: ConfirmSubmittedTransactionOptions,
): Promise<SignedHydratedTransaction> => {
  const { attempts: maxAttempts = DEFAULT_CONFIRMATION_ATTEMPTS, delay: attemptDelay = DEFAULT_DELAY_BETWEEN_ATTEMPTS } = options ?? {}
  options?.logger?.log('🚀 confirming transaction:', txHash, '\n')
  let attempts = 0
  while (true) {
    const tx = await viewer.transaction.byHash(txHash) ?? undefined
    if (isDefined(tx)) {
      options?.logger?.log('✅ Transaction confirmed:', txHash, '\n')
      return tx
    } else {
      attempts++
      if (attempts > maxAttempts) {
        options?.logger?.error(`⚠️ Transaction not confirmed after ${maxAttempts} attempts`)
        throw new Error(`Transaction ${txHash} not confirmed after ${maxAttempts} attempts`)
      } else {
        options?.logger?.log(`🔄 Transaction not confirmed yet, attempt ${attempts}. Retrying...`, '\n')
        await delay(attemptDelay)
      }
    }
  }
}
