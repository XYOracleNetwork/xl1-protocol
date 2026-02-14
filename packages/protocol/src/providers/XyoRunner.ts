import type { Hash, Promisable } from '@xylabs/sdk-js'

import type { SignedHydratedTransaction } from '../model/index.ts'
import type { Provider } from '../Provider.ts'
import type { MempoolRunner } from '../runners/index.ts'

export interface XyoRunnerMethods {
  broadcastTransaction(transaction: SignedHydratedTransaction): Promisable<Hash>
}

export const XyoRunnerMoniker = 'XyoRunner' as const
export type XyoRunnerMoniker = typeof XyoRunnerMoniker

export interface XyoRunner extends XyoRunnerMethods, Provider<XyoRunnerMoniker> {
  mempool: MempoolRunner
}
