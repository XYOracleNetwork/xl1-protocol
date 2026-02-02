import type { Promisable } from '@xylabs/sdk-js'

import type { ChainId } from '../model/index.ts'

export type ForkHistory = Record<number, ChainId>

export interface ForkViewerMethods {
  forkHistory(): Promisable<ForkHistory>
}
