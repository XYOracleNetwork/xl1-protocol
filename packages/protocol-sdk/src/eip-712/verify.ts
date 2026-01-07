import { asHash, isUndefined } from '@xylabs/sdk-js'
import { PayloadBuilder } from '@xyo-network/payload-builder'
import { verifyTypedData } from 'ethers'

import type { EIP712DataPayload, EIP712SignaturePayload } from './Payloads/index.ts'

export const verifyEIP712Message = async (data: EIP712DataPayload, sig: EIP712SignaturePayload): Promise<boolean> => {
  const {
    address, signature, hash,
  } = sig
  const { schema, ...fields } = data
  const signedHash = asHash(hash)
  // If there is no valid hash in the signature, or it doesn't match the calculated hash, return false
  if (isUndefined(signedHash) || signedHash !== await PayloadBuilder.hash(data)) return false
  // Recover the address from the signature
  const recoveredAddress = verifyTypedData(fields.domain, fields.types, fields.values, signature)
  // Verify it matches the expected address
  return recoveredAddress.toLowerCase() === address.toLowerCase()
}
