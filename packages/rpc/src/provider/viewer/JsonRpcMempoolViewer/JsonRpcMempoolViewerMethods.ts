import type {
  MempoolViewerMethods, PendingBlocksOptions, PendingTransactionsOptions, SignedHydratedBlockWithHashMeta, SignedHydratedTransactionWithHashMeta,
} from '@xyo-network/xl1-protocol'
import { MempoolViewerMoniker } from '@xyo-network/xl1-protocol'

import { MempoolViewerRpcSchemas } from '../../../types/index.ts'
import { AbstractJsonRpcViewer } from '../JsonRpcViewer.ts'

export class JsonRpcMempoolViewerMethods extends AbstractJsonRpcViewer<MempoolViewerRpcSchemas> implements MempoolViewerMethods {
  readonly moniker = MempoolViewerMoniker
  async pendingBlocks(options?: PendingBlocksOptions): Promise<SignedHydratedBlockWithHashMeta[]> {
    const result = await this.transport.sendRequest(
      'mempoolViewer_pendingBlocks',
      options ? [options] : [],
    )
    return result
  }

  async pendingTransactions(options?: PendingTransactionsOptions): Promise<SignedHydratedTransactionWithHashMeta[]> {
    const result = await this.transport.sendRequest(
      'mempoolViewer_pendingTransactions',
      options ? [options] : [],
    )
    return result
  }

  protected schemas() {
    return MempoolViewerRpcSchemas
  }
}
