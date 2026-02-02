import type { StakeEvent, StakeEventsViewer } from '@xyo-network/xl1-protocol'

export async function mergedAddRemoveStakeEventsByPosition(
  chainEvents: StakeEventsViewer,
  range: [number, number],
  position?: number,
): Promise<(StakeEvent<'StakeAdded'> | StakeEvent<'StakeRemoved'>)[]> {
  const [addedEvents, removedEvents] = await Promise.all([
    chainEvents.stakeEvents(range, { name: 'StakeAdded', args: { id: position } }),
    chainEvents.stakeEvents(range, { name: 'StakeRemoved', args: { id: position } }),
  ])
  const result = [...addedEvents, ...removedEvents].toSorted((a, b) => a.time - b.time)
  return result
}
