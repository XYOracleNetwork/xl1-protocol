import { isDefined } from '@xylabs/sdk-js'

import {
  AbstractCreatableProvider, creatableProvider, CreatableProviderParams,
} from '../../CreatableProvider/index.ts'
import { Position } from '../../model/index.ts'
import {
  StakeEvent, StakeEventFilter, StakeEventName, StakeEventsViewer,
  StakeEventsViewerMoniker,
} from '../../viewers/index.ts'

export interface SimpleStakeEventsParams extends CreatableProviderParams {
  positions: Position[]
}

@creatableProvider()
export class SimpleStakeEventsViewer extends AbstractCreatableProvider<SimpleStakeEventsParams> implements StakeEventsViewer {
  static readonly defaultMoniker = StakeEventsViewerMoniker
  static readonly dependencies = []
  static readonly monikers = [StakeEventsViewerMoniker]
  moniker = SimpleStakeEventsViewer.defaultMoniker

  protected get positions() {
    return this.params.positions
  }

  positionCount(range: [number, number | 'latest']): number {
    return this.positionsFromRange(range).length
  }

  stakeEvents<TName extends StakeEventName>(range: [number, number | 'latest'], { name }: StakeEventFilter<TName> = {}): StakeEvent<TName>[] {
    const positions = this.positionsFromRange(range)
    const events = this.eventsFromPositions(positions)
    if (isDefined(name)) {
      return events.filter((event): event is StakeEvent<TName> => event.name === name)
    }
    return events as StakeEvent<TName>[]
  }

  protected override async startHandler(): Promise<void> {
    await super.startHandler()
  }

  private eventsFromPositions(positions: Position[]): StakeEvent<StakeEventName>[] {
    const events = positions.map((position) => {
      const events: StakeEvent<StakeEventName>[] = [{
        name: 'StakeAdded',
        time: position.addBlock,
        args: {
          staker: position.staker,
          staked: position.staked,
          amount: position.amount,
          id: position.id,
        },
      }]
      if (position.removeBlock !== 0) {
        events.push({
          name: 'StakeRemoved',
          time: position.removeBlock,
          args: {
            staker: position.staker,
            staked: position.staked,
            amount: position.amount,
            id: position.id,
          },
        })
      }
      if (position.withdrawBlock !== 0) {
        events.push({
          name: 'StakeWithdrawn',
          time: position.withdrawBlock,
          args: {
            staker: position.staker,
            staked: position.staked,
            amount: position.amount,
            id: position.id,
          },
        })
      }
      return events
    })
    return events.flat()
  }

  private positionsFromRange(range: [number, number | 'latest']): Position[] {
    const startBlock = range[0]
    const endBlock = range[1] === 'latest' ? Number.MAX_SAFE_INTEGER : range[1]
    const filteredPositions = this.positions?.filter((position) => {
      return position.addBlock <= endBlock && (position.removeBlock === 0 || position.removeBlock >= startBlock)
    }) ?? []
    return filteredPositions
  }
}
