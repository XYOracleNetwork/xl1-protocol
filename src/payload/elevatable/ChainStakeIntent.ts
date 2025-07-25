import { AsObjectFactory } from '@xylabs/object'
import type { Payload, WithStorageMeta } from '@xyo-network/payload-model'
import { isPayloadOfSchemaType, isStorageMeta } from '@xyo-network/payload-model'

import type { BlockDuration } from '../../fields/index.ts'
import type { FromFields } from './Executable.ts'

export const ChainStakeIntentSchema = 'network.xyo.chain.stake.intent' as const
export type ChainStakeIntentSchema = typeof ChainStakeIntentSchema

export type Intent = 'producer' // | 'bank'

export interface ChainStakeIntentFields extends BlockDuration, FromFields {
  /*
  * The intent of the staking
  */
  intent: Intent
}

export type ChainStakeIntent = Payload<ChainStakeIntentFields, ChainStakeIntentSchema>

export const isChainStakeIntent = (x?: unknown | null): x is ChainStakeIntent => {
  return isPayloadOfSchemaType<ChainStakeIntent>(ChainStakeIntentSchema)(x)
    && asNonNegativeInteger(x.nbf) !== undefined
    && asNonNegativeInteger(x.exp) !== undefined
}
export const asChainStakeIntent = AsObjectFactory.create(isChainStakeIntent)

export const isChainStakeIntentWithStorageMeta = (x?: unknown | null): x is WithStorageMeta<ChainStakeIntent> => {
  return isChainStakeIntent(x) && isStorageMeta(x)
}

const asNonNegativeInteger = (num: number) => {
  return (Number.isInteger(num) && num >= 0) ? num : undefined
}
