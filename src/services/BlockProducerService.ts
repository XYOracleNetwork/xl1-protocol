import type { BlockBoundWitness, HydratedBlock } from '../block/index.ts'
import type { Addressable } from '../fields/index.ts'
import type { IterableRepository } from '../repository/index.ts'
import type { Service } from './Service.ts'

export type NextBlockProducer = IterableRepository<BlockBoundWitness, HydratedBlock | undefined>

export interface BlockProducerService extends Addressable, NextBlockProducer, Service {}
