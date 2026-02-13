import type { PayloadBundle } from '@xyo-network/payload-model'
import { PayloadBuilder } from '@xyo-network/sdk-js'
import type { SignedHydratedBlockWithHashMeta } from '@xyo-network/xl1-protocol'
import { asSignedBlockBoundWitnessWithHashMeta } from '@xyo-network/xl1-protocol'

export const bundledPayloadToHydratedBlock = async (
  payload: PayloadBundle,
): Promise<SignedHydratedBlockWithHashMeta | undefined> => {
  const withHashMeta = await PayloadBuilder.addHashMeta(payload.payloads)
  const tx = asSignedBlockBoundWitnessWithHashMeta(withHashMeta.find(p => p._hash === payload.root))
  if (tx) {
    return [tx, withHashMeta.filter(p => p._hash !== payload.root)]
  }
}
