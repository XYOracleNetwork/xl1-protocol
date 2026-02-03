import type z from 'zod'

import type { CachingContextZod } from './CachingContext.zod.ts'

export type CachingContext = z.infer<typeof CachingContextZod>
