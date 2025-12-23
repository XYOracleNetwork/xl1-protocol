import { isUndefined } from '@xylabs/sdk-js'

import type { StakeEventsViewer } from '../../viewers/index.ts'
import { mergedAddRemoveStakeEventsByPosition } from './mergedAddRemoveStakeEventsByPosition.ts'

export async function activeStakeAtTimeByPosition(
  chainStakeEvents: StakeEventsViewer,
  externalTime: number,
  position?: number,
): Promise<bigint> {
  const stakeEvents = (await mergedAddRemoveStakeEventsByPosition(chainStakeEvents, [0, externalTime], position)).toSorted((a, b) => a.time - b.time)
  let result = 0n
  for (const event of stakeEvents) {
    if (event.time > externalTime) break
    if (isUndefined(position) || position === Number(event.args.id)) {
      if (event.name === 'StakeAdded') {
        result += event.args.amount
      } else if (event.name === 'StakeRemoved') {
        result -= event.args.amount
      }
    }
  }
  return result
}
