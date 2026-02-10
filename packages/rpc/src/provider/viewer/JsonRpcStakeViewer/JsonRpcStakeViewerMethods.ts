import type { Address } from '@xylabs/sdk-js'
import type { StakeViewerMethods } from '@xyo-network/xl1-protocol'
import { StakeViewerMoniker } from '@xyo-network/xl1-protocol'

import { StakeViewerRpcSchemas } from '../../../types/index.ts'
import { AbstractJsonRpcViewer } from '../JsonRpcViewer.ts'

export class JsonRpcStakeViewerMethods extends AbstractJsonRpcViewer<StakeViewerRpcSchemas> implements StakeViewerMethods {
  readonly moniker = StakeViewerMoniker

  async minWithdrawalBlocks() {
    return await this.transport.sendRequest('stakeViewer_minWithdrawalBlocks', [])
  }

  async rewardsContract() {
    return await this.transport.sendRequest('stakeViewer_rewardsContract', [])
  }

  async stakeById(id: number) {
    return await this.transport.sendRequest('stakeViewer_stakeById', [id])
  }

  async stakeByStaker(staker: Address, slot: number) {
    return await this.transport.sendRequest('stakeViewer_stakeByStaker', [staker, slot])
  }

  async stakesByStaked(staked: Address) {
    return await this.transport.sendRequest('stakeViewer_stakesByStaked', [staked])
  }

  async stakesByStaker(staker: Address) {
    return await this.transport.sendRequest('stakeViewer_stakesByStaker', [staker])
  }

  async stakingTokenAddress() {
    return await this.transport.sendRequest('stakeViewer_stakingTokenAddress', [])
  }

  protected schemas() {
    return StakeViewerRpcSchemas
  }
}
