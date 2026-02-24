import { AddressRegEx } from '@xylabs/sdk-js'
import type { SchemaPayload } from '@xyo-network/sdk-js'
import {
  PayloadBuilder, payloadJsonSchema, SchemaSchema,
} from '@xyo-network/sdk-js'
import type { ChainStakeIntent } from '@xyo-network/xl1-protocol'
import { ChainStakeIntentSchema } from '@xyo-network/xl1-protocol'
import type { JSONSchemaType } from 'ajv'

export const ChainStakeIntentPayloadJsonSchema: JSONSchemaType<ChainStakeIntent> = {
  ...payloadJsonSchema,
  $id: 'https://schemas.xyo.network/2.0/payload/chain-stake-intent',
  additionalProperties: false,
  properties: {
    ...payloadJsonSchema.properties,
    from: { type: 'string', pattern: AddressRegEx.source },
    intent: { type: 'string', enum: ['producer'] },
    schema: { type: 'string', pattern: ChainStakeIntentSchema },
  },
  required: [...payloadJsonSchema.required, 'intent'],
  type: 'object',
}

export const ChainStakeIntentPayloadJsonSchemaPayload = new PayloadBuilder<SchemaPayload>({ schema: SchemaSchema })
  .fields({ definition: ChainStakeIntentPayloadJsonSchema }).build()
