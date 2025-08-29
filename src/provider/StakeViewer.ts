import type { Address } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

export interface StakeScope {
  staked?: Address
  staker?: Address
  status?: 'active' | 'pending' | 'withdrawn' | 'all'
  type?: 'all' | 'network' | 'address'
}

export interface StakeViewer {
  stakeAmount(scope?: StakeScope): Promisable<[bigint /* amount */, number /* external block number */]>
  stakeCount(scope?: StakeScope): Promisable<[number /* amount */, number /* external block number */]>
  stakedCount(scope?: StakeScope): Promisable<[number /* amount */, number /* external block number */]>
  stakerCount(scope?: StakeScope): Promisable<[number /* amount */, number /* external block number */]>
  stakes(scope?: StakeScope): Promisable<[bigint /* amount */, number /* external block number */]>
}
