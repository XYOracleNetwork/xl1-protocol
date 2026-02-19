import type { Payload } from '@xyo-network/sdk-js'
import { type BlockBoundWitness, toHydratedBlock } from '@xyo-network/xl1-protocol'

export const flattenHydratedBlock = <B extends BlockBoundWitness, P extends Payload>(hydratedBlock: [B, P[]]): (P | B)[] => {
  const [blk, blkPayloads] = hydratedBlock
  return [...blkPayloads, blk]
}

export const tryUnflattenHydratedBlock = <
  B extends BlockBoundWitness,
  P extends Payload,
>(flattened: (P | B)[]): [B, P[]] | undefined => {
  // Last element is the block
  const blk = flattened.at(-1) as B

  // All previous elements are payloads
  const payloads = flattened.slice(0, -1) as P[]

  return toHydratedBlock([blk, payloads])
}

export const unflattenHydratedBlock = <
  B extends BlockBoundWitness,
  P extends Payload,
>(flattened: (P | B)[]): [B, P[]] => toHydratedBlock(tryUnflattenHydratedBlock(flattened), true) as [B, P[]]
