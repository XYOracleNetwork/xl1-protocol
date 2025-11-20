import { AddressZod } from '@xylabs/sdk-js'
import z from 'zod'

export const TransferPairZod = z.tuple([
  AddressZod, AddressZod,
])
