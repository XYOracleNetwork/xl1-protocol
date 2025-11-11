import type z from 'zod'

export function zodIsFactory<T>(zod: z.ZodType<T>) {
  return (value: unknown): value is T => zod.safeParse(value).success
}
