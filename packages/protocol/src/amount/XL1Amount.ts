/* eslint-disable @typescript-eslint/member-ordering */
import { assertEx } from '@xylabs/sdk-js'

import {
  AttoXL1, FemtoXL1, MicroXL1, MilliXL1, NanoXL1, PicoXL1, XL1,
  XL1Places,
} from '../xl1/index.ts'
import { ShiftedBigInt } from './ShiftedBigInt.ts'
import type { ShiftedBigIntConfig } from './ShiftedBigIntConfig.ts'

const MAX_XL1_AMOUNT = 2n ** 256n - 1n
const allowedPlaces = Object.values(XL1Places)

export interface XL1AmountInstance {
  value: AttoXL1

  to(places: bigint | number): bigint

  milli: MilliXL1

  micro: MicroXL1

  nano: NanoXL1

  pico: PicoXL1

  femto: FemtoXL1

  atto: AttoXL1

  xl1: XL1

  toString(places: number, config: Partial<ShiftedBigIntConfig>): string
}

export class XL1Amount implements XL1AmountInstance {
  value: AttoXL1
  private locale: Intl.LocalesArgument

  constructor(value: bigint, locale: Intl.LocalesArgument = 'en-US') {
    this.locale = locale
    this.value = AttoXL1(value > MAX_XL1_AMOUNT ? MAX_XL1_AMOUNT : value < 0n ? 0n : value)
  }

  static from(value: bigint, places: bigint = XL1Places.atto) {
    assertEx(allowedPlaces.includes(places), () => `Invalid conversion places (${places} not in ${allowedPlaces})`)
    return new XL1Amount(value * 10n ** BigInt(places))
  }

  static fromMilli(value: MilliXL1) {
    return this.from(value, XL1Places.milli)
  }

  static fromMicro(value: MicroXL1) {
    return this.from(value, XL1Places.micro)
  }

  static fromNano(value: NanoXL1) {
    return this.from(value, XL1Places.nano)
  }

  static fromPico(value: PicoXL1) {
    return this.from(value, XL1Places.pico)
  }

  static fromFemto(value: FemtoXL1) {
    return this.from(value, XL1Places.femto)
  }

  static fromAtto(value: AttoXL1) {
    return this.from(value, XL1Places.atto)
  }

  static fromXL1(value: XL1) {
    return this.from(value, XL1Places.xl1)
  }

  to(places: number | bigint = XL1Places.atto) {
    return this.value / 10n ** BigInt(places)
  }

  get milli() {
    return MilliXL1(this.to(XL1Places.milli))
  }

  get micro() {
    return MicroXL1(this.to(XL1Places.micro))
  }

  get nano() {
    return NanoXL1(this.to(XL1Places.nano))
  }

  get pico() {
    return PicoXL1(this.to(XL1Places.pico))
  }

  get femto() {
    return FemtoXL1(this.to(XL1Places.femto))
  }

  get atto() {
    return AttoXL1(this.to(XL1Places.atto))
  }

  get xl1() {
    return XL1(this.to(XL1Places.xl1))
  }

  toString(places: number = Number(XL1Places.atto), config: Partial<ShiftedBigIntConfig> = {}): string {
    assertEx(allowedPlaces.includes(BigInt(places)), () => `Invalid conversion places (${places} not in ${allowedPlaces})`)
    return new ShiftedBigInt(
      this.value,
      {
        places,
        locale: this.locale,
        maxDecimal: places,
        minDecimals: 0,
        maxCharacters: places,
        ...config,
      },
    ).toShortString()
  }
}
