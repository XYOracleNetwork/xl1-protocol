import { globalRegistry, z } from 'zod'

export const RpcRemoteConfigBaseZod = z.object({
  protocol: z.string('http').register(globalRegistry, {
    description: 'Protocol for the RPC connection',
    type: 'string',
  }),
}).describe('Base configuration for the remote RPC')

export type RpcRemoteConfigBase = z.infer<typeof RpcRemoteConfigBaseZod>

export const HttpRpcRemoteConfigZod = RpcRemoteConfigBaseZod.extend({
  protocol: z.string('http').register(globalRegistry, {
    description: 'Protocol for the RPC connection',
    type: 'string',
  }).default('http'),
  url: z.string().register(globalRegistry, {
    description: 'URL for the Chain RPC API',
    type: 'string',
  }),
}).describe('Configuration for the remote RPC using Http')

export type HttpRpcRemoteConfig = z.infer<typeof HttpRpcRemoteConfigZod>

export const PostMessageRpcRemoteConfigZod = RpcRemoteConfigBaseZod.extend({
  protocol: z.string().register(globalRegistry, {
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
}).describe('Configuration for the remote RPC using postMessage')

export type PostMessageRpcRemoteConfig = z.infer<typeof PostMessageRpcRemoteConfigZod>

export const RpcRemoteConfigZod = z.union([HttpRpcRemoteConfigZod, PostMessageRpcRemoteConfigZod])
  .describe('Configuration for a remote RPC connection, either Http or postMessage')

export type RpcRemoteConfig = z.infer<typeof RpcRemoteConfigZod>

export const RemoteConfigZod = z.object({ rpc: RpcRemoteConfigZod.optional() }).describe('Configuration for remote connections, including RPC')

export type RemoteConfig = z.infer<typeof RemoteConfigZod>
