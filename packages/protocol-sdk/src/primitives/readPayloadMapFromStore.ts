import type { Hash } from '@xylabs/sdk-js'
import { isDefined } from '@xylabs/sdk-js'
import type { ReadArchivist, ReadWriteArchivist } from '@xyo-network/archivist-model'
import type { Payload, WithStorageMeta } from '@xyo-network/payload-model'

import { isReadArchivist, isReadWriteArchivist } from '../block/index.ts'
import type { PayloadMap, PayloadMapRead } from '../model/index.ts'

export function readPayloadMapFromStore<T extends Payload>(store: ReadArchivist<T> | PayloadMapRead<WithStorageMeta<T>>): PayloadMapRead<WithStorageMeta<T>> {
  if (isReadArchivist(store)) {
    return {
      get: async (hash: Hash) => {
        return (await store.get([hash]))[0]
      },
      getMany: async (hashes: Hash[]) => {
        return (await store.get(hashes))
      },
      has: async (hash: Hash) => {
        return isDefined((await store.get([hash]))[0])
      },
    }
  }
  return store
}

export function payloadMapFromStore<T extends Payload>(store: ReadWriteArchivist<T> | PayloadMap<WithStorageMeta<T>>): PayloadMap<WithStorageMeta<T>> {
  if (isReadWriteArchivist(store)) {
    return {
      get: async (hash: Hash) => {
        return (await store.get([hash]))[0]
      },
      getMany: async (hashes: Hash[]) => {
        return (await store.get(hashes))
      },
      has: async (hash: Hash) => {
        return isDefined((await store.get([hash]))[0])
      },
      clear: async () => {
        return await store.clear()
      },
      delete: async (id: Hash) => {
        await store.delete([id])
        return true
      },
      set: async (_id: Hash, data: T) => {
        await store.insert([data])
      },
      setMany: async (entries: [Hash, T][]) => {
        await store.insert(entries.map(e => e[1]))
      },
    } satisfies PayloadMap<WithStorageMeta<T>>
  }
  return store
}
