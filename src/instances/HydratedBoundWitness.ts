import type { HydratedBoundWitness } from '@xyo-network/archivist-model'

import type { DataInstance } from './Data.ts'
import type { ValidatableInstance } from './modifiers/Validatable.ts'

export interface HydratedBoundWitnessInstance<T extends HydratedBoundWitness = HydratedBoundWitness>
  extends ValidatableInstance, DataInstance<T> {

  boundWitness: T[0]

  payloadCount: number
  payloads: T[1][number][]

  payload(index: number): T[1][number] | undefined
}
