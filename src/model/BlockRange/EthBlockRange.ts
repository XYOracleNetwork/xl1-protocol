import type { AssertConfig } from '@xylabs/hex'
import { assertError } from '@xylabs/hex'
import { type Brand, isDefined } from '@xylabs/typeof'
import z from 'zod'

import {
  asEthBlockNumber,
  type BlockNumber, EthBlockNumberZod,
  NumberishEthBlockNumberZod,
} from '../BlockNumber/index.ts'
import { zodAsFactory, zodToFactory } from '../zod/index.ts'

export type EthBlockRange = [BlockNumber, BlockNumber]
export type NumberishEthBlockRange = [BlockNumber, BlockNumber]

export const EthBlockRangeZod = z.tuple([EthBlockNumberZod, EthBlockNumberZod])
export const NumberishEthBlockRangeZod = z.tuple([NumberishEthBlockNumberZod, NumberishEthBlockNumberZod])

export const asEthBlockRange = zodAsFactory<EthBlockRange>(EthBlockRangeZod)
export const toEthBlockRange = zodToFactory<EthBlockRange>(NumberishEthBlockRangeZod)

export type EthBlockRangeKey = Brand<string, { readonly __ethBlockRangeKey: true }>
export const toEthBlockNumberKey = (range: EthBlockRange) => `${range[0]}|${range[1]}` as EthBlockRangeKey

export function fromEthBlockNumberKey(key: EthBlockRangeKey): EthBlockRange | undefined
export function fromEthBlockNumberKey(key: EthBlockRangeKey, assert: AssertConfig): EthBlockRange
export function fromEthBlockNumberKey(key: EthBlockRangeKey, assert?: AssertConfig): EthBlockRange | undefined {
  const [start, end] = key.split('|').map(v => asEthBlockNumber(Number(v)))
  const result = (isDefined(start) && isDefined(end)) ? [start, end] : undefined
  return assertError(result, assert, `Invalid EthBlockRangeKey: ${key}`)
}
