type XL1Units = 'xl1' | 'milli' | 'micro' | 'nano' | 'pico' | 'femto' | 'atto'

export const XL1Places: Record<XL1Units, bigint> = {
  xl1: 18n,
  milli: 15n,
  micro: 12n,
  nano: 9n,
  pico: 6n,
  femto: 3n,
  atto: 0n,
} as const

/**
 * Convert factor by which a respective unit is multiplied to convert it to AttoXL1 or
 * by which AttoXL1 is divided to convert it to respective unit is multiplied.
 */
export const AttoXL1ConvertFactor: Record<XL1Units, bigint> = {
  xl1: 10n ** XL1Places.xl1,
  milli: 10n ** XL1Places.milli,
  micro: 10n ** XL1Places.micro,
  nano: 10n ** XL1Places.nano,
  pico: 10n ** XL1Places.pico,
  femto: 10n ** XL1Places.femto,
  atto: 10n ** XL1Places.atto,
} as const
