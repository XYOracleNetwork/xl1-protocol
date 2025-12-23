import type {
  ReadArchivist, ReadWriteArchivist, WriteArchivist,
} from '@xyo-network/archivist-model'

export function isReadArchivist(value: unknown): value is ReadArchivist {
  return (value as ReadArchivist).get !== undefined && (value as ReadArchivist).next !== undefined
}

export function isWriteArchivist(value: unknown): value is WriteArchivist {
  return (value as WriteArchivist).insert !== undefined
}

export function isReadWriteArchivist(value: unknown): value is ReadWriteArchivist {
  return isReadArchivist(value) && isWriteArchivist(value)
}
