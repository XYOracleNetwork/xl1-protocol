import type { Promisable } from '@xylabs/sdk-js'
import type { BoundWitness } from '@xyo-network/sdk-js'

import type { BoundWitnessValidationError } from './error.ts'

export type BoundWitnessValidationFunction<T extends BoundWitness = BoundWitness> = (
  bw: T,
) => Promisable<BoundWitnessValidationError[]>
