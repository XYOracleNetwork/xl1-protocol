import type { Promisable } from '@xylabs/sdk-js'
import type { NetworkStatus } from '@xyo-network/xl1-protocol'

export interface XyoNetwork {
  status(): Promisable<NetworkStatus>
}
