import type { Hash } from '@xylabs/hex'
import { isHex } from '@xylabs/hex'
import { AsObjectFactory } from '@xylabs/object'
import type { BoundWitness, Signed } from '@xyo-network/boundwitness-model'
import { isBoundWitness, isSigned } from '@xyo-network/boundwitness-model'
import type { WithHashMeta, WithStorageMeta } from '@xyo-network/payload-model'
import { isHashMeta, isStorageMeta } from '@xyo-network/payload-model'

import type { ChainId, XL1BlockNumber } from '../model/index.ts'

export interface BlockBoundWitnessMeta {
  $epoch: number
}

export interface BlockBoundWitnessFields {
  /** Block number */
  block: XL1BlockNumber
  /** Chain id - this should be "0" for the genesis block */
  chain: ChainId
  /** Previous block hash if not block 0 */
  previous: Hash | null /* the previous block hash */
  /** Version of the protocol being used major * 1,000,000 + minor * 1,000 + patch */
  protocol: number
  /** Step hashes */
  step_hashes: Hash[]
}

export type BlockBoundWitness = BoundWitness<BlockBoundWitnessFields & BlockBoundWitnessMeta>

export const isBlockBoundWitness = (value: unknown): value is BlockBoundWitness => {
  const typedObj = value as BlockBoundWitness
  return isBoundWitness(value)
    && Number.isInteger(typedObj.block)
    && isHex(typedObj.chain)
}

export const isSignedBlockBoundWitness = (value: unknown): value is Signed<BlockBoundWitness> => {
  return isBlockBoundWitness(value) && isSigned(value)
}

export const isBlockBoundWitnessWithStorageMeta = (value: unknown): value is WithStorageMeta<BlockBoundWitness> => {
  return isBlockBoundWitness(value) && isStorageMeta(value)
}

export const isSignedBlockBoundWitnessWithStorageMeta = (value: unknown): value is Signed<WithStorageMeta<BlockBoundWitness>> => {
  return isBlockBoundWitnessWithStorageMeta(value) && isSigned(value)
}

export const isBlockBoundWitnessWithHashMeta = (value: unknown): value is WithHashMeta<BlockBoundWitness> => {
  return isBlockBoundWitness(value) && isHashMeta(value)
}

export const isSignedBlockBoundWitnessWithHashMeta = (value: unknown): value is Signed<WithHashMeta<BlockBoundWitness>> => {
  return isBlockBoundWitnessWithHashMeta(value) && isSigned(value)
}

export const asBlockBoundWitness = AsObjectFactory.create(isBlockBoundWitness)
export const asSignedBlockBoundWitness = AsObjectFactory.create(isSignedBlockBoundWitness)

export const asBlockBoundWitnessWithStorageMeta = AsObjectFactory.create(isBlockBoundWitnessWithStorageMeta)
export const asSignedBlockBoundWitnessWithStorageMeta = AsObjectFactory.create(isSignedBlockBoundWitnessWithStorageMeta)

export const asBlockBoundWitnessWithHashMeta = AsObjectFactory.create(isBlockBoundWitnessWithHashMeta)
export const asSignedBlockBoundWitnessWithHashMeta = AsObjectFactory.create(isSignedBlockBoundWitnessWithHashMeta)
