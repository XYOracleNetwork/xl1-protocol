import { AsObjectFactory } from '@xylabs/object'
import type { BoundWitness } from '@xyo-network/boundwitness-model'
import type { Payload } from '@xyo-network/payload-model'
import { isPayloadOfSchemaType } from '@xyo-network/payload-model'

export const AtomicBoundWitnessSchema = 'network.xyo.boundwitness.atomic' as const
export type AtomicBoundWitnessSchema = typeof AtomicBoundWitnessSchema

export interface AtomicBoundWitnessFields<TBoundWitness extends BoundWitness = BoundWitness> {
  bw: TBoundWitness
}

export type AtomicBoundWitness = Payload<AtomicBoundWitnessFields, AtomicBoundWitnessSchema>

export const isAtomicBoundWitness = isPayloadOfSchemaType<AtomicBoundWitness>(AtomicBoundWitnessSchema)

export const asAtomicBoundWitness = AsObjectFactory.create(isAtomicBoundWitness)
