import {
  zodAsFactory, zodIsFactory, zodToFactory,
} from '@xylabs/zod'
import {
  PayloadZodLoose, WithHashMetaZod,
  WithStorageMetaZod,
} from '@xyo-network/payload-model'
import { z } from 'zod'

import {
  SignedTransactionBoundWitnessZod, TransactionBoundWitnessZod, UnsignedTransactionBoundWitnessZod,
} from './TransactionBoundWitness.ts'

export const HydratedTransactionZod = z.tuple([
  TransactionBoundWitnessZod,
  z.array(PayloadZodLoose),
])

export type HydratedTransaction = z.infer<typeof HydratedTransactionZod>

export const isHydratedTransaction = zodIsFactory(HydratedTransactionZod)
export const asHydratedTransaction = zodAsFactory(HydratedTransactionZod, 'asHydratedTransaction')
export const toHydratedTransaction = zodToFactory(HydratedTransactionZod, 'toHydratedTransaction')

export const HydratedTransactionWithHashMetaZod = z.tuple([
  WithHashMetaZod(TransactionBoundWitnessZod),
  z.array(WithHashMetaZod(PayloadZodLoose)),
])

export type HydratedTransactionWithHashMeta = z.infer<typeof HydratedTransactionWithHashMetaZod>

export const isHydratedTransactionWithHashMeta = zodIsFactory(HydratedTransactionWithHashMetaZod)
export const asHydratedTransactionWithHashMeta = zodAsFactory(HydratedTransactionWithHashMetaZod, 'asHydratedTransactionWithHashMeta')
export const toHydratedTransactionWithHashMeta = zodToFactory(HydratedTransactionWithHashMetaZod, 'toHydratedTransactionWithHashMeta')

export const HydratedTransactionWithStorageMetaZod = z.tuple([
  WithStorageMetaZod(TransactionBoundWitnessZod),
  z.array(WithStorageMetaZod(PayloadZodLoose)),
])

export type HydratedTransactionWithStorageMeta = z.infer<typeof HydratedTransactionWithStorageMetaZod>

export const isHydratedTransactionWithStorageMeta = zodIsFactory(HydratedTransactionWithStorageMetaZod)
export const asHydratedTransactionWithStorageMeta = zodAsFactory(HydratedTransactionWithStorageMetaZod, 'asHydratedTransactionWithStorageMeta')
export const toHydratedTransactionWithStorageMeta = zodToFactory(HydratedTransactionWithStorageMetaZod, 'toHydratedTransactionWithStorageMeta')

export const UnsignedHydratedTransactionZod = z.tuple([
  UnsignedTransactionBoundWitnessZod,
  z.array(PayloadZodLoose),
])

export type UnsignedHydratedTransaction = z.infer<typeof UnsignedHydratedTransactionZod>

export const isUnsignedHydratedTransaction = zodIsFactory(UnsignedHydratedTransactionZod)
export const asUnsignedHydratedTransaction = zodAsFactory(UnsignedHydratedTransactionZod, 'asUnsignedHydratedTransaction')
export const toUnsignedHydratedTransaction = zodToFactory(UnsignedHydratedTransactionZod, 'toUnsignedHydratedTransaction')

export const UnsignedHydratedTransactionWithHashMetaZod = z.tuple([
  WithHashMetaZod(UnsignedTransactionBoundWitnessZod),
  z.array(WithHashMetaZod(PayloadZodLoose)),
])

export type UnsignedHydratedTransactionWithHashMeta = z.infer<typeof UnsignedHydratedTransactionWithHashMetaZod>

export const isUnsignedHydratedTransactionWithHashMeta = zodIsFactory(UnsignedHydratedTransactionWithHashMetaZod)
export const asUnsignedHydratedTransactionWithHashMeta = zodAsFactory(UnsignedHydratedTransactionWithHashMetaZod, 'asUnsignedHydratedTransactionWithHashMeta')
export const toUnsignedHydratedTransactionWithHashMeta = zodToFactory(UnsignedHydratedTransactionWithHashMetaZod, 'toUnsignedHydratedTransactionWithHashMeta')

export const UnsignedHydratedTransactionWithStorageMetaZod = z.tuple([
  WithStorageMetaZod(UnsignedTransactionBoundWitnessZod),
  z.array(WithStorageMetaZod(PayloadZodLoose)),
])

export type UnsignedHydratedTransactionWithStorageMeta = z.infer<typeof UnsignedHydratedTransactionWithStorageMetaZod>

export const isUnsignedHydratedTransactionWithStorageMeta = zodIsFactory(UnsignedHydratedTransactionWithStorageMetaZod)
export const asUnsignedHydratedTransactionWithStorageMeta = zodAsFactory(
  UnsignedHydratedTransactionWithStorageMetaZod,
  'asUnsignedHydratedTransactionWithStorageMeta',
)
export const toUnsignedHydratedTransactionWithStorageMeta = zodToFactory(
  UnsignedHydratedTransactionWithStorageMetaZod,
  'toUnsignedHydratedTransactionWithStorageMeta',
)

export const SignedHydratedTransactionZod = z.tuple([
  SignedTransactionBoundWitnessZod,
  z.array(PayloadZodLoose),
])

export type SignedHydratedTransaction = z.infer<typeof SignedHydratedTransactionZod>

export const isSignedHydratedTransaction = zodIsFactory(SignedHydratedTransactionZod)
export const asSignedHydratedTransaction = zodAsFactory(SignedHydratedTransactionZod, 'asSignedHydratedTransaction')
export const toSignedHydratedTransaction = zodToFactory(SignedHydratedTransactionZod, 'toSignedHydratedTransaction')

export const SignedHydratedTransactionWithHashMetaZod = z.tuple([
  WithHashMetaZod(SignedTransactionBoundWitnessZod),
  z.array(WithHashMetaZod(PayloadZodLoose)),
])

export type SignedHydratedTransactionWithHashMeta = z.infer<typeof SignedHydratedTransactionWithHashMetaZod>

export const isSignedHydratedTransactionWithHashMeta = zodIsFactory(SignedHydratedTransactionWithHashMetaZod)
export const asSignedHydratedTransactionWithHashMeta = zodAsFactory(SignedHydratedTransactionWithHashMetaZod, 'asSignedHydratedTransactionWithHashMeta')
export const toSignedHydratedTransactionWithHashMeta = zodToFactory(SignedHydratedTransactionWithHashMetaZod, 'toSignedHydratedTransactionWithHashMeta')

export const SignedHydratedTransactionWithStorageMetaZod = z.tuple([
  WithStorageMetaZod(SignedTransactionBoundWitnessZod),
  z.array(WithStorageMetaZod(PayloadZodLoose)),
])

export type SignedHydratedTransactionWithStorageMeta = z.infer<typeof SignedHydratedTransactionWithStorageMetaZod>

export const isSignedHydratedTransactionWithStorageMeta = zodIsFactory(SignedHydratedTransactionWithStorageMetaZod)
export const asSignedHydratedTransactionWithStorageMeta = zodAsFactory(
  SignedHydratedTransactionWithStorageMetaZod,
  'asSignedHydratedTransactionWithStorageMeta',
)
export const toSignedHydratedTransactionWithStorageMeta = zodToFactory(
  SignedHydratedTransactionWithStorageMetaZod,
  'toSignedHydratedTransactionWithStorageMeta',
)
