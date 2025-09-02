import type { Promisable } from '@xylabs/promise'

import type { TimeDomain } from '../../payload/index.ts'

export interface TimeSyncViewInterface {
  convertTime: (from: TimeDomain, to: TimeDomain) => Promisable<number>
  currentTime: (domain: TimeDomain) => Promisable<number>
}
