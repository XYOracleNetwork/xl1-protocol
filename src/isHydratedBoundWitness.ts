import type { HydratedBoundWitnessWithStorageMeta } from '@xyo-network/archivist-model'
import { isBoundWitnessWithStorageMeta } from '@xyo-network/boundwitness-model'
import { isAnyPayload, isStorageMeta } from '@xyo-network/payload-model'

export const isHydratedBoundWitness = (
  value: unknown,
): value is HydratedBoundWitnessWithStorageMeta => {
  return (
    Array.isArray(value)
    && value.length === 2
    && isBoundWitnessWithStorageMeta(value[0])
    && Array.isArray(value[1])
    && !value[1].some(item => (!isAnyPayload(item) || !isStorageMeta(item)))
  )
}
