import type { BlockBoundWitness, HydratedBlock } from '#block'
import type { Addressable } from '#fields'
import type { IterableRepository } from '#repository'

export type NextBlockProducer = IterableRepository<BlockBoundWitness, HydratedBlock>

export interface BlockProducer extends Addressable, NextBlockProducer {}
