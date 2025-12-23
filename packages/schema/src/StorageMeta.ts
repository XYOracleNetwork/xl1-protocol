import { HashRegEx, HexRegEx } from '@xylabs/sdk-js'
import type { StorageMeta } from '@xyo-network/payload-model'
import type { JSONSchemaType } from 'ajv'

export const StorageMetaJsonSchema: JSONSchemaType<StorageMeta> = {
  $id: 'https://schemas.xyo.network/2.0/storage-meta',
  properties: {
    _sequence: { type: 'string', pattern: HexRegEx.source },
    _hash: { type: 'string', pattern: HashRegEx.source },
    _dataHash: { type: 'string', pattern: HashRegEx.source },
  },
  required: ['_sequence', '_hash', '_dataHash'],
  type: 'object',
} as const
