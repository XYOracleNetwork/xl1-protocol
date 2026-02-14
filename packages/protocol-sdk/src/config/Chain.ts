import { AddressZod, HexZod } from '@xylabs/sdk-js'
import { globalRegistry, z } from 'zod'

export const ChainConfigZod = z.object({
  id: HexZod.optional()
    .register(globalRegistry, {
      description:
      'The unique identifier for the chain. Should be the staking contract address for contract-backed chains.',
      title: 'chain.id',
      type: 'string',
    }),
  genesisRewardAddress: AddressZod.optional()
    .register(globalRegistry, {
      description:
      'Address to send the initial genesis rewards to, if a new chain is being created.',
      title: 'chain.genesisRewardAddress',
      type: 'Address',
    }),
})

export type ChainConfig = z.infer<typeof ChainConfigZod>
