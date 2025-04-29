import type { Payload } from '@xyo-network/payload-model'

import type { ValidatableInstance } from './modifiers/Validatable.ts'
import type { ObjectInstance } from './Object.ts'

export interface PayloadInstance<TPayload extends Payload = Payload> extends ObjectInstance<TPayload>, ValidatableInstance {}
