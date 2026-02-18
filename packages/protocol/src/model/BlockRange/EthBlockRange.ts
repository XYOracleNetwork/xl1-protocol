import type { AssertConfig, Brand } from '@xylabs/sdk-js'
import {
  assertError,
  isDefined, zodAsFactory, zodToFactory,
} from '@xylabs/sdk-js'
import { z } from 'zod'

import {
  asEthBlockNumber,
  type EthBlockNumber, EthBlockNumberishZod, EthBlockNumberZod,
} from '../../BlockNumber/index.ts'

export type EthBlockRange = [EthBlockNumber, EthBlockNumber]

export const EthBlockRangeZod = z.tuple([EthBlockNumberZod, EthBlockNumberZod])
export const EthBlockRangeishZod = z.tuple([EthBlockNumberishZod, EthBlockNumberishZod])

export type EthBlockRangeish = z.input<typeof EthBlockRangeishZod>

export const asEthBlockRange = zodAsFactory<EthBlockRange>(EthBlockRangeZod, 'EthBlockRange')
export const toEthBlockRange = zodToFactory<EthBlockRange>(EthBlockRangeishZod, 'EthBlockRange')

export type EthBlockRangeKey = Brand<string, { readonly __ethBlockRangeKey: true }>
export const toEthBlockNumberKey = (range: EthBlockRange) => `${range[0]}|${range[1]}` as EthBlockRangeKey

export function fromEthBlockNumberKey(key: EthBlockRangeKey): EthBlockRange | undefined
export function fromEthBlockNumberKey(key: EthBlockRangeKey, assert: AssertConfig): EthBlockRange
export function fromEthBlockNumberKey(key: EthBlockRangeKey, assert?: AssertConfig): EthBlockRange | undefined {
  const [start, end] = key.split('|').map(v => asEthBlockNumber(Number(v)))
  const result = (isDefined(start) && isDefined(end)) ? [start, end] : undefined
  return assertError(result, assert, `Invalid EthBlockRangeKey: ${key}`)
}
