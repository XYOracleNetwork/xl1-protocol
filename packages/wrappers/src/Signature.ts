import type {
  Address, Hash, Hex,
} from '@xylabs/sdk-js'
import { toArrayBuffer } from '@xylabs/sdk-js'
import { BoundWitnessValidator } from '@xyo-network/boundwitness-validator'
import type { SignatureInstance } from '@xyo-network/xl1-protocol-sdk'

export class SignatureWrapper implements SignatureInstance {
  address: Address
  hash: Hash
  signature: Hex

  constructor(signature: Hex, address: Address, hash: Hash) {
    this.signature = signature
    this.address = address
    this.hash = hash
  }

  static async validate(hash: Hash, address: Address, signature: Hex): Promise<Error[]> {
    return await BoundWitnessValidator.validateSignature(toArrayBuffer(hash), toArrayBuffer(address), toArrayBuffer(signature))
  }

  async validate(): Promise<Error[]> {
    return await SignatureWrapper.validate(this.hash, this.address, this.signature)
  }
}
