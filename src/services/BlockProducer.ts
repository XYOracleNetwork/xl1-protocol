import type { BlockBoundWitness, HydratedBlock } from '#block'
import type { IterableRepository } from '#repository'

import type { Addressable } from '../Addressable.ts'

export type NextBlockProducer = IterableRepository<BlockBoundWitness, HydratedBlock>

export interface BlockProducer extends Addressable, NextBlockProducer {}
