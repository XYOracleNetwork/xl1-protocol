// import type { Signer } from 'ethers/providers'
import { z } from 'zod'

/**
 * Typed Data Types
 * Re-exposing the types from ethers for convenience and to ensure
 * we can fix in one place if they change
 */

// export type TypedDataDomain = Parameters<Signer['signTypedData']>[0]
// export type TypedDataTypes = Parameters<Signer['signTypedData']>[1]
// export type TypedDataValues = Parameters<Signer['signTypedData']>[2]

export const TypedDataDomainZod = z.object({
  name: z.string().nullable().optional(),
  version: z.string().nullable().optional(),
  chainId: z.union([z.string(), z.number(), z.bigint()]).nullable().optional(),
  verifyingContract: z.string().nullable().optional(),
  salt: z.union([z.string(), z.instanceof(Uint8Array)]).nullable().optional(),
})
export type TypedDataDomain = z.infer<typeof TypedDataDomainZod>

export const TypedDataFieldZod = z.object({
  name: z.string(),
  type: z.string(),
})
export type TypedDataField = z.infer<typeof TypedDataFieldZod>

export const TypedDataTypesZod = z.record(z.string(), z.array(TypedDataFieldZod))
export type TypedDataTypes = z.infer<typeof TypedDataTypesZod>

export const TypedDataValueZod = z.record(z.string(), z.any())
export type TypedDataValues = z.infer<typeof TypedDataValueZod>
