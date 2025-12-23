import type { ZodObject, ZodRawShape } from 'zod'

export const requestSchemas: Record<string, ZodObject<ZodRawShape> | undefined> = {}
