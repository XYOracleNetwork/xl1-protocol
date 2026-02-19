import type { Hash, Promisable } from '@xylabs/sdk-js'
import type { Schema } from '@xyo-network/sdk-js'

export interface SchemasProvider {
  schema(head: Hash, schema: Schema): Promisable<number>
  schemas(head: Hash, schemas: Schema[]): Promisable<Partial<Record<Schema, number>>>
}

export interface SchemasService extends SchemasProvider {}
