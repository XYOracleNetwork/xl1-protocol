import type { FinalizationViewerMethods, SignedHydratedBlockWithHashMeta } from '@xyo-network/xl1-protocol'
import { FinalizationViewerMoniker } from '@xyo-network/xl1-protocol'

import { FinalizationViewerRpcSchemas } from '../../../types/index.ts'
import { AbstractJsonRpcViewer } from '../JsonRpcViewer.ts'

export class JsonRpcFinalizationViewerMethods extends AbstractJsonRpcViewer<FinalizationViewerRpcSchemas> implements FinalizationViewerMethods {
  readonly moniker = FinalizationViewerMoniker

  async head(): Promise<SignedHydratedBlockWithHashMeta> {
    const result = await this.transport.sendRequest(
      'finalizationViewer_head',
      [],
    )
    return result
  }

  protected schemas() {
    return FinalizationViewerRpcSchemas
  }
}
