import type { BlockViewerMethods } from '@xyo-network/xl1-protocol'

import type { BlockViewerRpcMethodHandlers } from '../types/index.ts'

export const rpcMethodHandlersFromBlockViewer = (viewer: BlockViewerMethods): BlockViewerRpcMethodHandlers => {
  return {
    blockViewer_blocksByHash: params => viewer.blocksByHash(...params ?? []),
    blockViewer_blocksByNumber: params => viewer.blocksByNumber(...params ?? []),
    blockViewer_currentBlock: params => viewer.currentBlock(...params ?? []),
    blockViewer_payloadsByHash: params => viewer.payloadsByHash(...params ?? []),
    blockViewer_rate: params => viewer.rate(...params ?? []),
    blockViewer_stepSizeRate: params => viewer.stepSizeRate(...params ?? []),
    blockViewer_timeDurationRate: params => viewer.timeDurationRate(...params ?? []),
  }
}
