import type { Hash } from '@xylabs/sdk-js'
import { isDefined } from '@xylabs/sdk-js'
import type {
  ReadArchivist, ReadWriteArchivist,
  WithStorageMeta,
} from '@xyo-network/sdk-js'
import type { PayloadMap, PayloadMapRead } from '@xyo-network/xl1-protocol'

import { isReadArchivist, isReadWriteArchivist } from '../block/index.ts'

export function readPayloadMapFromStore(store: ReadArchivist | PayloadMapRead): PayloadMapRead {
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

export function payloadMapFromStore(store: ReadWriteArchivist | PayloadMap): PayloadMap {
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
      set: async (_id: Hash, data: WithStorageMeta) => {
        await store.insert([data])
      },
      setMany: async (entries: [Hash, WithStorageMeta][]) => {
        await store.insert(entries.map(e => e[1]))
      },
    } satisfies PayloadMap<WithStorageMeta>
  }
  return store
}
