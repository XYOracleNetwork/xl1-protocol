import { AddressRegEx, HashRegEx } from '@xylabs/sdk-js'
import type { SchemaPayload } from '@xyo-network/sdk-js'
import {
  boundWitnessJsonSchema, boundWitnessProperties, BoundWitnessSchema,
  PayloadBuilder, SchemaSchema,
} from '@xyo-network/sdk-js'
import type { BlockBoundWitness } from '@xyo-network/xl1-protocol'
import type { JSONSchemaType } from 'ajv'

export const BlockBoundWitnessJsonSchema: JSONSchemaType<BlockBoundWitness> = {
  ...boundWitnessJsonSchema,
  $id: 'https://schemas.xyo.network/2.0/block',
  properties: {
    ...boundWitnessProperties,
    block: { type: 'integer' },
    chain: { type: 'string', pattern: AddressRegEx.source },
    previous: {
      type: 'string', pattern: HashRegEx.source, nullable: true,
    },
    step_hashes: {
      items: { type: 'string', pattern: HashRegEx.source },
      type: 'array',
    },
    $epoch: { type: 'integer' },
    schema: { type: 'string', pattern: BoundWitnessSchema },
  },
  required: [...boundWitnessJsonSchema.required, 'block', 'chain', 'step_hashes', 'previous', '$epoch'],
  type: 'object',
} as const

export const BlockBoundWitnessSchemaPayload = new PayloadBuilder<SchemaPayload>({ schema: SchemaSchema })
  .fields({ definition: BlockBoundWitnessJsonSchema }).build()
