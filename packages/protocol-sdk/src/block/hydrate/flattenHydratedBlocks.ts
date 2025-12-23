import type { HydratedBlock } from '@xyo-network/xl1-protocol'

import { flattenHydratedBlock } from './flattenHydratedBlock.ts'

export const flattenHydratedBlocks = <T extends HydratedBlock>(hydratedBlocks: T[]): (T[0] | T[1][number])[] =>
  hydratedBlocks.flatMap(blk => flattenHydratedBlock(blk))
