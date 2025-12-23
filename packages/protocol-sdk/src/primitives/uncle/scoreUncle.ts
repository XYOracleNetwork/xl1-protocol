import type { SignedHydratedBlockWithHashMeta } from '@xyo-network/xl1-protocol'

export function scoreUncle(finalizedWindowedChain: SignedHydratedBlockWithHashMeta[], blocks: SignedHydratedBlockWithHashMeta[]) {
  // TODO: More than length check
  return blocks.length
}
