import { type NetworkStakeStepRewardsViewerMethods, NetworkStakeStepRewardsViewerMoniker } from '@xyo-network/xl1-protocol-sdk'

import { NetworkStakingStepRewardsViewerRpcSchemas } from '../../../types/index.ts'
import type { JsonRpcViewerParams } from '../JsonRpcViewer.ts'
import { AbstractJsonRpcViewer } from '../JsonRpcViewer.ts'

export interface JsonRpcNetworkStakingStepRewardsViewerMethodsParams extends JsonRpcViewerParams<NetworkStakingStepRewardsViewerRpcSchemas> {}

export class JsonRpcNetworkStakeStepRewardsViewerMethods<TParams extends
JsonRpcNetworkStakingStepRewardsViewerMethodsParams = JsonRpcNetworkStakingStepRewardsViewerMethodsParams> extends
  AbstractJsonRpcViewer<NetworkStakingStepRewardsViewerRpcSchemas, TParams> implements NetworkStakeStepRewardsViewerMethods {
  readonly moniker = NetworkStakeStepRewardsViewerMoniker
  protected schemas() {
    return NetworkStakingStepRewardsViewerRpcSchemas
  }
}
