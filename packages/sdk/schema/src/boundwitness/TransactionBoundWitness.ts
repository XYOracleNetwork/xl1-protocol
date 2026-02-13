import { AddressRegEx } from '@xylabs/sdk-js'
import { BoundWitnessSchema } from '@xyo-network/boundwitness-model'
import type { SchemaPayload } from '@xyo-network/schema-payload-plugin'
import { SchemaSchema } from '@xyo-network/schema-payload-plugin'
import {
  boundWitnessJsonSchema, PayloadBuilder, Uint256RegEx,
} from '@xyo-network/sdk-js'
import type { TransactionBoundWitness } from '@xyo-network/xl1-protocol'
import type { JSONSchemaType } from 'ajv'

import { ExecutableJsonSchema } from '../Executable.ts'

export const TransactionBoundWitnessJsonSchema: JSONSchemaType<TransactionBoundWitness> = {
  ...boundWitnessJsonSchema,
  $id: 'https://schemas.xyo.network/2.0/transaction',
  additionalProperties: false,
  properties: {
    ...boundWitnessJsonSchema.properties,
    ...ExecutableJsonSchema.properties,
    chain: { type: 'string', pattern: AddressRegEx.source },
    fees: {
      type: 'object',
      properties: {
        base: { type: 'string', pattern: Uint256RegEx.source },
        gasLimit: { type: 'string', pattern: Uint256RegEx.source },
        gasPrice: { type: 'string', pattern: Uint256RegEx.source },
        priority: { type: 'string', pattern: Uint256RegEx.source },
      },
      required: ['base'],
      additionalProperties: false,
    },
    from: { type: 'string', pattern: AddressRegEx.source },
    nbf: { type: 'integer' },
    exp: { type: 'integer' },
    schema: { type: 'string', pattern: BoundWitnessSchema },
  },
  required: [...boundWitnessJsonSchema.required, 'chain', 'fees', 'nbf', 'exp'],
  type: 'object',
} as const

export const TransactionBoundWitnessSchemaPayload = new PayloadBuilder<SchemaPayload>({ schema: SchemaSchema })
  .fields({ definition: TransactionBoundWitnessJsonSchema }).build()
