import type { BoundWitness } from '@xyo-network/boundwitness-model'
import type { Payload } from '@xyo-network/sdk-js'

import type { PayloadInstance } from './Payload.ts'

export interface BoundWitnessInstance<TBoundWitness extends BoundWitness = BoundWitness,
  TPayload extends Payload = Payload> extends PayloadInstance<TBoundWitness> {

  payloadCount: number
  payloads: PayloadInstance<TPayload>[]

  payload(index: number): PayloadInstance<TPayload> | undefined
}
