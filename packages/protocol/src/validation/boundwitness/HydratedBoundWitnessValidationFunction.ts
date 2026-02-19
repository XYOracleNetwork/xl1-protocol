import type { Promisable } from '@xylabs/sdk-js'
import type {
  BoundWitness, Payload, WithHashMeta,
} from '@xyo-network/sdk-js'

import type { HydratedBoundWitnessValidationError } from './error.ts'

export type HydratedBoundWitnessWithHashMeta<T extends BoundWitness = BoundWitness, P extends Payload = Payload>
  = [WithHashMeta<T>, WithHashMeta<P>[]]

export type HydratedBoundWitnessValidationFunction<T extends BoundWitness = BoundWitness> = (
  bw: HydratedBoundWitnessWithHashMeta<T>,
) => Promisable<HydratedBoundWitnessValidationError[]>
