import type { Promisable } from '@xylabs/promise'
import type { BoundWitness } from '@xyo-network/boundwitness-model'

import type { BoundWitnessValidationError } from './error.ts'

export type BoundWitnessValidationFunction<T extends BoundWitness = BoundWitness> = (
  bw: T
) => Promisable<(BoundWitnessValidationError | Error)[]>
