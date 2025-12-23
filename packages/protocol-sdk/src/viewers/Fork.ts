import type { Promisable } from '@xylabs/sdk-js'
import type { ChainId } from '@xyo-network/xl1-protocol'

export type ForkHistory = Record<number, ChainId>

export interface ForkViewerMethods {
  forkHistory(): Promisable<ForkHistory>
}
