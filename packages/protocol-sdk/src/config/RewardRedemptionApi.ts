import { globalRegistry, z } from 'zod'

import { MnemonicStringZod } from '../validation/index.ts'

export const RewardRedemptionApiConfigZod = z.object({
  chainRpcApiUrl: z.string().default('http://localhost:8080/rpc').register(globalRegistry, {
    default: 'http://localhost:8080/rpc',
    description: 'URL for the Chain RPC API',
    title: 'rewardRedemptionApi.chainRpcApiUrl',
    type: 'string',
  }),
  host: z.string().default('localhost').register(globalRegistry, {
    default: 'localhost',
    description: 'Host for the Redemption API',
    title: 'rewardRedemptionApi.host',
    type: 'string',
  }),
  mnemonic: MnemonicStringZod.optional().register(globalRegistry, {
    description: 'Mnemonic for the Redemption API wallet',
    title: 'rewardRedemptionApi.mnemonic',
    type: 'string',
  }),
  port: z.coerce.number().default(8082).register(globalRegistry, {
    default: 8082,
    description: 'Port for the Redemption API',
    title: 'rewardRedemptionApi.port',
    type: 'number',
  }),
})

export type RewardRedemptionApiConfig = z.infer<typeof RewardRedemptionApiConfigZod>
