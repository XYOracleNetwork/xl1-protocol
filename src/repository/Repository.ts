export interface ReadRepository<TId, TData> {
  get(id: TId): Promise<TData>
}

export interface IterableRepository<TId, TData> {
  next(id: TId): Promise<TData>
}

export interface WriteRepository<TData, TResp> {
  insert(data: TData): Promise<TResp>
}
