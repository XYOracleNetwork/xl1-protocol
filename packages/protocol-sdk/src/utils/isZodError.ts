import { z } from 'zod'

export const isZodError = (error: unknown): error is z.ZodError => {
  return error instanceof z.ZodError
}

export const prettifyZodError = (error: z.ZodError): string => {
  return z.prettifyError(error)
}
