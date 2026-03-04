import { asHash, type Hash } from '@xylabs/sdk-js'
import { assertEx, filterAs } from '@xylabs/sdk-js'
import type { WithHashMeta } from '@xyo-network/sdk-js'
import { isHashMeta } from '@xyo-network/sdk-js'
import type { AllowedBlockPayload, HydratedTransactionWithHashMeta } from '@xyo-network/xl1-protocol'
import { isAllowedBlockPayload } from '@xyo-network/xl1-protocol'

export const tryExtractElevatedHashesFromScript = (strings: string[]): Hash[] => {
  const hashes = strings
    .filter(str => str.startsWith('elevate|'))
    .map(str => str.split('|')[1])
  return filterAs(hashes, h => asHash(h))
}

export const extractElevatedHashesFromScript = (strings: string[]): Hash[] => {
  const hashes = strings
    .filter(str => str.startsWith('elevate|'))
    .map(str => str.split('|')[1])
  const filtered = filterAs(hashes, h => asHash(h))
  assertEx(filtered.length === hashes.length, () => 'Invalid elevated hashes')
  return filtered
}

export const tryExtractElevatedHashes = (tx: HydratedTransactionWithHashMeta): WithHashMeta<AllowedBlockPayload>[] => {
  const [bw, payloads] = tx
  const { script } = bw
  const hashes = script ? tryExtractElevatedHashesFromScript(script) : []
  return payloads
    .filter(p => hashes.includes(p._hash))
    .filter(isAllowedBlockPayload)
    .filter(isHashMeta)
}

export const extractElevatedHashes = (tx: HydratedTransactionWithHashMeta): WithHashMeta<AllowedBlockPayload>[] => {
  const [bw, payloads] = tx
  const { script } = bw
  const hashes = script ? tryExtractElevatedHashesFromScript(script) : []
  const filtered = payloads
    .filter(p => hashes.includes(p._hash))
    .filter(isAllowedBlockPayload)
    .filter(isHashMeta)
  assertEx(filtered.length === hashes.length, () => 'Invalid elevated hashes')
  return filtered
}
