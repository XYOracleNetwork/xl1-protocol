import type { ZodType } from 'zod'

type SerializationTransform = {
  /* fromJson */
  from: ZodType
  /* toJson */
  to: ZodType
}

export type RequestResponseSchemas = {
  /**
   * Schema for validating (and optionally transforming) the RPC request
   */
  params: SerializationTransform
  /**
   * Schema for validating (and optionally transforming) the result property of the RPC response
   */
  result: SerializationTransform
}

export type RpcSchemaMap<TMethod extends string = string> = Record<
  TMethod,
  RequestResponseSchemas
>
