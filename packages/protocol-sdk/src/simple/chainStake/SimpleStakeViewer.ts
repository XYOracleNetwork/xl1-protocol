import {
  type Address, asAddress, toAddress,
} from '@xylabs/sdk-js'
import { assertEx } from '@xylabs/sdk-js'

import {
  AbstractCreatableProvider, creatableProvider, CreatableProviderParams,
} from '../../CreatableProvider/index.ts'
import {
  PayloadMap, Position,
  StakeEventsViewer, StakeEventsViewerMoniker, StakeViewer, StakeViewerMoniker,
} from '../../model/index.ts'

export interface SimpleChainStakeParams extends CreatableProviderParams {
  chainId?: Address
  chainMap: PayloadMap
  minWithdrawalBlocks?: number
  positions: Position[]
}

@creatableProvider()
export class SimpleStakeViewer extends AbstractCreatableProvider<SimpleChainStakeParams> implements StakeViewer {
  static readonly defaultMoniker = StakeViewerMoniker
  static readonly dependencies = [StakeEventsViewerMoniker]
  static readonly monikers = [StakeViewerMoniker]
  moniker = SimpleStakeViewer.defaultMoniker

  private _chainStakeEventsViewer: StakeEventsViewer | undefined

  get stakeEvents() {
    return assertEx(this._chainStakeEventsViewer, () => 'Stake events viewer not set')
  }

  protected get chainMap() {
    return this.params.chainMap
  }

  protected get positions() {
    return this.params.positions
  }

  active(): bigint {
    let active = 0n
    for (const position of this.positions) {
      if (position.removeBlock === 0) {
        active += position.amount
      }
    }
    return active
  }

  activeByAddressStaked(staked: Address): bigint {
    let active = 0n
    for (const position of this.positions) {
      if (position.removeBlock === 0 && asAddress(position.staked) === asAddress(staked)) {
        active += position.amount
      }
    }
    return active
  }

  activeByStaker(staker: Address): bigint {
    let active = 0n
    for (const position of this.positions) {
      if (position.removeBlock === 0 && asAddress(position.staker) === asAddress(staker)) {
        active += position.amount
      }
    }
    return active
  }

  override async createHandler() {
    await super.createHandler()
    this._chainStakeEventsViewer = assertEx(
      (await this.locateAndCreate<StakeEventsViewer>(StakeEventsViewerMoniker)),
      () => 'Failed to create StakeEventsViewer',
    )
  }

  minWithdrawalBlocks(): number {
    return this.params.minWithdrawalBlocks ?? 10
  }

  pending(): bigint {
    let pending = 0n
    for (const position of this.positions) {
      if (position.removeBlock !== 0 && position.withdrawBlock === 0) {
        pending += position.amount
      }
    }
    return pending
  }

  pendingByStaker(staker: Address): bigint {
    let pending = 0n
    for (const position of this.positions) {
      if (position.removeBlock !== 0 && position.withdrawBlock === 0 && asAddress(position.staker) === asAddress(staker)) {
        pending += position.amount
      }
    }
    return pending
  }

  rewardsContract(): Address {
    return toAddress(toAddress(1n))
  }

  stakeById(id: number): Position {
    return assertEx(this.positions[id], () => new Error(`Stake with id ${id} not found`))
  }

  stakeByStaker(staker: Address, slot: number): Position {
    return this.positions.filter(s => asAddress(s.staker) === asAddress(staker))[slot]
  }

  stakesByStaked(staked: Address, range: [number, number | undefined] = [0, undefined]): Position[] {
    const endBlock = (range[1] ?? Number.MAX_SAFE_INTEGER)
    return this.positions.filter(s => asAddress(s.staked) === asAddress(staked) && s.addBlock <= endBlock && s.removeBlock <= endBlock)
  }

  stakesByStaker(staker: Address, range: [number, number | undefined] = [0, undefined]): Position[] {
    const endBlock = (range[1] ?? Number.MAX_SAFE_INTEGER)
    return this.positions.filter(s => asAddress(s.staker) === asAddress(staker) && s.addBlock <= endBlock && s.removeBlock <= endBlock)
  }

  stakingTokenAddress(): Address {
    return toAddress('0x000000000000000000000000000011')
  }

  withdrawn(): bigint {
    let withdrawn = 0n
    for (const position of this.positions) {
      if (position.withdrawBlock !== 0) {
        withdrawn += position.amount
      }
    }
    return withdrawn
  }

  withdrawnByStaker(staker: Address): bigint {
    let withdrawn = 0n
    for (const position of this.positions) {
      if (position.withdrawBlock !== 0 && asAddress(position.staker) === asAddress(staker)) {
        withdrawn += position.amount
      }
    }
    return withdrawn
  }
}
