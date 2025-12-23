import type { NetworkStatus } from '@xyo-network/xl1-protocol'
import { NetworkStatusSchema } from '@xyo-network/xl1-protocol'

export const unknownStatus: NetworkStatus = {
  description: 'Unknown Network Status',
  schema: NetworkStatusSchema,
  state: 'unknown',
}

export const errorStatus: NetworkStatus = {
  description: 'Error Fetching Network Status',
  schema: NetworkStatusSchema,
  state: 'unknown',
}
