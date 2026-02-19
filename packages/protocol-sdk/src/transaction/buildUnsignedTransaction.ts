import type { Address } from '@xylabs/sdk-js'
import { toHex } from '@xylabs/sdk-js'
import type { Payload } from '@xyo-network/sdk-js'
import { BoundWitnessBuilder, PayloadBuilder } from '@xyo-network/sdk-js'
import type {
  AllowedBlockPayload, ChainId, ExecutableFields, FromFields, TransactionBoundWitness, TransactionBoundWitnessFields, TransactionFeesBigInt,
  UnsignedHydratedTransaction,
  XL1BlockNumber,
} from '@xyo-network/xl1-protocol'
import { defaultTransactionFees } from '@xyo-network/xl1-protocol'

export async function buildUnsignedTransaction(
  chain: ChainId,
  onChainPayloads: AllowedBlockPayload[],
  offChainPayloads: Payload[],
  nbf: XL1BlockNumber,
  exp: XL1BlockNumber,
  from: Address,
  fees: TransactionFeesBigInt = defaultTransactionFees,
): Promise<UnsignedHydratedTransaction> {
  const txBoundWitnessFields: Omit<TransactionBoundWitnessFields, 'from'> = {
    chain,
    fees: {
      base: toHex(fees.base),
      gasLimit: toHex(fees.gasLimit),
      gasPrice: toHex(fees.gasPrice),
      priority: toHex(fees.priority),
    },
    nbf,
    exp,
  }

  const elevatedHashes = await PayloadBuilder.hashes(onChainPayloads)
  const script: string[] = []
  for (const elevatedHash of elevatedHashes) {
    script.push(`elevate|${elevatedHash}`)
  }

  const fields: TransactionBoundWitnessFields & FromFields & Partial<ExecutableFields> = {
    ...txBoundWitnessFields,
    from,
  }

  if (script.length > 0) {
    fields.script = script
  }

  const [tx, txPayloads] = await new BoundWitnessBuilder<TransactionBoundWitness>()
    .fields(fields)
    .meta({ $signatures: [] })
    .payloads([...onChainPayloads, ...offChainPayloads])
    .build(false)

  return [tx, txPayloads]
}
