import type { Payload } from '@xyo-network/sdk-js'

import type { ValidatableInstance } from './modifiers/index.ts'
import type { ObjectInstance } from './Object.ts'

export interface PayloadInstance<TPayload extends Payload = Payload> extends ObjectInstance<TPayload>, ValidatableInstance {}
