import type { Address } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

export interface StakeScope {
  staked?: Address
  staker?: Address
  status?: 'active' | 'pending' | 'withdrawn' | 'all'
  type?: 'all' | 'network' | 'address'
}

export interface StakeTotalsViewInterface {
  // the total amount that is staked in a given scope
  stakeAmount(scope?: StakeScope): Promisable<[bigint /* amount */, number /* external block number */]>

  // the total number of stakes in a given scope
  stakeCount(scope?: StakeScope): Promisable<[number /* amount */, number /* external block number */]>

  // the total number of unique addresses staked in a given scope
  stakedCount(scope?: StakeScope): Promisable<[number /* amount */, number /* external block number */]>

  // the total number of unique stakers in a given scope
  stakerCount(scope?: StakeScope): Promisable<[number /* amount */, number /* external block number */]>

  // the total number of unique stake positions in a given scope
  stakes(scope?: StakeScope): Promisable<[bigint /* amount */, number /* external block number */]>
}
