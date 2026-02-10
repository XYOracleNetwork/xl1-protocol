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
  static readonly monikers = [StakeTotalsViewerMoniker]

  protected _stakeEvents!: StakeEventsViewer

  get stakeEvents() {
    return this._stakeEvents
  }

  activeStakes(): Promisable<Position[]> {
    throw new Error('Method not implemented.')
  }

  override async createHandler() {
    await super.createHandler()
    this._stakeEvents = await this.locator.getInstance<StakeEventsViewer>(StakeEventsViewerMoniker)
  }

  removedStakes(): Promisable<Position[]> {
    throw new Error('Method not implemented.')
  }

  withdrawnStakes(): Promisable<Position[]> {
    throw new Error('Method not implemented.')
  }
}
