import type { HydratedBoundWitness } from '@xyo-network/archivist-model'
import { isBoundWitness } from '@xyo-network/boundwitness-model'
import { isAnyPayload } from '@xyo-network/payload-model'

export const isHydratedBoundWitness = (
  value: unknown,
): value is HydratedBoundWitness => {
  return (
    Array.isArray(value)
    && value.length === 2
    && isBoundWitness(value[0])
    && Array.isArray(value[1])
    && !value[1].some(item => !isAnyPayload(item))
  )
}
