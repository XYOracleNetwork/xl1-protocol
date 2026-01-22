import { type Brand } from '@xylabs/sdk-js'
import { zodAsFactory, zodToFactory } from '@xylabs/zod'
import { z } from 'zod'

import { NumberishZod } from './Numberish.ts'

export type BlockNumber = Brand<number, { readonly __blockNumber: true }>

export const BlockNumberZod = z.number().transform(v => v as BlockNumber)
export const BlockNumberishZod = NumberishZod.transform(v => v as BlockNumber)

export type BlockNumberish = z.input<typeof BlockNumberishZod>

export const asBlockNumber = zodAsFactory<BlockNumber>(BlockNumberZod, 'asBlockNumber')
export const toBlockNumber = zodToFactory<BlockNumber>(BlockNumberishZod, 'toBlockNumber')

export const BLOCK_NUMBER_ZERO = asBlockNumber(0)
