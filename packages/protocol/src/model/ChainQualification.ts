import { HashZod, zodIsFactory } from '@xylabs/sdk-js'
import { z } from 'zod'

import { XL1BlockRangeZod } from './BlockRange/index.ts'

export const ChainQualificationZod = z.object({ head: HashZod, range: XL1BlockRangeZod })
export type ChainQualification = z.infer<typeof ChainQualificationZod>
export const isChainQualification = zodIsFactory(ChainQualificationZod)

export const ChainQualifiedRangeConfigZod = z.object({ range: XL1BlockRangeZod })
export type ChainQualifiedRangeConfig = z.infer<typeof ChainQualifiedRangeConfigZod>
export const isChainQualifiedRangeConfig = zodIsFactory(ChainQualifiedRangeConfigZod)

export const ChainQualifiedHeadConfigZod = z.object({ head: HashZod })
export type ChainQualifiedHeadConfig = z.infer<typeof ChainQualifiedHeadConfigZod>
export const isChainQualifiedHeadConfig = zodIsFactory(ChainQualifiedHeadConfigZod)

export const ChainQualifiedConfigZod = z.union([ChainQualifiedRangeConfigZod, ChainQualifiedHeadConfigZod, z.object({})])
export type ChainQualifiedConfig = z.infer<typeof ChainQualifiedConfigZod>
export const isChainQualifiedConfig = zodIsFactory(ChainQualifiedConfigZod)

export const ExtendChainQualifiedConfigZod = (<T>(zodType: z.ZodType<T>) => {
  return z.union([
    ChainQualifiedRangeConfigZod.extend(zodType),
    ChainQualifiedHeadConfigZod.extend(zodType),
    zodType,
  ])
}) as <T>(zodType: z.ZodType<T>) => z.ZodType<T & ChainQualifiedConfig>

export type ChainQualified<T> = [T, ChainQualification]
export const ChainQualifiedZod = <T>(zodType: z.ZodType<T>) => {
  return z.tuple([zodType, ChainQualificationZod])
}
