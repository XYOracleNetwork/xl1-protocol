import type { Hash } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'
import type { Payload } from '@xyo-network/payload-model'

export interface XyoStorageHelpers {
  addPayloads(data: Payload[]): Promisable<Hash[]>
  getPayloads(hashes: Hash[]): Promisable<Payload[]>
}

export interface XyoStorageCalls {
  add(data: ArrayBuffer[]): Promisable<Hash[]>
  fetch(hashes: Hash[], maxDepth?: number): Promisable<ArrayBuffer[]>
  get(hashes: Hash[]): Promisable<ArrayBuffer[]>
  trace(hashes: Hash[]): Promisable<[ArrayBuffer, Payload[]][]>
}

export interface XyoStorage extends XyoStorageHelpers, XyoStorageCalls {}
