import { globalRegistry, z } from 'zod'

export const EvmInfuraConfigZod = z.object({
  projectId: z.string().optional().register(globalRegistry, {
    description: 'Infura project ID',
    title: 'evm.infura.projectId',
    type: 'string',
  }),
  projectSecret: z.string().optional().register(globalRegistry, {
    description: 'Infura project secret',
    title: 'evm.infura.projectSecret',
    type: 'string',
  }),
})

export const EvmJsonRpcConfigZod = z.object({
  url: z.url().optional().register(globalRegistry, {
    description: 'JSON-RPC URL',
    title: 'evm.jsonRpc.url',
    type: 'string',
  }),
})

export const EvmConfigZod = z.object({
  chainId: z.string().optional().register(globalRegistry, {
    description: 'EVM chain ID',
    title: 'evm.chainId',
    type: 'string',
  }),
  infura: EvmInfuraConfigZod.optional().describe('Infura Provider configuration'),
  jsonRpc: EvmJsonRpcConfigZod.optional().describe('JSON-RPC Provider configuration'),
})

export type EvmConfig = z.infer<typeof EvmConfigZod>
