import { HashMetaZod, StorageMetaZod } from '@xyo-network/payload-model'
import z from 'zod'

export function WithStorageMetaZod<T extends z.ZodType>(valueZod: T) {
  return z.intersection(valueZod, StorageMetaZod)
}

export function WithHashMetaZod<T extends z.ZodType>(valueZod: T) {
  return z.intersection(valueZod, HashMetaZod)
}
