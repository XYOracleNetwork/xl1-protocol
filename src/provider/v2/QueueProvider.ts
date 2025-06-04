export interface QueueViewer<K, V> {
  peek(limit: number, cursor?: K): V[] | undefined
}

export interface QueueProvider<K, V> extends QueueViewer<K, V> {
  pop(): V
  push(item: V): void
}
