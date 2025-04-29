export interface ReadRepository<TId, TData> {
  get(id: TId): Promise<TData | undefined>
}

export interface IterableRepository<TId, TData> {
  next(id: TId): Promise<TData | undefined>
}

export interface WriteRepository<TData, TResp> {
  insert(data: TData): Promise<TResp>
}
