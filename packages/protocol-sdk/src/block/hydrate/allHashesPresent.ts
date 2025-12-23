import type { Hash } from '@xylabs/sdk-js'
import type { Payload, WithHashMeta } from '@xyo-network/payload-model'

export function allHashesPresent(hashes: Hash[], payloads: WithHashMeta<Payload>[]): boolean {
  const payloadHashes = new Set(payloads.map(p => p._hash))
  return hashes.every(hash => payloadHashes.has(hash))
}
