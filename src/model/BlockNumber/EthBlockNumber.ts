import { type Brand } from '@xylabs/typeof'
import { zodAsFactory, zodToFactory } from '@xylabs/zod'
import z from 'zod'

import type { BlockNumber } from './BlockNumber.ts'
import { NumberishBlockNumberZod } from './BlockNumber.ts'

export type EthBlockNumber = Brand<BlockNumber, { readonly __ethBlockNumber: true }>

export const EthBlockNumberZod = z.number().transform(v => v as EthBlockNumber)
export const NumberishEthBlockNumberZod = NumberishBlockNumberZod.transform(v => v as EthBlockNumber)

export const asEthBlockNumber = zodAsFactory<EthBlockNumber>(EthBlockNumberZod, 'asEthBlockNumber')
export const toEthBlockNumber = zodToFactory<EthBlockNumber>(NumberishEthBlockNumberZod, 'toEthBlockNumber')

export const ETH_BLOCK_NUMBER_ZERO = asEthBlockNumber(0)
