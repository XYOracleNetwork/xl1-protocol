export interface QueueReader<K, V> {
  peek(limit: number, cursor?: K): V[] | undefined
}

export interface QueueRunner<K, V> extends QueueReader<K, V> {
  pop(): V
  push(item: V): void
}
