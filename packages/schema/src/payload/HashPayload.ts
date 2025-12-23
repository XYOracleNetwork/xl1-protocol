import { HashRegEx } from '@xylabs/sdk-js'
import { PayloadBuilder } from '@xyo-network/payload-builder'
import { payloadJsonSchema } from '@xyo-network/payload-wrapper'
import type { SchemaPayload } from '@xyo-network/schema-payload-plugin'
import { SchemaSchema } from '@xyo-network/schema-payload-plugin'
import type { HashPayload } from '@xyo-network/xl1-protocol'
import { HashSchema } from '@xyo-network/xl1-protocol'
import type { JSONSchemaType } from 'ajv'

export const HashPayloadJsonSchema: JSONSchemaType<HashPayload> = {
  ...payloadJsonSchema,
  $id: 'https://schemas.xyo.network/2.0/payload/hash',
  additionalProperties: false,
  properties: {
    ...payloadJsonSchema.properties,
    hash: { type: 'string', pattern: HashRegEx.source },
    schema: { type: 'string', pattern: HashSchema },
  },
  required: [...payloadJsonSchema.required, 'hash'],
  type: 'object',
}

export const HashPayloadJsonSchemaPayload = new PayloadBuilder<SchemaPayload>({ schema: SchemaSchema })
  .fields({ definition: HashPayloadJsonSchema }).build()
