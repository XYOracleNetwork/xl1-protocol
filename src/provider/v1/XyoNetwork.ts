import type { Promisable } from '@xylabs/promise'

import type { NetworkStatus } from '#network'

export interface XyoNetwork {
  status(): Promisable<NetworkStatus>
}
