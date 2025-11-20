import { AddressRegEx, toAddress } from '@xylabs/sdk-js'
import * as z from 'zod'

import type { ChainId } from '../model/index.ts'

export const ChainZod = z.string().toLowerCase().regex(AddressRegEx).transform<ChainId>(v => toAddress(v) as ChainId)
