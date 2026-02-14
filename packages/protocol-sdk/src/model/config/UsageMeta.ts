import { z } from 'zod'

const DescriptionSchema = z.string()
const TitleSchema = z.string()

export const JSONSchemaMetaSchema = z
  .object({
    id: z.string().optional(),
    title: TitleSchema.optional(),
    description: DescriptionSchema.optional(),
    deprecated: z.boolean().optional(),
  })
  .catchall(z.unknown()) // allow arbitrary extra keys

export const GlobalMetaSchema = JSONSchemaMetaSchema.extend({})

const ChoicesSchema = z
  .array(z.union([z.string(), z.number(), z.literal(true), z.undefined()]))
  .readonly()

export const UsageMetaSchema = GlobalMetaSchema.extend({
  choices: ChoicesSchema.optional(),
  default: z.unknown().optional(),
  description: DescriptionSchema,
  group: z.string().optional(),
  hidden: z.boolean().optional(),
  title: TitleSchema,
  type: z.union([
    z.literal('array'),
    z.literal('count'),
    z.literal('boolean'),
    z.literal('number'),
    z.literal('string'),
  ]),
})

export type UsageMeta = z.infer<typeof UsageMetaSchema>

export function isUsageMeta(v: unknown): v is UsageMeta {
  return UsageMetaSchema.safeParse(v).success
}
