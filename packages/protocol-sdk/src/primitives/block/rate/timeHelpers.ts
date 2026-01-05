import { assertEx, isDefined } from '@xylabs/sdk-js'
import type { SingleTimeConfig, TimeDurations } from '@xyo-network/xl1-protocol'

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

export const getTimeConfigInMilliseconds = (timeConfig: SingleTimeConfig): number => {
  const assertedTimeConfig = assertEx(isDefined(timeConfig) ? timeConfig : undefined, () => 'Time configuration must be provided')
  // Convert all time units to milliseconds
  let totalMilliseconds = 0

  if ('years' in assertedTimeConfig) {
    totalMilliseconds += assertedTimeConfig.years * 31_536_000_000 // 1 year = 31,536,000,000 milliseconds
    return totalMilliseconds
  }

  if ('months' in assertedTimeConfig) {
    totalMilliseconds += assertedTimeConfig.months * 2_592_000_000 // 1 month = 2,592,000,000 milliseconds
    return totalMilliseconds
  }

  if ('weeks' in assertedTimeConfig) {
    totalMilliseconds += assertedTimeConfig.weeks * 604_800_000 // 1 week = 604,800,000 milliseconds
    return totalMilliseconds
  }

  if ('days' in assertedTimeConfig) {
    totalMilliseconds += assertedTimeConfig.days * 86_400_000 // 1 day = 86,400,000 milliseconds
    return totalMilliseconds
  }

  if ('hours' in assertedTimeConfig) {
    totalMilliseconds += assertedTimeConfig.hours * 3_600_000 // 1 hour = 3,600,000 milliseconds
    return totalMilliseconds
  }

  if ('minutes' in assertedTimeConfig) {
    totalMilliseconds += assertedTimeConfig.minutes * 60_000 // 1 minute = 60,000 milliseconds
    return totalMilliseconds
  }

  return totalMilliseconds
}
