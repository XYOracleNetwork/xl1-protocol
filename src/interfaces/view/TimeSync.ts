import type { Promisable } from '@xylabs/promise'

import type { TimeDomain, TimePayload } from '../../payload/index.ts'

export interface TimeSyncViewInterface {
  /** Convert time between different domains */
  convertTime(fromDomain: TimeDomain, toDomain: TimeDomain, from: number): Promisable<number>

  /** Get the current time for a given domain */
  currentTime(domain: TimeDomain): Promisable<[string, number]>
}

export interface TimeSyncViewInterfaceV2 extends TimeSyncViewInterface {
  /** Create a TimePayload with the current time from all configured domains */
  currentTimePayload(domain: TimeDomain): Promisable<TimePayload>
}
