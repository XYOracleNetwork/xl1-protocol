import type { Promisable } from '@xylabs/promise'

import type { TimeDomain } from '../../payload/index.ts'

export interface TimeSyncViewInterface {
  convertTime: (fromDomain: TimeDomain, toDomain: TimeDomain, from: number) => Promisable<number>
  currentTime: (domain: TimeDomain) => Promisable<number>
}
