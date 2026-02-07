import { globalRegistry, z } from 'zod'

export const RemoteConfigZod = z.object({
  rpc: z.object({
    url: z.string().register(globalRegistry, {
      description: 'URL for the Chain RPC API',
      type: 'string',
    }),
  }).describe('Configuration for the remote RPC service').optional(),
})

export type RemoteConfig = z.infer<typeof RemoteConfigZod>
