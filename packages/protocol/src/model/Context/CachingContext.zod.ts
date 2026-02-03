import { BaseContextZod, CachesZod } from './BaseContext.zod.ts'

export const CachingContextZod = BaseContextZod.extend({ caches: CachesZod })
