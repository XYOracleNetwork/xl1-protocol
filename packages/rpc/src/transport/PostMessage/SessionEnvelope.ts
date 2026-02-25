import type { JsonValue } from '@xylabs/sdk-js'

export interface SessionMessageEnvelope<T extends JsonValue> {
  data: T
  destination?: string
  sessionId: string
}
