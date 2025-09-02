import type { Promisable } from '@xylabs/promise'

import type {
  BridgeBack, BridgeComplete, BridgeRequest,
} from '../../payload/index.ts'

export interface BridgeViewInterface {
  completedBridgeBack(): Promisable<BridgeBack[]>
  completedBridgeRequests(): Promisable<[BridgeRequest, BridgeComplete][]>
  // the from field in these will be 0 since they have not been completed yet
  pendingBridgeBack(): Promisable<BridgeBack[]>
  pendingBridgeRequests(): Promisable<BridgeRequest[]>
}
