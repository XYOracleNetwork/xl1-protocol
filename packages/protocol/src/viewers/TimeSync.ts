import type { Promisable } from '@xylabs/sdk-js'

import type { TimeDomain, TimePayload } from '../payload/index.ts'
import type { Provider } from '../Provider.ts'

export interface TimeSyncViewerMethods {
  /** Convert time between different domains */
  convertTime(fromDomain: TimeDomain, toDomain: TimeDomain, from: number): Promisable<number>

  /** Get the current time for a given domain */
  currentTime(domain: TimeDomain): Promisable<[string, number]>

  /** Get the current time for a given domain */
  currentTimeAndHash(domain: TimeDomain): Promisable<[number, string | null]>

  /** Create a TimePayload with the current time from all configured domains */
  currentTimePayload(): Promisable<TimePayload>
}

export const TimeSyncViewerMoniker = 'TimeSyncViewer' as const
export type TimeSyncViewerMoniker = typeof TimeSyncViewerMoniker

export interface TimeSyncViewer extends TimeSyncViewerMethods, Provider<TimeSyncViewerMoniker> {}
