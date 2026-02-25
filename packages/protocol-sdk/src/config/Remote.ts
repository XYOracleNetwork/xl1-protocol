import { globalRegistry, z } from 'zod'

export const HttpRpcRemoteConfigZod = z.object({
  rpc: z.object({
    protocol: z.literal('http').register(globalRegistry, {
      description: 'Protocol for the RPC connection',
      type: 'string',
    }).default('http'),
    url: z.string().register(globalRegistry, {
      description: 'URL for the Chain RPC API',
      type: 'string',
    }),
  }).describe('Configuration for the remote RPC using Http'),
})

export const PostMessageRpcRemoteConfigZod = z.object({
  rpc: z.object({
    protocol: z.literal('postMessage').register(globalRegistry, {
      description: 'Protocol for the RPC connection',
      type: 'string',
    }).default('postMessage'),
    networkId: z.string().register(globalRegistry, {
      description: 'Network ID to use for the postMessage RPC connection',
      type: 'string',
    }),
    sessionId: z.string().register(globalRegistry, {
      description: 'Session ID to use for the postMessage RPC connection',
      type: 'string',
    }),
  }).describe('Configuration for the remote RPC using postMessage'),
})

export const RemoteConfigZod = z.union([HttpRpcRemoteConfigZod, PostMessageRpcRemoteConfigZod])
  .describe('Configuration for a remote RPC connection, either Http or postMessage')

export type RemoteConfig = z.infer<typeof RemoteConfigZod>
