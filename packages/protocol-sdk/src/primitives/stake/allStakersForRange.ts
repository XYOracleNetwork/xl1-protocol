import {
  type Address,
  toAddress,
} from '@xylabs/sdk-js'

import type { StakeEventsViewer } from '../../model/index.ts'
import { mergedAddRemoveStakeEventsByStaker } from './mergedAddRemoveStakeEventsByStaker.ts'

export async function allStakersForRange(
  chain: StakeEventsViewer,
  externalRange: [number, number],
  staked: Address,
): Promise<Record<Address, bigint>> {
  const mergedEvents = await mergedAddRemoveStakeEventsByStaker(chain, [0, externalRange[1]], staked)
  const resultWithZeros: Record<Address, bigint> = {}
  for (const event of mergedEvents) {
    const staker = toAddress(event.args.staker)
    resultWithZeros[staker] = resultWithZeros[staker] ?? 0n
    if (event.name === 'StakeAdded') {
      resultWithZeros[staker] += event.args.amount
    } else if (event.name === 'StakeRemoved') {
      resultWithZeros[staker] -= event.args.amount
    }
  }
  const nonZero = Object.entries(resultWithZeros).filter(([, amount]) => amount > 0n).map(([address]) => address)
  const result: Record<Address, bigint> = {}
  for (const address of nonZero) {
    result[toAddress(address)] = resultWithZeros[toAddress(address)]
  }
  return result
}
