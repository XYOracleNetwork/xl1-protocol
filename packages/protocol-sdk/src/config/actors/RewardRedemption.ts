import { globalRegistry, z } from 'zod'

import { MnemonicStringZod } from '../../validation/index.ts'
import { BaseConfigZod } from '../Base.ts'

export const RewardRedemptionConfigZod = BaseConfigZod.extend(z.object({
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
}).shape)

export type RewardRedemptionConfig = z.infer<typeof RewardRedemptionConfigZod>
