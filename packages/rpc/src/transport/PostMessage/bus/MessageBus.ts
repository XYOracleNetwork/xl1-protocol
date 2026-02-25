export type MessageBusConnection<T> = { id?: string; listener: (arg: T) => void }

export interface MessageBus<
  ListenerArg = unknown,
  Connection extends MessageBusConnection<ListenerArg> = MessageBusConnection<ListenerArg>,
> {
  addConnection(connection: Connection): void
  postMessage(message: unknown): void
  removeConnection(connection: Connection): void
  start(): void
  stop(): void
}
