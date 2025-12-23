import type { Address } from '@xylabs/sdk-js'
import { isDefined } from '@xylabs/sdk-js'
import { PayloadBuilder } from '@xyo-network/payload-builder'
import {
  type ChainStakeIntent, ChainStakeIntentSchema, type Intent,
} from '@xyo-network/xl1-protocol'

export const createDeclarationIntent = (address: Address, intent: Intent, nbf: number, exp?: number): ChainStakeIntent => {
  const expiration = isDefined(exp) ? exp : nbf + 10_000
  const redeclarationIntent = new PayloadBuilder<ChainStakeIntent>({ schema: ChainStakeIntentSchema }).fields({
    from: address, intent, nbf, exp: expiration,
  }).build()
  return redeclarationIntent
}
