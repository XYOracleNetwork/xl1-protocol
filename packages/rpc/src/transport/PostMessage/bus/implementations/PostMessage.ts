import { isDefined } from '@xylabs/sdk-js'

import { AbstractMessageBus } from '../Abstract.ts'
import type { EventWithId } from '../validators/index.ts'
import { isEventWithId } from '../validators/index.ts'

export class PostMessageBus extends AbstractMessageBus<MessageEvent> {
  constructor(sessionId?: string, name: string = 'default') {
    super(sessionId, name)
  }

  override postMessage(message: unknown, origin = globalThis.location.origin): void {
    globalThis.postMessage(message, origin)
  }

  start() {
    globalThis.addEventListener('message', event => this.handleMessage(event))
  }

  stop() {
    globalThis.removeEventListener('message', this.handleMessage)
    this.connections.length = 0
  }

  private handleMessage = (event: MessageEvent) => {
    if (event.origin !== globalThis.location.origin) return
    if (!this.validateSessionId(event.data?.sessionId)) return

    for (const connection of this.connections) {
      const { id, listener } = connection
      if (isDefined(id) && isEventWithId(event)) {
        const eventWithId = event as EventWithId
        if (eventWithId.data.data.id === id) listener(event)
      } else {
        listener(event)
      }
    }
  }
}
