import type { Address } from '@xylabs/sdk-js'
import { type StakeTotalsViewerMethods, StakeTotalsViewerMoniker } from '@xyo-network/xl1-protocol'

import { StakeTotalsViewerRpcSchemas } from '../../../types/index.ts'
import { AbstractJsonRpcViewer } from '../JsonRpcViewer.ts'

export class JsonRpcStakeTotalsViewerMethods extends AbstractJsonRpcViewer<StakeTotalsViewerRpcSchemas> implements StakeTotalsViewerMethods {
  readonly moniker = StakeTotalsViewerMoniker

  async active(time?: number): Promise<bigint> {
    return await this.transport.sendRequest('stakeTotalsViewer_active', [time])
  }

  async activeByStaked(staked: Address, time?: number): Promise<bigint> {
    return await this.transport.sendRequest('stakeTotalsViewer_activeByStaked', [staked, time])
  }

  async activeByStaker(address: Address, time?: number): Promise<bigint> {
    return await this.transport.sendRequest('stakeTotalsViewer_activeByStaker', [address, time])
  }

  async pending(time?: number): Promise<bigint> {
    return await this.transport.sendRequest('stakeTotalsViewer_pending', [time])
  }

  async pendingByStaker(staker: Address, time?: number): Promise<bigint> {
    return await this.transport.sendRequest('stakeTotalsViewer_pendingByStaker', [staker, time])
  }

  async withdrawn(time?: number): Promise<bigint> {
    return await this.transport.sendRequest('stakeTotalsViewer_withdrawn', [time])
  }

  async withdrawnByStaker(staker: Address, time?: number): Promise<bigint> {
    return await this.transport.sendRequest('stakeTotalsViewer_withdrawnByStaker', [staker, time])
  }

  protected schemas() {
    return StakeTotalsViewerRpcSchemas
  }
}
