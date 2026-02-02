import { type NetworkStakeViewerMethods, NetworkStakeViewerMoniker } from '@xyo-network/xl1-protocol'

import { NetworkStakeViewerRpcSchemas } from '../../../types/index.ts'
import { AbstractJsonRpcViewer } from '../JsonRpcViewer.ts'

export class JsonRpcNetworkStakeViewerMethods extends AbstractJsonRpcViewer<NetworkStakeViewerRpcSchemas> implements NetworkStakeViewerMethods {
  readonly moniker = NetworkStakeViewerMoniker
  async active(blockNumber?: number): Promise<[bigint, number]> {
    return (await this.transport.sendRequest('networkStakeViewer_active', [blockNumber]))
  }

  protected schemas() {
    return NetworkStakeViewerRpcSchemas
  }
}
