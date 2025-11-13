import type z from 'zod'

import { zodAsFactory } from './zodAsFactory.ts'

export function zodToFactory<T>(zod: z.ZodType<T>, name: string) {
  return zodAsFactory<T>(zod, name)
}
