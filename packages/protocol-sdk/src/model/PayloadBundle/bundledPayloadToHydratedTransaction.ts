import { PayloadBuilder } from '@xyo-network/payload-builder'
import type { PayloadBundle } from '@xyo-network/payload-model'
import type { SignedHydratedTransactionWithHashMeta } from '@xyo-network/xl1-protocol'
import { asSignedTransactionBoundWitnessWithHashMeta } from '@xyo-network/xl1-protocol'

export const bundledPayloadToHydratedTransaction = async (
  payload: PayloadBundle,
): Promise<SignedHydratedTransactionWithHashMeta | undefined> => {
  const withHashMeta = await PayloadBuilder.addHashMeta(payload.payloads)
  const tx = asSignedTransactionBoundWitnessWithHashMeta(withHashMeta.find(p => p._hash === payload.root))
  if (tx) {
    return [tx, withHashMeta.filter(p => p._hash !== payload.root)]
  }
}
