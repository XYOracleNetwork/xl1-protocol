import type { Promisable } from '@xylabs/sdk-js'

import type { NetworkStatus } from '../network/index.ts'

export interface XyoNetwork {
  status(): Promisable<NetworkStatus>
}
