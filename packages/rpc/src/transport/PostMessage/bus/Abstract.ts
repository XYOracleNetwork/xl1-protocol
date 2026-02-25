import { isDefined } from '@xylabs/sdk-js'

import type { MessageBus, MessageBusConnection } from './MessageBus.ts'

export abstract class AbstractMessageBus<T> implements MessageBus<T> {
  protected connections: MessageBusConnection<T>[] = []
  protected readonly name: string
  protected readonly sessionId: string | undefined

  constructor(sessionId?: string, name: string = 'default') {
    this.name = name
    this.sessionId = sessionId
    this.start()
  }

  addConnection(connection: MessageBusConnection<T>): void {
    this.connections.push(connection)
  }

  removeConnection(connection: MessageBusConnection<T>): void {
    this.connections = this.connections.filter(c => c !== connection)
  }

  protected validateSessionId(sessionId?: string): boolean {
    return isDefined(this.sessionId) && sessionId === this.sessionId
  }

  abstract postMessage(message: unknown): void

  abstract start(): void

  abstract stop(): void
}
