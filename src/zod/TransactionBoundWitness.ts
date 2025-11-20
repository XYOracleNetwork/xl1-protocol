import { AddressZod } from '@xylabs/sdk-js'
import {
  zodAsFactory, zodIsFactory, zodToFactory,
} from '@xylabs/zod'
import * as z from 'zod'

import { BlockNumberZod } from '../model/index.ts'
import {
  BoundWitnessZod, SignedBoundWitnessZod, UnsignedBoundWitnessZod,
} from './BoundWitness.ts'
import { ChainZod } from './Chain.ts'
import { TransactionFeesHexZod } from './TransactionFees.ts'

export const BlockStartZod = z.object({ nbf: BlockNumberZod })
export const BlockEndZod = z.object({ exp: BlockNumberZod })
export const BlockDurationZod = z.object({ nbf: BlockNumberZod, exp: BlockNumberZod })
export const BlockScriptsZod = z.object({ script: z.array(z.string()).optional() })

export const TransactionFeesZod = z.object({ fees: TransactionFeesHexZod })

const TransactionBoundWitnessFields = z.object({ chain: ChainZod, from: AddressZod })

export const TransactionBoundWitnessZod = BoundWitnessZod
  .extend(BlockDurationZod.shape)
  .extend(TransactionFeesZod.shape)
  .extend(TransactionBoundWitnessFields.shape)
  .extend(BlockScriptsZod.shape)

export type TransactionBoundWitness = z.infer<typeof TransactionBoundWitnessZod>

export const isTransactionBoundWitness = zodIsFactory(TransactionBoundWitnessZod)
export const asTransactionBoundWitness = zodAsFactory(TransactionBoundWitnessZod, 'asTransactionBoundWitness')
export const toTransactionBoundWitness = zodToFactory(TransactionBoundWitnessZod, 'toTransactionBoundWitness')

export const UnsignedTransactionBoundWitnessZod = UnsignedBoundWitnessZod
  .extend(BlockDurationZod.shape)
  .extend(TransactionFeesZod.shape)
  .extend(TransactionBoundWitnessFields.shape)
  .extend(BlockScriptsZod.shape)

export type UnsignedTransactionBoundWitness = z.infer<typeof UnsignedTransactionBoundWitnessZod>

export const isUnsignedTransactionBoundWitness = zodIsFactory(UnsignedTransactionBoundWitnessZod)
export const asUnsignedTransactionBoundWitness = zodAsFactory(UnsignedTransactionBoundWitnessZod, 'asUnsignedTransactionBoundWitness')
export const toUnsignedTransactionBoundWitness = zodToFactory(UnsignedTransactionBoundWitnessZod, 'toUnsignedTransactionBoundWitness')

export const SignedTransactionBoundWitnessZod = SignedBoundWitnessZod
  .extend(BlockDurationZod.shape)
  .extend(TransactionFeesZod.shape)
  .extend(TransactionBoundWitnessFields.shape)
  .extend(BlockScriptsZod.shape)

export type SignedTransactionBoundWitness = z.infer<typeof SignedTransactionBoundWitnessZod>

export const isSignedTransactionBoundWitness = zodIsFactory(SignedTransactionBoundWitnessZod)
export const asSignedTransactionBoundWitness = zodAsFactory(SignedTransactionBoundWitnessZod, 'asSignedTransactionBoundWitness')
export const toSignedTransactionBoundWitness = zodToFactory(SignedTransactionBoundWitnessZod, 'toSignedTransactionBoundWitness')
