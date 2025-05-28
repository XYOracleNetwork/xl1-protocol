import { AsObjectFactory } from '@xylabs/object'
import type { BoundWitness } from '@xyo-network/boundwitness-model'
import { isPayloadOfSchemaType, type Payload } from '@xyo-network/payload-model'

export const HydratedBoundWitnessSchema = 'network.xyo.boundwitness.hydrated'
export type HydratedBoundWitnessSchema = typeof HydratedBoundWitnessSchema

export type HydratedBoundWitnessPayload = Payload<{
  bw: BoundWitness
  payloads: Payload[]
},
  HydratedBoundWitnessSchema>

export const isHydratedBoundWitnessPayload = isPayloadOfSchemaType<HydratedBoundWitnessPayload>(HydratedBoundWitnessSchema)
export const asHydratedBoundWitnessPayload = AsObjectFactory.createOptional<HydratedBoundWitnessPayload>(isHydratedBoundWitnessPayload)
