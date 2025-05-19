import type { Signed } from '@xyo-network/boundwitness-model'
import type { Payload, WithStorageMeta } from '@xyo-network/payload-model'

import type { BlockBoundWitness } from './BlockBoundWitness.ts'

export type HydratedBlock = [WithStorageMeta<BlockBoundWitness>, WithStorageMeta<Payload>[]]

export type SignedHydratedBlock = [WithStorageMeta<Signed<BlockBoundWitness>>, WithStorageMeta<Payload>[]] & HydratedBlock
