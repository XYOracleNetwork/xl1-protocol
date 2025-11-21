import { AddressZod } from '@xylabs/sdk-js'
import {
  zodAsFactory, zodIsFactory, zodToFactory,
} from '@xylabs/zod'
import { HashMetaZod, StorageMetaZod } from '@xyo-network/payload-model'
import * as z from 'zod'

import { XL1BlockNumberZod } from '../model/index.ts'
import {
  BoundWitnessZod, SignedBoundWitnessZod, UnsignedBoundWitnessZod,
} from './BoundWitness.ts'
import { ChainZod } from './Chain.ts'
import { TransactionFeesHexZod } from './TransactionFees.ts'

export const BlockStartZod = z.object({ nbf: XL1BlockNumberZod })
export const BlockEndZod = z.object({ exp: XL1BlockNumberZod })
export const BlockDurationZod = z.object({ nbf: XL1BlockNumberZod, exp: XL1BlockNumberZod })
export const BlockScriptsZod = z.object({ script: z.array(z.string()).optional() })

export const TransactionFeesZod = z.object({ fees: TransactionFeesHexZod })

export const TransactionBoundWitnessIdentityFields = z.object({ chain: ChainZod, from: AddressZod })

export const TransactionBoundWitnessFieldsZod = z.object()
  .safeExtend(BlockDurationZod.shape)
  .safeExtend(TransactionFeesZod.shape)
  .safeExtend(TransactionBoundWitnessIdentityFields.shape)
  .safeExtend(BlockScriptsZod.shape)

export type TransactionBoundWitnessFields = z.infer<typeof TransactionBoundWitnessFieldsZod>

export const TransactionBoundWitnessZod = BoundWitnessZod
  .safeExtend(TransactionBoundWitnessFieldsZod.shape)

export type TransactionBoundWitness = z.infer<typeof TransactionBoundWitnessZod>

export const isTransactionBoundWitness = zodIsFactory(TransactionBoundWitnessZod)
export const asTransactionBoundWitness = zodAsFactory(TransactionBoundWitnessZod, 'asTransactionBoundWitness')
export const toTransactionBoundWitness = zodToFactory(TransactionBoundWitnessZod, 'toTransactionBoundWitness')

export const TransactionBoundWitnessWithHashMetaZod = TransactionBoundWitnessZod
  .safeExtend(HashMetaZod.shape)

export type TransactionBoundWitnessWithHashMeta = z.infer<typeof TransactionBoundWitnessWithHashMetaZod>

export const isTransactionBoundWitnessWithHashMeta = zodIsFactory(TransactionBoundWitnessWithHashMetaZod)
export const asTransactionBoundWitnessWithHashMeta = zodAsFactory(TransactionBoundWitnessWithHashMetaZod, 'asTransactionBoundWitnessWithHashMeta')
export const toTransactionBoundWitnessWithHashMeta = zodToFactory(TransactionBoundWitnessWithHashMetaZod, 'toTransactionBoundWitnessWithHashMeta')

export const TransactionBoundWitnessWithStorageMetaZod = TransactionBoundWitnessZod
  .safeExtend(StorageMetaZod.shape)

export type TransactionBoundWitnessWithStorageMeta = z.infer<typeof TransactionBoundWitnessWithStorageMetaZod>

export const isTransactionBoundWitnessWithStorageMeta = zodIsFactory(TransactionBoundWitnessWithStorageMetaZod)
export const asTransactionBoundWitnessWithStorageMeta = zodAsFactory(TransactionBoundWitnessWithStorageMetaZod, 'asTransactionBoundWitnessWithStorageMeta')
export const toTransactionBoundWitnessWithStorageMeta = zodToFactory(TransactionBoundWitnessWithStorageMetaZod, 'toTransactionBoundWitnessWithStorageMeta')

export const UnsignedTransactionBoundWitnessZod = UnsignedBoundWitnessZod
  .safeExtend(TransactionBoundWitnessFieldsZod.shape)

export type UnsignedTransactionBoundWitness = z.infer<typeof UnsignedTransactionBoundWitnessZod>

export const isUnsignedTransactionBoundWitness = zodIsFactory(UnsignedTransactionBoundWitnessZod)
export const asUnsignedTransactionBoundWitness = zodAsFactory(UnsignedTransactionBoundWitnessZod, 'asUnsignedTransactionBoundWitness')
export const toUnsignedTransactionBoundWitness = zodToFactory(UnsignedTransactionBoundWitnessZod, 'toUnsignedTransactionBoundWitness')

export const UnsignedTransactionBoundWitnessWithHashMetaZod = UnsignedTransactionBoundWitnessZod.safeExtend(HashMetaZod.shape)

export type UnsignedTransactionBoundWitnessWithHashMeta = z.infer<typeof UnsignedTransactionBoundWitnessWithHashMetaZod>

export const isUnsignedTransactionBoundWitnessWithHashMeta = zodIsFactory(UnsignedTransactionBoundWitnessWithHashMetaZod)
export const asUnsignedTransactionBoundWitnessWithHashMeta = zodAsFactory(
  UnsignedTransactionBoundWitnessWithHashMetaZod,
  'asUnsignedTransactionBoundWitnessWithHashMeta',
)
export const toUnsignedTransactionBoundWitnessWithHashMeta = zodToFactory(
  UnsignedTransactionBoundWitnessWithHashMetaZod,
  'toUnsignedTransactionBoundWitnessWithHashMeta',
)

export const UnsignedTransactionBoundWitnessWithStorageMetaZod = UnsignedTransactionBoundWitnessZod
  .safeExtend(StorageMetaZod.shape)

export type UnsignedTransactionBoundWitnessWithStorageMeta = z.infer<typeof UnsignedTransactionBoundWitnessWithStorageMetaZod>

export const isUnsignedTransactionBoundWitnessWithStorageMeta = zodIsFactory(UnsignedTransactionBoundWitnessWithStorageMetaZod)
export const asUnsignedTransactionBoundWitnessWithStorageMeta = zodAsFactory(
  UnsignedTransactionBoundWitnessWithStorageMetaZod,
  'asUnsignedTransactionBoundWitnessWithStorageMeta',
)
export const toUnsignedTransactionBoundWitnessWithStorageMeta = zodToFactory(
  UnsignedTransactionBoundWitnessWithStorageMetaZod,
  'toUnsignedTransactionBoundWitnessWithStorageMeta',
)

export const SignedTransactionBoundWitnessZod = SignedBoundWitnessZod
  .safeExtend(TransactionBoundWitnessFieldsZod.shape)

export type SignedTransactionBoundWitness = z.infer<typeof SignedTransactionBoundWitnessZod>

export const isSignedTransactionBoundWitness = zodIsFactory(SignedTransactionBoundWitnessZod)
export const asSignedTransactionBoundWitness = zodAsFactory(SignedTransactionBoundWitnessZod, 'asSignedTransactionBoundWitness')
export const toSignedTransactionBoundWitness = zodToFactory(SignedTransactionBoundWitnessZod, 'toSignedTransactionBoundWitness')

export const SignedTransactionBoundWitnessWithHashMetaZod = SignedTransactionBoundWitnessZod
  .safeExtend(HashMetaZod.shape)

export type SignedTransactionBoundWitnessWithHashMeta = z.infer<typeof SignedTransactionBoundWitnessWithHashMetaZod>

export const isSignedTransactionBoundWitnessWithHashMeta = zodIsFactory(SignedTransactionBoundWitnessWithHashMetaZod)
export const asSignedTransactionBoundWitnessWithHashMeta = zodAsFactory(
  SignedTransactionBoundWitnessWithHashMetaZod,
  'asSignedTransactionBoundWitnessWithHashMeta',
)
export const toSignedTransactionBoundWitnessWithHashMeta = zodToFactory(
  SignedTransactionBoundWitnessWithHashMetaZod,
  'toSignedTransactionBoundWitnessWithHashMeta',
)

export const SignedTransactionBoundWitnessWithStorageMetaZod = SignedTransactionBoundWitnessZod
  .safeExtend(StorageMetaZod.shape)

export type SignedTransactionBoundWitnessWithStorageMeta = z.infer<typeof SignedTransactionBoundWitnessWithStorageMetaZod>

export const isSignedTransactionBoundWitnessWithStorageMeta = zodIsFactory(SignedTransactionBoundWitnessWithStorageMetaZod)
export const asSignedTransactionBoundWitnessWithStorageMeta = zodAsFactory(
  SignedTransactionBoundWitnessWithStorageMetaZod,
  'asSignedTransactionBoundWitnessWithStorageMeta',
)
export const toSignedTransactionBoundWitnessWithStorageMeta = zodToFactory(
  SignedTransactionBoundWitnessWithStorageMetaZod,
  'toSignedTransactionBoundWitnessWithStorageMeta',
)
