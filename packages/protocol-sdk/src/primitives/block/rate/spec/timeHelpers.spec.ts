import type { TimeDurations } from '@xyo-network/xl1-protocol'
import {
  describe, expect, it,
} from 'vitest'

import { rateMultipliers, timeDurations } from '../timeHelpers.ts'

describe('timeHelpers', () => {
  it('should rate times correctly', () => {
    const ms = 60_000
    const s = ms * rateMultipliers.seconds
    const m = ms * rateMultipliers.minutes
    const h = ms * rateMultipliers.hours
    const d = ms * rateMultipliers.days
    const w = ms * rateMultipliers.weeks

    const rate: TimeDurations = {
      millis: ms,
      seconds: s,
      minutes: m,
      hours: h,
      days: d,
      weeks: w,
    }

    expect(rate).toEqual({
      millis: 60_000,
      seconds: 60_000_000,
      minutes: 3_600_000_000,
      hours: 216_000_000_000,
      days: 5_184_000_000_000,
      weeks: 36_288_000_000_000,
    })
  })

  it('should format times correctly', () => {
    const rate: TimeDurations = timeDurations(60_000)
    expect(rate).toEqual({
      millis: 60_000,
      seconds: 60,
      minutes: 1,
      hours: 0.016_666_666_666_666_666,
      days: 0.000_694_444_444_444_444_5,
      weeks: 0.000_099_206_349_206_349_2,
    })
  })

  it('should handle zero times correctly', () => {
    const rate: TimeDurations = timeDurations(0)
    expect(rate).toEqual({
      millis: 0,
      seconds: 0,
      minutes: 0,
      hours: 0,
      days: 0,
      weeks: 0,
    })
  })
})
