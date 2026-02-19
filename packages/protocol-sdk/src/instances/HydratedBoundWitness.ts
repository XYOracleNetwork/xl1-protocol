import type { HydratedBoundWitness } from '@xyo-network/sdk-js'

import type { DataInstance } from './Data.ts'
import type { ValidatableInstance } from './modifiers/index.ts'

export interface HydratedBoundWitnessInstance<T extends HydratedBoundWitness = HydratedBoundWitness>
  extends ValidatableInstance, DataInstance<T> {

  boundWitness: T[0]

  payloadCount: number
  payloads: T[1][number][]

  payload(index: number): T[1][number] | undefined
}
