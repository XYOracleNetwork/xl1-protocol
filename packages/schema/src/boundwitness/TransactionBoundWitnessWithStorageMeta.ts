import { AddressRegEx } from '@xylabs/sdk-js'
import { BoundWitnessSchema } from '@xyo-network/boundwitness-model'
import type { SchemaPayload } from '@xyo-network/schema-payload-plugin'
import { SchemaSchema } from '@xyo-network/schema-payload-plugin'
import {
  boundWitnessJsonSchema, PayloadBuilder, Uint256RegEx,
} from '@xyo-network/sdk-js'
import type { TransactionBoundWitness } from '@xyo-network/xl1-protocol'
import type { JSONSchemaType } from 'ajv'

import { StorageMetaJsonSchema } from '../StorageMeta.ts'

export const TransactionBoundWitnessWithStorageMetaJsonSchema: JSONSchemaType<TransactionBoundWitness> = {
  ...boundWitnessJsonSchema,
  $id: 'https://schemas.xyo.network/2.0/transaction-with-storage-meta',
  additionalProperties: false,
  properties: {
    ...boundWitnessJsonSchema.properties,
    ...StorageMetaJsonSchema.properties,
    chain: { type: 'string', pattern: AddressRegEx.source },
    gas: { type: 'string', pattern: Uint256RegEx.source },
    nbf: { type: 'integer' },
    exp: { type: 'integer' },
    schema: { type: 'string', pattern: BoundWitnessSchema },
  },
  required: [...boundWitnessJsonSchema.required, ...StorageMetaJsonSchema.required, 'chain', 'gas', 'nbf', 'exp'],
  type: 'object',
} as const

export const TransactionBoundWitnessWithStorageMetaSchemaPayload = new PayloadBuilder<SchemaPayload>({ schema: SchemaSchema })
  .fields({ definition: TransactionBoundWitnessWithStorageMetaJsonSchema }).build()
