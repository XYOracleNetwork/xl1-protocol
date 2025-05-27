import type { BoundWitness } from '@xyo-network/boundwitness-model'
import type { Payload } from '@xyo-network/payload-model'

export const HydratedBoundWitnessSchema = 'network.xyo.boundwitness.hydrated'
export type HydratedBoundWitnessSchema = typeof HydratedBoundWitnessSchema

export type HydratedBoundWitnessPayload = Payload<{
  bw: BoundWitness
  payloads: Payload[]
},
  HydratedBoundWitnessSchema>
