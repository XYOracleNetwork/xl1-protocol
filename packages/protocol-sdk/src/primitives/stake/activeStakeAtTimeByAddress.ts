import type { Address } from '@xylabs/sdk-js'
import { isDefined } from '@xylabs/sdk-js'
import type { StakeEventsViewer } from '@xyo-network/xl1-protocol'

import { mergedAddRemoveStakeEventsByStaker } from './mergedAddRemoveStakeEventsByStaker.ts'

export async function activeStakeAtTimeByAddress(
  chain: StakeEventsViewer,
  staked: Address,
  time: number,
  staker?: Address,
): Promise<bigint> {
  const stakeEvents = (await mergedAddRemoveStakeEventsByStaker(chain, [0, time], staked, staker)).toSorted((a, b) => a.time - b.time)
  let result = 0n
  for (const event of stakeEvents) {
    if (event.time > time) break
    if (event.args.staked !== staked) continue
    if (isDefined(staker) && (event.args.staker !== staker)) continue
    if (event.name === 'StakeAdded') {
      result += event.args.amount
    } else if (event.name === 'StakeRemoved') {
      result -= event.args.amount
    }
  }
  return result
}
