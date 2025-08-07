import z from 'zod'

import { xl1MaxValue } from './xl1MaxValue.ts'

export const isXL1Factory = <T extends bigint>(places: bigint) => (val: unknown): val is T => {
  if (typeof val !== 'bigint') return false
  return val >= 0n && val <= xl1MaxValue(places)
}

export const XL1ZodFactory = <T extends bigint>(places: bigint, name: string) => {
  const is = isXL1Factory<T>(places)
  const message = `Invalid value for ${name}, must be between 0 and ${xl1MaxValue(places)}`
  return z.bigint().refine(
    is,
    { message },
  )
}

export const XL1TransformZodFactory = <T extends bigint>(places: bigint, name: string) => {
  const is = isXL1Factory<T>(places)
  const message = `Invalid value for ${name}, must be between 0 and ${xl1MaxValue(places)}`
  return z.union([z.bigint(), z.number(), z.string(), z.boolean()]).transform(val => BigInt(val) as T).refine(
    is,
    { message },
  )
}

export const asXL1Factory = <T extends bigint>(places: bigint) => {
  const zod = XL1ZodFactory<T>(places, 'local')
  return (val: unknown): T => {
    const result = zod.safeParse(val)
    if (result.success) {
      return result.data as T
    }
    throw new Error(`Invalid value for ${places}, must be between 0 and ${xl1MaxValue(places)}`)
  }
}

export const toXL1Factory = <T extends bigint>(places: bigint) => {
  const zod = XL1TransformZodFactory<T>(places, 'local')
  return (val: unknown): T | undefined => {
    const result = zod.safeParse(val)
    return result.success ? result.data as T : undefined
  }
}
