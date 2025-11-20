import * as z from 'zod'

export const TimeDomainZod = z.union([
  z.literal('xl1'),
  z.literal('epoch'),
  z.literal('ethereum'),
])
