import { AsObjectFactory } from '@xylabs/sdk-js'
import type { HydratedBoundWitness, HydratedBoundWitnessWithStorageMeta } from '@xyo-network/archivist-model'
import { isBoundWitness } from '@xyo-network/boundwitness-model'
import { isAnyPayload, isStorageMeta } from '@xyo-network/payload-model'

export const isHydratedBoundWitness = (
  value: unknown,
): value is HydratedBoundWitness => {
  return (
    Array.isArray(value)
    && value.length === 2
    && isBoundWitness(value[0])
    && Array.isArray(value[1])
    && !value[1].some(item => (!isAnyPayload(item)))
  )
}

export const isHydratedBoundWitnessWithStorageMeta = (
  value: unknown,
): value is HydratedBoundWitnessWithStorageMeta => {
  return (
    isHydratedBoundWitness(value)
    && isStorageMeta(value[0])
    && !value[1].some(item => (!isStorageMeta(item)))
  )
}

export const asHydratedBoundWitness = AsObjectFactory.create<HydratedBoundWitness>(
  isHydratedBoundWitness,
)

export const asHydratedBoundWitnessWithStorageMeta = AsObjectFactory.create<HydratedBoundWitnessWithStorageMeta>(
  isHydratedBoundWitnessWithStorageMeta,
)
