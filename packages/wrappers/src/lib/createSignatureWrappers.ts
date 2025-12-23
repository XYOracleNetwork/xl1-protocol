import { asHex } from '@xylabs/sdk-js'
import type { BoundWitness } from '@xyo-network/boundwitness-model'
import { PayloadBuilder } from '@xyo-network/payload-builder'
import type { SignatureInstance } from '@xyo-network/xl1-protocol-sdk'

import { SignatureWrapper } from '../Signature.ts'

export const createSignatureWrappers = async (bw: BoundWitness): Promise<SignatureInstance[]> => {
  const signatures: SignatureInstance[] = []
  const hash = await PayloadBuilder.dataHash(bw)
  for (let i = 0; i < bw.$signatures.length; i++) {
    signatures.push(
      new SignatureWrapper(asHex(bw.$signatures[i], true), bw.addresses[i], hash),
    )
  }
  return signatures
}
