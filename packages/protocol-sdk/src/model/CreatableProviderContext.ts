import type z from 'zod'

import type { CreatableProviderContextZod } from './CreatableProviderContext.zod.ts'

export type CreatableProviderContext = z.infer<typeof CreatableProviderContextZod>
