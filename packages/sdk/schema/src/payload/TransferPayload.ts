import { AddressRegEx } from '@xylabs/sdk-js'
import type { SchemaPayload } from '@xyo-network/schema-payload-plugin'
import { SchemaSchema } from '@xyo-network/schema-payload-plugin'
import {
  PayloadBuilder, payloadJsonSchema, Uint256RegEx,
} from '@xyo-network/sdk-js'
import type { Transfer } from '@xyo-network/xl1-protocol'
import { TransferSchema } from '@xyo-network/xl1-protocol'
import type { JSONSchemaType } from 'ajv'

export const TransferPayloadJsonSchema: JSONSchemaType<Transfer> = {
  ...payloadJsonSchema,
  $id: 'https://schemas.xyo.network/2.0/payload/transfer',
  additionalProperties: false,
  properties: {
    ...payloadJsonSchema.properties,
    from: { type: 'string', pattern: AddressRegEx.source },
    epoch: { type: 'number' },
    transfers: {
      type: 'object',
      propertyNames: { pattern: AddressRegEx.source },
      patternProperties: { [AddressRegEx.source]: { type: 'string', pattern: Uint256RegEx.source } },
    },
    schema: { type: 'string', pattern: TransferSchema },
  },
  required: [...payloadJsonSchema.required, 'transfers', 'epoch'],
  type: 'object',
}

export const TransferPayloadJsonSchemaPayload = new PayloadBuilder<SchemaPayload>({ schema: SchemaSchema })
  .fields({ definition: TransferPayloadJsonSchema }).build()
