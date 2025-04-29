import type { Promisable } from '@xylabs/promise'
import type { Payload } from '@xyo-network/payload-model'

import type { HydratedBlock } from './HydratedBlock.ts'

export interface ChainAnalyzer<T extends Payload = Payload> {
  onBlock(block: HydratedBlock): Promisable<boolean>
  result(): T
  shouldContinue(): boolean
}
