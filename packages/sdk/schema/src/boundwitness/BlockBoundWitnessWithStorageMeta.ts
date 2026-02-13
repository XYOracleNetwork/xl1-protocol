import { BoundWitnessSchema } from '@xyo-network/boundwitness-model'
import type { WithStorageMeta } from '@xyo-network/payload-model'
import type { SchemaPayload } from '@xyo-network/schema-payload-plugin'
import { SchemaSchema } from '@xyo-network/schema-payload-plugin'
import {
  boundWitnessJsonSchema, boundWitnessProperties, PayloadBuilder,
} from '@xyo-network/sdk-js'
import type { BlockBoundWitness } from '@xyo-network/xl1-protocol'
import type { JSONSchemaType } from 'ajv'

import { StorageMetaJsonSchema } from '../StorageMeta.ts'
import { BlockBoundWitnessJsonSchema } from './BlockBoundWitness.ts'

export const BlockBoundWitnessWithStorageMetaJsonSchema: JSONSchemaType<WithStorageMeta<BlockBoundWitness>> = {
  $id: 'https://schemas.xyo.network/2.0/block-with-storage-meta',
  properties: {
    ...boundWitnessProperties,
    ...BlockBoundWitnessJsonSchema.properties,
    ...StorageMetaJsonSchema.properties,
    schema: { type: 'string', pattern: BoundWitnessSchema },
  },
  required: [...new Set([...boundWitnessJsonSchema.required, ...BlockBoundWitnessJsonSchema.required, ...StorageMetaJsonSchema.required])],
  type: 'object',
} as const

export const BlockBoundWitnessWithStorageMetaSchemaPayload = new PayloadBuilder<SchemaPayload>({ schema: SchemaSchema })
  .fields({ definition: BlockBoundWitnessWithStorageMetaJsonSchema }).build()
