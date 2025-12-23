import type { SignatureInstance } from '../Signature.ts'

export interface BlockFieldsInstance<TTransactionResult> {
  reward: bigint

  signatureCount: number

  signatures: SignatureInstance[]

  transactionCount: number

  transactions: TTransactionResult[]

  signature(index: number): SignatureInstance | undefined

  transaction(index: number): TTransactionResult | undefined
}
