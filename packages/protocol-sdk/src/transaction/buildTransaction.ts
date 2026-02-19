import type { Address } from '@xylabs/sdk-js'
import { assertEx, toHex } from '@xylabs/sdk-js'
import type { AccountInstance } from '@xyo-network/account-model'
import type { Payload } from '@xyo-network/sdk-js'
import { BoundWitnessBuilder, PayloadBuilder } from '@xyo-network/sdk-js'
import type {
  AllowedBlockPayload,
  ChainId,
  ExecutableFields,
  FromFields,
  SignedHydratedTransactionWithHashMeta,
  TransactionBoundWitness, TransactionBoundWitnessFields, TransactionFeesBigInt,
  XL1BlockNumber,
} from '@xyo-network/xl1-protocol'
import { defaultTransactionFees } from '@xyo-network/xl1-protocol'

export async function buildTransaction(
  chain: ChainId,
  onChainPayloads: AllowedBlockPayload[],
  offChainPayloads: Payload[],
  signer: AccountInstance | AccountInstance[],
  nbf: XL1BlockNumber,
  exp: XL1BlockNumber,
  from?: Address,
  fees: TransactionFeesBigInt = defaultTransactionFees,
): Promise<SignedHydratedTransactionWithHashMeta> {
  if (from === undefined && Array.isArray(signer)) {
    throw new Error('from is required when signer is an array')
  }

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
    from: from ?? (Array.isArray(signer) ? assertEx(signer.at(0)?.address) : signer.address),
  }

  if (script.length > 0) {
    fields.script = script
  }

  const [tx, txPayloads] = await new BoundWitnessBuilder<TransactionBoundWitness>()
    .fields(fields)
    .meta({ $signatures: [] })
    .payloads([...onChainPayloads, ...offChainPayloads])
    .signers(Array.isArray(signer) ? signer : [signer])
    .build()

  return [await PayloadBuilder.addHashMeta(tx), await PayloadBuilder.addHashMeta(txPayloads)]
}
