import type { LogLevelKey } from '@xylabs/sdk-js'
import { LogLevel } from '@xylabs/sdk-js'
import { globalRegistry, z } from 'zod'

const LogLevelNames = Object.keys(LogLevel) as [LogLevelKey]

export const LogConfigZod = z.object({
  logLevel: z.enum(LogLevelNames).default('info').register(globalRegistry, {
    choices: LogLevelNames,
    default: 'info',
    description: 'Desired process verbosity',
    title: 'logLevel',
    type: 'string',
  }),
  silent: z.boolean().default(false).register(globalRegistry, {
    default: false,
    description: 'Whether to run in silent mode',
    title: 'silent',
    type: 'boolean',
  }),
})

export type LogConfig = z.infer<typeof LogConfigZod>
