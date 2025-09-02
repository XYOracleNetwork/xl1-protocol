import type { Promisable } from '@xylabs/promise'

import type { TimeDomain } from '../payload/index.ts'

export interface TimeSyncInterface {
  convertTime: (from: TimeDomain, to: TimeDomain) => Promisable<number>
}
