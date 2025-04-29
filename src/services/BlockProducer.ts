import type { Addressable } from '../Addressable.ts'
import type { BlockBoundWitness, HydratedBlock } from '../protocol/index.ts'
import type { IterableRepository } from '../repository/index.ts'

export type NextBlockProducer = IterableRepository<BlockBoundWitness, HydratedBlock>

export interface BlockProducer extends Addressable, NextBlockProducer {}
