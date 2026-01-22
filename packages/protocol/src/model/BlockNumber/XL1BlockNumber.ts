import { type Brand } from '@xylabs/sdk-js'
import { zodAsFactory, zodToFactory } from '@xylabs/zod'
import { z } from 'zod'

import type { BlockNumber } from './BlockNumber.ts'
import { BlockNumberishZod } from './BlockNumber.ts'

export type XL1BlockNumber = Brand<BlockNumber, { readonly __xl1BlockNumber: true }>

export const XL1BlockNumberZod = z.number().transform(v => v as XL1BlockNumber)
export const XL1BlockNumberishZod = BlockNumberishZod.transform(v => v as XL1BlockNumber)

export type XL1BlockNumberish = z.input<typeof XL1BlockNumberishZod>

export const asXL1BlockNumber = zodAsFactory<XL1BlockNumber>(XL1BlockNumberZod, 'asXL1BlockNumber')
export const toXL1BlockNumber = zodToFactory<XL1BlockNumber>(XL1BlockNumberishZod, 'toXL1BlockNumber')

export const XL1_BLOCK_NUMBER_ZERO = asXL1BlockNumber(0)
