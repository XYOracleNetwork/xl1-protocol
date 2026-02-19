import type { Promisable } from '@xylabs/sdk-js'
import type { Payload } from '@xyo-network/sdk-js'

import type { HydratedBlock } from '../block/index.ts'

export interface ChainAnalyzer<T extends Payload = Payload> {
  onBlock(block: HydratedBlock): Promisable<boolean>
  result(): T
  shouldContinue(): boolean
}
