import { type Brand } from '@xylabs/typeof'
import { zodAsFactory, zodToFactory } from '@xylabs/zod'
import z from 'zod'

import { NumberishZod } from './Numberish.ts'

export type BlockNumber = Brand<number, { readonly __blockNumber: true }>

export const BlockNumberZod = z.number().transform(v => v as BlockNumber)
export const NumberishBlockNumberZod = NumberishZod.transform(v => v as BlockNumber)

export const asBlockNumber = zodAsFactory<BlockNumber>(BlockNumberZod, 'asBlockNumber')
export const toBlockNumber = zodToFactory<BlockNumber>(NumberishBlockNumberZod, 'toBlockNumber')

export const BLOCK_NUMBER_ZERO = asBlockNumber(0)
