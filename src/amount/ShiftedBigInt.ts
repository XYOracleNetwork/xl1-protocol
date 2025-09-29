import type { ShiftedBigIntConfig } from './ShiftedBigIntConfig.ts'
import { splitOnDecimalToString } from './splitOnDecimalToString.ts'

export class ShiftedBigInt {
  static readonly defaultConfig: ShiftedBigIntConfig = {
    places: 18,
    maxDecimal: 18,
    maxCharacters: 9,
    minDecimals: 1,
    locale: 'en-US',
  }

  config: ShiftedBigIntConfig
  value: bigint

  constructor(
    value: bigint | ShiftedBigInt,
    config: Partial<ShiftedBigIntConfig> = {},
  ) {
    this.value = typeof value === 'bigint' ? value : value.value
    this.config = {
      ...ShiftedBigInt.defaultConfig, ...(typeof value === 'bigint' ? {} : value.config), ...config,
    }
  }

  get locale(): Intl.LocalesArgument {
    return this.config.locale ?? 'en-US'
  }

  get maxCharacters(): number {
    return this.config.maxCharacters ?? 9
  }

  get maxDecimal(): number {
    return this.config.maxDecimal ?? this.places
  }

  get minDecimals(): number {
    return this.config.minDecimals ?? 1
  }

  get places(): number {
    return this.config.places ?? 18
  }

  toFullString(): string {
    return splitOnDecimalToString(
      this.value,
      this.places,
      this.places,
      Infinity,
      this.places,
      this.locale,
    )
  }

  toShortString(): string {
    return splitOnDecimalToString(
      this.value,
      this.places,
      this.maxDecimal,
      this.maxCharacters,
      this.minDecimals,
      this.locale,
    )
  }

  toString(): string {
    return this.toFullString()
  }
}
