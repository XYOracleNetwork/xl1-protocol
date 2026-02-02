import type { Address } from '@xylabs/sdk-js'
import type { StakeEvent, StakeEventsViewer } from '@xyo-network/xl1-protocol'

export async function mergedAddRemoveStakeEventsByStaker(
  chainEvents: StakeEventsViewer,
  range: [number, number],
  staked: Address,
  staker?: Address,
): Promise<(StakeEvent<'StakeAdded'> | StakeEvent<'StakeRemoved'>)[]> {
  const [addedEvents, removedEvents] = await Promise.all([
    chainEvents.stakeEvents(range, { name: 'StakeAdded', args: { staked, staker } }),
    chainEvents.stakeEvents(range, { name: 'StakeRemoved', args: { staked, staker } }),
  ])
  const result = [...addedEvents, ...removedEvents].toSorted((a, b) => a.time - b.time)
  return result
}
