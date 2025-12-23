import type { Address } from '@xylabs/sdk-js'
import { type StakeTotalsViewerMethods, StakeTotalsViewerMoniker } from '@xyo-network/xl1-protocol-sdk'

import { StakeTotalsViewerRpcSchemas } from '../../../types/index.ts'
import { AbstractJsonRpcViewer } from '../JsonRpcViewer.ts'

export class JsonRpcStakeTotalsViewerMethods extends AbstractJsonRpcViewer<StakeTotalsViewerRpcSchemas> implements StakeTotalsViewerMethods {
  readonly moniker = StakeTotalsViewerMoniker

  async active(): Promise<bigint> {
    return await this.transport.sendRequest('stakeTotalsViewer_active', [])
  }

  async activeByStaked(staked: Address): Promise<bigint> {
    return await this.transport.sendRequest('stakeTotalsViewer_activeByStaked', [staked])
  }

  async activeByStaker(address: Address): Promise<bigint> {
    return await this.transport.sendRequest('stakeTotalsViewer_activeByStaker', [address])
  }

  async pending(): Promise<bigint> {
    return await this.transport.sendRequest('stakeTotalsViewer_pending', [])
  }

  async pendingByStaker(staker: Address): Promise<bigint> {
    return await this.transport.sendRequest('stakeTotalsViewer_pendingByStaker', [staker])
  }

  async withdrawn(): Promise<bigint> {
    return await this.transport.sendRequest('stakeTotalsViewer_withdrawn', [])
  }

  async withdrawnByStaker(staker: Address): Promise<bigint> {
    return await this.transport.sendRequest('stakeTotalsViewer_withdrawnByStaker', [staker])
  }

  protected schemas() {
    return StakeTotalsViewerRpcSchemas
  }
}
