import type { Hash, Logger } from '@xylabs/sdk-js'
import { delay, isDefined } from '@xylabs/sdk-js'
import type { SignedHydratedTransaction } from '@xyo-network/xl1-protocol'

import type { XyoViewer } from '../provider/index.ts'

const DEFAULT_CONFIRMATION_ATTEMPTS = 20
const DEFAULT_DELAY_BETWEEN_ATTEMPTS = 1000 // milliseconds

export type ConfirmSubmittedTransactionOptions = {
  /**
   * Number of attempts to confirm the transaction.
   * Defaults to 20.
   */
  attempts?: number
  /**
   * Delay in milliseconds between confirmation attempts.
   * Defaults to 1000 (1 second).
   */
  delay?: number
  /**
   * Optional logger instance for logging progress.
   */
  logger?: Logger
}

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
    const tx = await viewer.transactionByHash(txHash) ?? undefined
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
