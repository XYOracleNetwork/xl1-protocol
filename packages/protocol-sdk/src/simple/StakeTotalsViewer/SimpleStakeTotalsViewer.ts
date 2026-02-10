import { type Address, asAddress } from '@xylabs/sdk-js'
import { assertEx } from '@xylabs/sdk-js'
import {
  StakeTotalsViewer, StakeTotalsViewerMoniker,
  StakeViewer,
  StakeViewerMoniker,
} from '@xyo-network/xl1-protocol'

import {
  AbstractCreatableProvider, creatableProvider, CreatableProviderParams,
} from '../../CreatableProvider/index.ts'

export interface SimpleStakeTotalsViewerParams extends CreatableProviderParams {

}

@creatableProvider()
export class SimpleStakeTotalsViewer extends AbstractCreatableProvider<SimpleStakeTotalsViewerParams> implements StakeTotalsViewer {
  static readonly defaultMoniker = StakeTotalsViewerMoniker
  static readonly dependencies = [StakeTotalsViewerMoniker]
  static readonly monikers = [StakeTotalsViewerMoniker]
  moniker = SimpleStakeTotalsViewer.defaultMoniker

  private _stakeViewer!: StakeViewer

  get stakeViewer() {
    return this._stakeViewer
  }

  async active(time = Number.MAX_SAFE_INTEGER) {
    let active = 0n
    const positions = await this.stakeViewer.activeStakes()
    for (const position of positions) {
      if (position.removeBlock === 0 || position.removeBlock > time) {
        active += position.amount
      }
    }
    return active
  }

  async activeByStaked(staked: Address, time = Number.MAX_SAFE_INTEGER) {
    let active = 0n
    const positions = await this.stakeViewer.activeStakes()
    for (const position of positions) {
      if ((position.removeBlock === 0 || position.removeBlock > time) && asAddress(position.staked) === asAddress(staked)) {
        active += position.amount
      }
    }
    return active
  }

  async activeByStaker(staker: Address, time = Number.MAX_SAFE_INTEGER) {
    let active = 0n
    const positions = await this.stakeViewer.activeStakes()
    for (const position of positions) {
      if ((position.removeBlock === 0 || position.removeBlock > time) && asAddress(position.staker) === asAddress(staker)) {
        active += position.amount
      }
    }
    return active
  }

  override async createHandler() {
    await super.createHandler()
    this._stakeViewer = assertEx(
      (await this.locateAndCreate<StakeViewer>(StakeViewerMoniker)),
      () => 'Failed to create StakeViewer',
    )
  }

  async pending(time = Number.MAX_SAFE_INTEGER): Promise<bigint> {
    let pending = 0n
    const positions = await this.stakeViewer.removedStakes()
    for (const position of positions) {
      if ((position.removeBlock !== 0 && position.removeBlock <= time) && (position.withdrawBlock === 0 || position.withdrawBlock > time)) {
        pending += position.amount
      }
    }
    return pending
  }

  async pendingByStaker(staker: Address, time = Number.MAX_SAFE_INTEGER) {
    let pending = 0n
    const positions = await this.stakeViewer.removedStakes()
    for (const position of positions) {
      if ((position.removeBlock !== 0 && position.removeBlock <= time) && (position.withdrawBlock === 0 || position.withdrawBlock > time) && asAddress(position.staker) === asAddress(staker)) {
        pending += position.amount
      }
    }
    return pending
  }

  async withdrawn(time = Number.MAX_SAFE_INTEGER): Promise<bigint> {
    let withdrawn = 0n
    const positions = await this.stakeViewer.withdrawnStakes()
    for (const position of positions) {
      if (position.withdrawBlock !== 0 && position.withdrawBlock <= time) {
        withdrawn += position.amount
      }
    }
    return withdrawn
  }

  async withdrawnByStaker(staker: Address, time = Number.MAX_SAFE_INTEGER): Promise<bigint> {
    let withdrawn = 0n
    const positions = await this.stakeViewer.withdrawnStakes()
    for (const position of positions) {
      if (position.withdrawBlock !== 0 && position.withdrawBlock <= time && asAddress(position.staker) === asAddress(staker)) {
        withdrawn += position.amount
      }
    }
    return withdrawn
  }
}
