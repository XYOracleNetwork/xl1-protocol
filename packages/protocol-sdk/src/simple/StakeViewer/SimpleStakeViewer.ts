import {
  type Address, asAddress, Promisable, toAddress,
} from '@xylabs/sdk-js'
import { assertEx } from '@xylabs/sdk-js'
import {
  Position, StakeEventsViewer, StakeEventsViewerMoniker, StakeViewer, StakeViewerMoniker,
} from '@xyo-network/xl1-protocol'

import {
  AbstractCreatableProvider, creatableProvider, CreatableProviderParams,
} from '../../CreatableProvider/index.ts'

export interface SimpleStakeViewerParams extends CreatableProviderParams {
  chainId?: Address
  minWithdrawalBlocks?: number
  positions: Position[]
}

@creatableProvider()
export class SimpleStakeViewer extends AbstractCreatableProvider<SimpleStakeViewerParams> implements StakeViewer {
  static readonly defaultMoniker = StakeViewerMoniker
  static readonly dependencies = [StakeEventsViewerMoniker]
  static readonly monikers = [StakeViewerMoniker]
  moniker = SimpleStakeViewer.defaultMoniker

  private _chainStakeEventsViewer: StakeEventsViewer | undefined

  get stakeEvents() {
    return assertEx(this._chainStakeEventsViewer, () => 'Stake events viewer not set')
  }

  protected get positions() {
    return this.params.positions
  }

  async active(): Promise<bigint> {
    let active = 0n
    const positions = await this.activeStakes()
    for (const position of positions) {
      if (position.removeBlock === 0) {
        active += position.amount
      }
    }
    return active
  }

  async activeByAddressStaked(staked: Address) {
    let active = 0n
    const positions = await this.activeStakes()
    for (const position of positions) {
      if (position.removeBlock === 0 && asAddress(position.staked) === asAddress(staked)) {
        active += position.amount
      }
    }
    return active
  }

  async activeByStaker(staker: Address): Promise<bigint> {
    let active = 0n
    const positions = await this.activeStakes()
    for (const position of positions) {
      if (position.removeBlock === 0 && asAddress(position.staker) === asAddress(staker)) {
        active += position.amount
      }
    }
    return active
  }

  activeStakes(): Promisable<Position[]> {
    return this.positions.filter(s => (s.withdrawBlock === 0) && (s.removeBlock === 0))
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

  async pending() {
    let pending = 0n
    const positions = await this.removedStakes()
    for (const position of positions) {
      if (position.removeBlock !== 0 && position.withdrawBlock === 0) {
        pending += position.amount
      }
    }
    return pending
  }

  async pendingByStaker(staker: Address) {
    let pending = 0n
    const positions = await this.removedStakes()
    for (const position of positions) {
      if (position.removeBlock !== 0 && position.withdrawBlock === 0 && asAddress(position.staker) === asAddress(staker)) {
        pending += position.amount
      }
    }
    return pending
  }

  removedStakes(): Promisable<Position[]> {
    return this.positions.filter(s => (s.withdrawBlock === 0) && (s.removeBlock !== 0))
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

  async withdrawn() {
    let withdrawn = 0n
    const positions = await this.withdrawnStakes()
    for (const position of positions) {
      if (position.withdrawBlock !== 0) {
        withdrawn += position.amount
      }
    }
    return withdrawn
  }

  async withdrawnByStaker(staker: Address) {
    let withdrawn = 0n
    const positions = await this.withdrawnStakes()
    for (const position of positions) {
      if (position.withdrawBlock !== 0 && asAddress(position.staker) === asAddress(staker)) {
        withdrawn += position.amount
      }
    }
    return withdrawn
  }

  withdrawnStakes(): Promisable<Position[]> {
    return this.positions.filter(s => (s.withdrawBlock !== 0))
  }
}
