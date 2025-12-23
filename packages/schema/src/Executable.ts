import type { Executable } from '@xyo-network/xl1-protocol'
import type { JSONSchemaType } from 'ajv'

export const ExecutableJsonSchema: JSONSchemaType<Executable> = {
  $id: 'https://schemas.xyo.network/2.0/executable',
  additionalProperties: true,
  properties: { script: { items: { type: 'string', pattern: String.raw`^elevate\|` }, type: 'array' } },
  required: ['script'],
  type: 'object',
} as const
