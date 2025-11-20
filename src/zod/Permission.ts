import { z } from 'zod'

export const CaveatTypesZod = z.enum(['chain', 'expiration', 'filteredResponse', 'rateLimit', 'restrictReturnedAccounts'])

export const CaveatsZod = z.object({
  type: CaveatTypesZod,
  value: z.json(),
})

export const PermissionZod = z.object({
  parentCapability: z.string(),
  caveats: CaveatsZod.array().optional(),
  invoker: z.string(),
})

export const InvokerPermissionZod = PermissionZod.extend({ date: z.number().optional() })

export const PermissionRequestZod = z.record(z.string(), z.record(z.string(), z.any()))

export const RequestedPermissionZod = z.object({
  parentCapability: z.string(),
  date: z.number().optional(),
})
