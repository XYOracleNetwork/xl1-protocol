import { AddressZod, asAddress } from '@xylabs/sdk-js'
import { globalRegistry, z } from 'zod'

export const ValidationConfigZod = z.object({
  allowedRewardRedeemers: z.preprocess((val) => {
    if (typeof val === 'string') {
      return val.split(',').map(s => asAddress(s.trim()))
    }
    return val
  }, z.array(AddressZod).optional().register(globalRegistry, {
    description: 'List of allowed reward redeemer addresses, if undefined anyone can participate',
    title: 'allowedRewardRedeemers',
    type: 'array',
  })),
  allowedRewardEscrowAccountSigners: z.preprocess((val) => {
    if (typeof val === 'string') {
      return val.split(',').map(s => asAddress(s.trim()))
    }
    return val
  }, z.array(AddressZod).optional().register(globalRegistry, {
    description: 'List of allowed reward escrow account signer addresses, if undefined anyone can participate',
    title: 'allowedRewardEscrowAccountSigners',
    type: 'array',
  })),
})

export type ValidationConfig = z.infer<typeof ValidationConfigZod>
