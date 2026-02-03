import type z from 'zod'

import type { BaseContextZod } from './BaseContext.zod.ts'

export type BaseContext = z.infer<typeof BaseContextZod>
