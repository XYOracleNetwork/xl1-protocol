import type { Hash, Promisable } from '@xylabs/sdk-js'
import type { Payload, WithHashMeta } from '@xyo-network/payload-model'
import type {
  BlockRate,
  ChainId, SignedHydratedBlockWithHashMeta, TimeDurations, XL1BlockNumber,
  XL1BlockRange,
} from '@xyo-network/xl1-protocol'

import type { Provider, ProviderMoniker } from '../model/index.ts'

export interface BlockViewerMethods {
  blocksByHash(hash: Hash, limit?: number): Promisable<SignedHydratedBlockWithHashMeta[]>
  blocksByNumber(block: XL1BlockNumber, limit?: number): Promisable<SignedHydratedBlockWithHashMeta[]>
  currentBlock(): Promisable<SignedHydratedBlockWithHashMeta>
  payloadsByHash(hashes: Hash[]): Promisable<WithHashMeta<Payload>[]>
  rate(range: XL1BlockRange, timeUnit?: keyof TimeDurations): Promisable<BlockRate>
  stepSizeRate(start: XL1BlockNumber, stepIndex: number, count?: number, timeUnit?: keyof TimeDurations): Promisable<BlockRate>
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
}
