import type { Promisable } from '@xylabs/promise'
import type { BoundWitness } from '@xyo-network/boundwitness-model'

export type BoundWitnessValidationFunction<T extends BoundWitness = BoundWitness> = (
  bw: T
) => Promisable<Error[]>
