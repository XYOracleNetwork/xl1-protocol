import type { Hash, Promisable } from '@xylabs/sdk-js'
import type { Payload, WithHashMeta } from '@xyo-network/payload-model'

import type { SignedHydratedBlockWithHashMeta } from '../block/index.ts'
import type { XL1BlockNumber } from '../BlockNumber/index.ts'
import type { ChainId } from '../chain/index.ts'
import type {
  BlockRate, SingleTimeConfig, TimeDurations, XL1BlockRange,
} from '../model/index.ts'
import type { Provider, ProviderMoniker } from '../provider/index.ts'

export interface BlockViewerMethods {
  blocksByHash(hash: Hash, limit?: number): Promisable<SignedHydratedBlockWithHashMeta[]>
  blocksByNumber(block: XL1BlockNumber, limit?: number): Promisable<SignedHydratedBlockWithHashMeta[]>
  currentBlock(): Promisable<SignedHydratedBlockWithHashMeta>
  payloadsByHash(hashes: Hash[]): Promisable<WithHashMeta<Payload>[]>
}

export const BlockViewerMoniker = 'BlockViewer' as const
export type BlockViewerMoniker = typeof BlockViewerMoniker

export interface BlockViewer<TMoniker extends ProviderMoniker = BlockViewerMoniker> extends BlockViewerMethods, Provider<TMoniker> {
  blockByHash(hash: Hash): Promisable<SignedHydratedBlockWithHashMeta | null>
  blockByNumber(block: XL1BlockNumber): Promisable<SignedHydratedBlockWithHashMeta | null>
  chainId(): Promisable<ChainId>
  chainId(blockNumber: XL1BlockNumber): Promisable<ChainId>
  chainId(blockNumber: 'latest'): Promisable<ChainId>
  currentBlockHash(): Promisable<Hash>
  currentBlockNumber(): Promisable<XL1BlockNumber>
  payloadByHash(hash: Hash): Promisable<WithHashMeta<Payload> | null>
  rate(range: XL1BlockRange, timeUnit?: keyof TimeDurations): Promisable<BlockRate>
  stepSizeRate(start: XL1BlockNumber, stepIndex: number, count?: number, timeUnit?: keyof TimeDurations): Promisable<BlockRate>
  timeDurationRate(
    timeConfig: SingleTimeConfig,
    startBlockNumber?: XL1BlockNumber,
    timeUnit?: keyof TimeDurations,
    toleranceMs?: number,
    maxAttempts?: number,
  ): Promisable<BlockRate>
}
