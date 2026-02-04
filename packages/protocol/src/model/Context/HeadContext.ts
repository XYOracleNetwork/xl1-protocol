import type z from 'zod'

import type { HeadContextZod } from './HeadContext.zod.ts'

export type HeadContext = z.infer<typeof HeadContextZod>
