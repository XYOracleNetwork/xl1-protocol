import type { Promisable } from '@xylabs/promise'
import type { BoundWitness } from '@xyo-network/boundwitness-model'
import type { Payload, WithHashStorageMeta } from '@xyo-network/payload-model'

export type HydratedBoundWitnessWithHashStorageMeta<T extends BoundWitness = BoundWitness, P extends Payload = Payload>
  = [WithHashStorageMeta<T>, WithHashStorageMeta<P>[]]

export type HydratedBoundWitnessValidationFunction<T extends BoundWitness = BoundWitness> = (
  bw: HydratedBoundWitnessWithHashStorageMeta<T>
) => Promisable<Error[]>
