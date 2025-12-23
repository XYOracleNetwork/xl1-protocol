import type { ZodUndefined } from 'zod'
import { z } from 'zod'

import { jsonrpc } from '../JsonRpc.ts'

export const createResponseSchema = <TParams extends z.ZodTypeAny>(
  resultSchema: TParams | ZodUndefined = z.undefined(),
) =>
  z.object({
    id: z.union([z.string(), z.number()]),
    jsonrpc: z.literal(jsonrpc),
    result: resultSchema,
  })
