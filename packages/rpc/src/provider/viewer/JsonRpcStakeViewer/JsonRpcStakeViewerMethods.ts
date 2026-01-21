import type { Address } from '@xylabs/sdk-js'
import type { StakeViewerMethods } from '@xyo-network/xl1-protocol-sdk'
import { StakeViewerMoniker } from '@xyo-network/xl1-protocol-sdk'

import { StakeViewerRpcSchemas } from '../../../types/index.ts'
import { AbstractJsonRpcViewer } from '../JsonRpcViewer.ts'

export class JsonRpcStakeViewerMethods extends AbstractJsonRpcViewer<StakeViewerRpcSchemas> implements StakeViewerMethods {
  readonly moniker = StakeViewerMoniker

  async active(time?: number) {
    return await this.transport.sendRequest('stakeViewer_active', [time])
  }

  async activeByAddressStaked(address: Address, time?: number) {
    return await this.transport.sendRequest('stakeViewer_activeByAddressStaked', [address, time])
  }

  async activeByStaker(address: Address, time?: number) {
    return await this.transport.sendRequest('stakeViewer_activeByStaker', [address, time])
  }

  async minWithdrawalBlocks() {
    return await this.transport.sendRequest('stakeViewer_minWithdrawalBlocks', [])
  }

  async pending(time?: number) {
    return await this.transport.sendRequest('stakeViewer_pending', [time])
  }

  async pendingByStaker(staker: Address, time?: number) {
    return await this.transport.sendRequest('stakeViewer_pendingByStaker', [staker, time])
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

  async withdrawn(time?: number) {
    return await this.transport.sendRequest('stakeViewer_withdrawn', [time])
  }

  async withdrawnByStaker(staker: string, time?: number) {
    return await this.transport.sendRequest('stakeViewer_withdrawnByStaker', [staker, time])
  }

  protected schemas() {
    return StakeViewerRpcSchemas
  }
}
