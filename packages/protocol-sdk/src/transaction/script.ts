import { asHash, type Hash } from '@xylabs/sdk-js'
import { assertEx, filterAs } from '@xylabs/sdk-js'
import type { WithStorageMeta } from '@xyo-network/payload-model'
import type { AllowedBlockPayload, HydratedTransactionWithHashMeta } from '@xyo-network/xl1-protocol'
import { isAllowedBlockPayloadWithHashMeta } from '@xyo-network/xl1-protocol'

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

export const tryExtractElevatedHashes = (tx: HydratedTransactionWithHashMeta): WithStorageMeta<AllowedBlockPayload>[] => {
  const [bw, payloads] = tx
  const { script } = bw
  const hashes = script ? tryExtractElevatedHashesFromScript(script) : []
  return payloads
    .filter(p => hashes.includes(p._hash))
    .filter(isAllowedBlockPayloadWithHashMeta)
}

export const extractElevatedHashes = (tx: HydratedTransactionWithHashMeta): WithStorageMeta<AllowedBlockPayload>[] => {
  const [bw, payloads] = tx
  const { script } = bw
  const hashes = script ? tryExtractElevatedHashesFromScript(script) : []
  const filtered = payloads
    .filter(p => hashes.includes(p._hash))
    .filter(isAllowedBlockPayloadWithHashMeta)
  assertEx(filtered.length === hashes.length, () => 'Invalid elevated hashes')
  return filtered
}
