import { globalRegistry, z } from 'zod'

import { MnemonicStringZod } from '../validation/index.ts'

export const ApiConfigZod = z.object({
  host: z.string().default('localhost').register(globalRegistry, {
    default: 'localhost',
    description: 'Host for the API',
    title: 'api.host',
    type: 'string',
  }),
  initRewardsCache: z.union([z.number(), z.string()]).transform(v => v !== '0' && v !== 'false').default(true).register(globalRegistry, {
    description: 'Whether to initialize the rewards cache on startup',
    title: 'api.initRewardsCache',
    type: 'boolean',
  }),
  mnemonic: MnemonicStringZod.optional().register(globalRegistry, {
    description: 'Mnemonic for the API wallet',
    title: 'api.mnemonic',
    type: 'string',
  }),
  port: z.coerce.number().default(8080).register(globalRegistry, {
    default: 8080,
    description: 'Port for the API',
    title: 'api.port',
    type: 'number',
  }),
})

export type ApiConfig = z.infer<typeof ApiConfigZod>
