import { type Address, ZERO_HASH } from '@xylabs/sdk-js'
import { toArrayBuffer } from '@xylabs/sdk-js'
import type { BoundWitness, WithStorageMeta } from '@xyo-network/sdk-js'
import { BoundWitnessBuilder, BoundWitnessValidator } from '@xyo-network/sdk-js'
import type { BoundWitnessValidationFunction } from '@xyo-network/xl1-protocol'
import { BoundWitnessValidationError } from '@xyo-network/xl1-protocol'

export const BoundWitnessSignaturesValidator: BoundWitnessValidationFunction = async (
  bw: BoundWitness,
) => {
  const errors: BoundWitnessValidationError[] = []
  try {
    const dataHash = await BoundWitnessBuilder.dataHash(bw)
    const results: [Address, Error[]][] = await Promise.all(bw.addresses.map(async (address, index) => {
      return [address, await BoundWitnessValidator.validateSignature(
        toArrayBuffer(dataHash),
        toArrayBuffer(address),
        toArrayBuffer(bw.$signatures[index] ?? undefined),
      )]
    }))
    for (const [, bwErrors] of results) {
      for (const bwError of bwErrors) {
        errors.push(new BoundWitnessValidationError((bw as WithStorageMeta<BoundWitness>)?._hash ?? ZERO_HASH, bw, 'validation errors', bwError))
      }
    }
  } catch (ex) {
    errors.push(new BoundWitnessValidationError((bw as WithStorageMeta<BoundWitness>)?._hash ?? ZERO_HASH, bw, 'validation excepted', ex))
  }
  return errors
}
