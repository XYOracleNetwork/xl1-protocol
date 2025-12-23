import type { SignedHydratedBlockWithHashMeta } from '@xyo-network/xl1-protocol'

import { scoreUncle } from './scoreUncle.ts'

export function findBestUncle(finalizedWindowedChain: SignedHydratedBlockWithHashMeta[], uncles: SignedHydratedBlockWithHashMeta[][]) {
  const scores = uncles.map(uncle => ([scoreUncle(finalizedWindowedChain, uncle), uncle] as const)).toSorted((a, b) => b[0] - a[0])
  return scores[0]?.[1] ?? finalizedWindowedChain
}
