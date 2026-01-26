import type { ZodUndefined } from 'zod'
import { z } from 'zod'

import { jsonrpc } from '../JsonRpc.ts'

export const createRequestSchema = <TParams extends z.ZodType, TMethodName extends string = string>(
  methodName: TMethodName,
  paramsSchema: TParams | ZodUndefined = z.undefined(),
) =>
  z.object({
    id: z.union([z.string(), z.number()]),
    jsonrpc: z.literal(jsonrpc),
    method: z.literal(methodName),
    params: paramsSchema,
  })
