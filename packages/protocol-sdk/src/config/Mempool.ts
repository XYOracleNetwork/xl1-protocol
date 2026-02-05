import { globalRegistry, z } from 'zod'

import { MnemonicStringZod } from '../validation/index.ts'

export const MempoolConfigZod = z.object({
  enabled: z.union([z.string(), z.boolean()]).default('false').transform((val, ctx) => {
    if (typeof val === 'boolean') return val
    const normalized = val.toLowerCase().trim()
    if (['true', '1', 'yes', 'on'].includes(normalized)) return true
    if (['false', '0', 'no', 'off'].includes(normalized)) return false
    ctx.addIssue({
      code: 'invalid_type',
      expected: 'boolean',
      message: `Invalid boolean value: "${val}". Use true/false, 1/0, yes/no.`,
    })
    return z.NEVER
  }).register(globalRegistry, {
    default: 'false',
    description: 'Enable the Mempool',
    title: 'mempool.enabled',
    type: 'boolean',
  }),
  host: z.string().default('localhost').register(globalRegistry, {
    default: 'localhost',
    description: 'Host for the Mempool',
    title: 'mempool.host',
    type: 'string',
  }),
  mnemonic: MnemonicStringZod.optional().register(globalRegistry, {
    description: 'Mnemonic for the Mempool wallet',
    title: 'mempool.mnemonic',
    type: 'string',
  }),
  port: z.coerce.number().default(8083).register(globalRegistry, {
    default: 8083,
    description: 'Port for the Mempool',
    title: 'mempool.port',
    type: 'number',
  }),
})

export type MempoolConfig = z.infer<typeof MempoolConfigZod>
