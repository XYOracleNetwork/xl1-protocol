import type { Payload, Schema } from '@xyo-network/payload-model'

import type { Provider, ProviderMoniker } from '../../provider/index.ts'

export type DataLakeData = Payload | ArrayBuffer

export interface DataLakeProvider<TMoniker extends ProviderMoniker = ProviderMoniker> extends Provider<TMoniker> {
  allowedSchemas?: Schema[]
  disallowedSchemas?: Schema[]
}
