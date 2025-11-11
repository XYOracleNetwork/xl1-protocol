import { type Brand } from '@xylabs/typeof'
import z from 'zod'

import { zodAsFactory, zodToFactory } from '../zod/index.ts'
import type { BlockNumber } from './BlockNumber.ts'
import { NumberishBlockNumberZod } from './BlockNumber.ts'

export type XL1BlockNumber = Brand<BlockNumber, { readonly __xl1BlockNumber: true }>

export const XL1BlockNumberZod = z.number().transform(v => v as XL1BlockNumber)
export const NumberishXL1BlockNumberZod = NumberishBlockNumberZod.transform(v => v as XL1BlockNumber)

export const asXL1BlockNumber = zodAsFactory<XL1BlockNumber>(XL1BlockNumberZod)
export const toXL1BlockNumber = zodToFactory<XL1BlockNumber>(NumberishXL1BlockNumberZod)

export const XL1_BLOCK_NUMBER_ZERO = asXL1BlockNumber(0)
