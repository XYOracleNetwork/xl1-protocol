import {
  assertEx, hexFromArrayBuffer, toArrayBuffer,
} from '@xylabs/sdk-js'
import type { AccountInstance } from '@xyo-network/account-model'
import type { Signed } from '@xyo-network/boundwitness-model'
import { PayloadBuilder } from '@xyo-network/sdk-js'
import type { TransactionBoundWitness, UnsignedTransactionBoundWitness } from '@xyo-network/xl1-protocol'

/**
 * Signs an unsigned transaction with the provided account.
 * @param tx The transaction to sign
 * @param account The account to sign the transaction with
 * @returns The signed transaction
 */
export async function signTransaction(tx: UnsignedTransactionBoundWitness, account: AccountInstance) {
  assertEx(tx.from === account.address, () => 'Signer address does not match transaction from address')
  // Clone tx to prevent modifying original
  const unsignedTx = structuredClone(tx)
  // Update dynamic fields based on account
  unsignedTx.addresses = [account.address]
  unsignedTx.previous_hashes = [account.previousHash ?? null]
  // Calculate tx hash and sign it
  const hash = await PayloadBuilder.dataHash(unsignedTx)
  const hashBytes = toArrayBuffer(hash)
  const [signature] = await account.sign(hashBytes)
  // Append the signatures to the transaction
  const result: Signed<TransactionBoundWitness> = {
    ...unsignedTx,
    $signatures: [hexFromArrayBuffer(signature)],
  }
  // Return the signed transaction
  return result
}
