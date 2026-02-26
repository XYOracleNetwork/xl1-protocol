import { Promisable } from '@xylabs/sdk-js'
import {
  Position,
  StakeEventsViewer, StakeEventsViewerMoniker, StakeTotalsViewerMoniker,
  StakeViewer,
  StakeViewerMoniker,
} from '@xyo-network/xl1-protocol'
import { creatableProvider } from '@xyo-network/xl1-protocol-sdk'

import { JsonRpcStakeViewerMethods } from './JsonRpcStakeViewerMethods.ts'

@creatableProvider()
export class JsonRpcStakeViewer extends JsonRpcStakeViewerMethods implements StakeViewer {
  static readonly defaultMoniker = StakeViewerMoniker
  static readonly dependencies = []
  static readonly monikers = [StakeViewerMoniker]

  protected _stakeEvents!: StakeEventsViewer

  get stakeEvents() {
    return this._stakeEvents
  }

  activeStakes(): Promisable<Position[]> {
    return []
  }

  override async createHandler() {
    await super.createHandler()
    this._stakeEvents = await this.locator.getInstance<StakeEventsViewer>(StakeEventsViewerMoniker)
  }

  removedStakes(): Promisable<Position[]> {
    return []
  }

  withdrawnStakes(): Promisable<Position[]> {
    return []
  }
}
