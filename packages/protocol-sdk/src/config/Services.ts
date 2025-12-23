import { globalRegistry, z } from 'zod'

export const ServicesConfigZod = z.object({
  accountBalanceViewerEndpoint: z.string().default('http://localhost:8080/rpc').register(globalRegistry, {
    default: 'http://localhost:8080/rpc',
    description: 'Endpoint of the API to use for instantiating an external AccountBalanceViewer',
    title: 'services.accountBalanceViewerEndpoint',
    type: 'string',
  }),
  apiEndpoint: z.string().default('http://localhost:8080/rpc').register(globalRegistry, {
    default: 'http://localhost:8080/rpc',
    description: 'Endpoint of the API to use for instantiating an external Viewers',
    title: 'services.apiEndpoint',
    type: 'string',
  }),
})

export type ServicesConfig = z.infer<typeof ServicesConfigZod>
