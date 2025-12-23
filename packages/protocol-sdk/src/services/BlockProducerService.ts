import type {
  Addressable,
  BlockBoundWitness, IterableRepository,
  SignedHydratedBlockWithHashMeta,
} from '@xyo-network/xl1-protocol'

export type NextBlockProducer = IterableRepository<BlockBoundWitness, SignedHydratedBlockWithHashMeta | undefined>

export interface BlockProducerService extends Addressable, NextBlockProducer {}
