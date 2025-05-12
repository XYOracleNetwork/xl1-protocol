import type { Promisable } from '@xylabs/promise'
import { NetworkStatus } from '../network/index.ts'

export interface XyoNetwork {
  status(): Promisable<NetworkStatus>
}
