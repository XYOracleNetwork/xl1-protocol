import type {
  BlockRangeKey, EthBlockRangeKey, XL1BlockRangeKey,
} from './BlockRange/index.ts'

export type BigFraction = [bigint, bigint] // numerator, denominator

export type RangeMultipliers = Record<BlockRangeKey, BigFraction>
export type EthRangeMultipliers = Record<EthBlockRangeKey, BigFraction>
export type XL1RangeMultipliers = Record<XL1BlockRangeKey, BigFraction>
