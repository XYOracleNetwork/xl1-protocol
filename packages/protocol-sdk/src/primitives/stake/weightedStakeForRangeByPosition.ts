import type { Address } from '@xylabs/sdk-js'
import { isDefined } from '@xylabs/sdk-js'
import { asBlockNumber, type BlockRange } from '@xyo-network/xl1-protocol'

import type { BlockViewer, StakedChainContextRead } from '../../model/index.ts'
import { withContextCacheResponse } from '../../model/index.ts'
import { mergedAddRemoveStakeEventsByPosition } from './mergedAddRemoveStakeEventsByPosition.ts'

export async function weightedStakeForRangeByPosition(
  context: StakedChainContextRead,
  blockViewer: BlockViewer,
  externalRange: BlockRange, // first to last block of step
  staked?: Address,
  positionId?: number,
): Promise<bigint> {
  const cacheKey = isDefined(positionId) ? `${externalRange[0]}-${externalRange[1]}-${positionId}` : `${externalRange[0]}-${externalRange[1]}-all`
  return await withContextCacheResponse(context, 'weightedStakeForRangeByPosition', cacheKey, async () => {
    let weightedStakeSum = 0n
    if (isDefined(positionId)) {
      const mergedEvents = (await mergedAddRemoveStakeEventsByPosition(
        context.stake.stakeEvents,
        [0, externalRange[1]],
        positionId,
      )).toSorted((a, b) => a.time - b.time)
      let currentTime = externalRange[0]
      let currentStake = 0n // await activeStakeAtTimeByPosition(chainEvents, pos.staked, currentTime - 1, position)

      // if not staking the desired address, return 0n
      if (isDefined(staked) && mergedEvents.at(0)?.args.staked !== staked) {
        return 0n
      }

      for (const event of mergedEvents) {
        if (event.time > currentTime) {
          // Add the weighted stake for the period between the range start or previous event and this event
          weightedStakeSum += currentStake * BigInt(event.time - currentTime)
        }
        if (event.name === 'StakeAdded') {
          currentStake += event.args.amount
        } else if (event.name === 'StakeRemoved') {
          currentStake -= event.args.amount
        }
        // seems that sometimes we get multiple remove events, so ensure stake doesn't go negative
        currentStake = currentStake < 0n ? 0n : currentStake
        currentTime = asBlockNumber(event.time, { name: 'weightedStakeForRangeByPosition' })
        if (currentTime > externalRange[1]) {
          break
        }
      }
      if (externalRange[1] > currentTime) {
        // Add the weighted stake for the period between the last event and the end of the range
        weightedStakeSum += currentStake * BigInt(externalRange[1] - currentTime)
      }
    } else {
      const positionCount = await context.stake.stakeEvents.positionCount([0, externalRange[1]])
      for (let pos = 0; pos < positionCount; pos++) {
        weightedStakeSum += await weightedStakeForRangeByPosition(context, blockViewer, externalRange, staked, pos)
      }
    }
    return weightedStakeSum
  })
}
