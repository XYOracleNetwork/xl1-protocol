import { PayloadBuilder } from '@xyo-network/payload-builder'
import type { Signer } from 'ethers'

import {
  type EIP712DataPayload, type EIP712SignaturePayload, EIP712SignaturePayloadSchema,
} from './Payloads/index.ts'

export const signEIP712Message = async (signer: Signer, data: EIP712DataPayload): Promise<EIP712SignaturePayload> => {
  const {
    domain, types, values,
  } = data
  const signature = await signer.signTypedData(domain, types, values)
  const hash = await PayloadBuilder.hash(data)
  const address = await signer.getAddress()
  return {
    address, hash, schema: EIP712SignaturePayloadSchema, signature,
  }
}
