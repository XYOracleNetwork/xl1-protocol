export interface BlockFieldsInstance<TTransactionResult> {
  privatePayloadCount: number

  publicPayloadCount: number

  reward: bigint

  transactionCount: number

  transactions: TTransactionResult[]

  transaction(index: number): TTransactionResult | undefined
}
