import { type Brand } from '@xylabs/sdk-js'
import { zodAsFactory, zodToFactory } from '@xylabs/zod'
import { z } from 'zod'

import type { BlockNumber } from './BlockNumber.ts'
import { BlockNumberishZod } from './BlockNumber.ts'

export type EthBlockNumber = Brand<BlockNumber, { readonly __ethBlockNumber: true }>

export const EthBlockNumberZod = z.number().transform(v => v as EthBlockNumber)
export const EthBlockNumberishZod = BlockNumberishZod.transform(v => v as EthBlockNumber)

export type EthBlockNumberish = z.input<typeof EthBlockNumberishZod>

export const asEthBlockNumber = zodAsFactory<EthBlockNumber>(EthBlockNumberZod, 'asEthBlockNumber')
export const toEthBlockNumber = zodToFactory<EthBlockNumber>(EthBlockNumberishZod, 'toEthBlockNumber')

export const ETH_BLOCK_NUMBER_ZERO = asEthBlockNumber(0)
