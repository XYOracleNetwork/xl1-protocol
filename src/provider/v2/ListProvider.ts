export interface ListViewer<T> {
  default?: T
  list: T[]
}

export interface ListProvider<T> extends ListViewer<T> {
  add(provider: T): void
  remove(index: number): void
  setDefault(index: number): void
}
