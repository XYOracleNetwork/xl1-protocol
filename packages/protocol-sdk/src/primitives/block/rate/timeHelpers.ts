import type { TimeDurations } from '@xyo-network/xl1-protocol'

export const rateMultipliers: TimeDurations = {
  millis: 1,
  seconds: 1000,
  minutes: 1000 * 60,
  hours: 1000 * 60 * 60,
  days: 1000 * 60 * 60 * 24,
  weeks: 1000 * 60 * 60 * 24 * 7,
}

export const timeDurations = (timeInMs: number): TimeDurations => ({
  millis: timeInMs,
  seconds: timeInMs / 1000,
  minutes: timeInMs / (1000 * 60),
  hours: timeInMs / (1000 * 60 * 60),
  days: timeInMs / (1000 * 60 * 60 * 24),
  weeks: timeInMs / (1000 * 60 * 60 * 24 * 7),
})
