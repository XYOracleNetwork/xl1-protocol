import type { Hash, Hex } from '@xylabs/hex'
import { isHex } from '@xylabs/hex'
import { AsObjectFactory } from '@xylabs/object'
import type { BoundWitness } from '@xyo-network/boundwitness-model'
import { isBoundWitness } from '@xyo-network/boundwitness-model'
import type { WithHashStorageMeta, WithStorageMeta } from '@xyo-network/payload-model'
import { isHashStorageMeta, isStorageMeta } from '@xyo-network/payload-model'

export interface BlockBoundWitnessMeta {
  $epoch: number
}

export interface BlockBoundWitnessFields {
  /** Block number */
  block: number
  /** Chain id - this should be "0" for the genesis block */
  chain: Hex
  /** Previous block hash if not block 0 */
  previous: Hash | null /* the previous block hash */
  /** Version of the protocol being used major * 1,000,000 + minor * 1,000 + patch */
  protocol: number
  /** Step hashes */
  step_hashes: Hex[]
}

export type BlockBoundWitness = BoundWitness<BlockBoundWitnessFields & BlockBoundWitnessMeta>

export const isBlockBoundWitness = (value: unknown): value is BlockBoundWitness => {
  const typedObj = value as BlockBoundWitness
  return isBoundWitness(value)
    && Number.isInteger(typedObj.block)
    && isHex(typedObj.chain)
}

export const isBlockBoundWitnessWithStorageMeta = (value: unknown): value is WithStorageMeta<BlockBoundWitness> => {
  return isBlockBoundWitness(value) && isStorageMeta(value)
}

export const isBlockBoundWitnessWithHashStorageMeta = (value: unknown): value is WithHashStorageMeta<BlockBoundWitness> => {
  return isBlockBoundWitness(value) && isHashStorageMeta(value)
}

export const asBlockBoundWitness = AsObjectFactory.create(isBlockBoundWitness)

export const asBlockBoundWitnessWithStorageMeta = AsObjectFactory.create(isBlockBoundWitnessWithStorageMeta)
