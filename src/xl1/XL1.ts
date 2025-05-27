export type XL1 = bigint & { readonly _tag: 'XL1' } // 1e-18
export type MilliXL1 = bigint & { readonly _tag: 'MilliXL1' } // 1e-15 [XL1 * 1e3 = milliXL1] [milliXL1 / 1e3 = XL1]
export type MicroXL1 = bigint & { readonly _tag: 'MicroXL1' } // 1e-12 [XL1 * 1e6 = microXL1] [microXL1 / 1e6 = XL1]
export type NanoXL1 = bigint & { readonly _tag: 'NanoXL1' } // 1e-9 [XL1 * 1e9 = nanoXL1] [nanoXL1 / 1e9 = XL1]
export type PicoXL1 = bigint & { readonly _tag: 'PicoXL1' } // 1e-6 [XL1 * 1e12 = picoXL1] [picoXL1 / 1e12 = XL1]
export type FemtoXL1 = bigint & { readonly _tag: 'FemtoXL1' } // 1e-3 [XL1 * 1e15 = femtoXL1] [femtoXL1 / 1e15 = XL1]
export type AttoXL1 = bigint & { readonly _tag: 'AttoXL1' } // 1e-0 [XL1 * 1e18 = attoXL1] [attoXL1 / 1e18 = XL1]

type XL1Units = 'xl1' | 'milli' | 'micro' | 'nano' | 'pico' | 'femto' | 'atto'

export type TypingFunc<T extends bigint> = {
  (value: bigint): T
  toAtto: () => AttoXL1
}

export function XL1(value: bigint): XL1 & { toAtto(): AttoXL1 } {
  const xl1Value = value as XL1

  return new Proxy(xl1Value, {
    get(target, prop) {
      if (prop === 'toAtto') {
        return () => AttoXL1(target * AttoXL1ConvertFactor.xl1)
      }
      return Reflect.get(target, prop)
    },
  }) as XL1 & { toAtto(): AttoXL1 }
}

export function MilliXL1(value: bigint): MilliXL1 & { toAtto(): AttoXL1 } {
  const xl1Value = value as MilliXL1

  return new Proxy(xl1Value, {
    get(target, prop) {
      if (prop === 'toAtto') {
        return () => AttoXL1(target * AttoXL1ConvertFactor.milli)
      }
      return Reflect.get(target, prop)
    },
  }) as MilliXL1 & { toAtto(): AttoXL1 }
}

export function MicroXL1(value: bigint): MicroXL1 & { toAtto(): AttoXL1 } {
  const xl1Value = value as MicroXL1

  return new Proxy(xl1Value, {
    get(target, prop) {
      if (prop === 'toAtto') {
        return () => AttoXL1(target * AttoXL1ConvertFactor.micro)
      }
      return Reflect.get(target, prop)
    },
  }) as MicroXL1 & { toAtto(): AttoXL1 }
}

export function NanoXL1(value: bigint): NanoXL1 & { toAtto(): AttoXL1 } {
  const xl1Value = value as NanoXL1

  return new Proxy(xl1Value, {
    get(target, prop) {
      if (prop === 'toAtto') {
        return () => AttoXL1(target * AttoXL1ConvertFactor.nano)
      }
      return Reflect.get(target, prop)
    },
  }) as NanoXL1 & { toAtto(): AttoXL1 }
}

export function PicoXL1(value: bigint): PicoXL1 & { toAtto(): AttoXL1 } {
  const xl1Value = value as PicoXL1

  return new Proxy(xl1Value, {
    get(target, prop) {
      if (prop === 'toAtto') {
        return () => AttoXL1(target * AttoXL1ConvertFactor.pico)
      }
      return Reflect.get(target, prop)
    },
  }) as PicoXL1 & { toAtto(): AttoXL1 }
}

export function FemtoXL1(value: bigint): FemtoXL1 & { toAtto(): AttoXL1 } {
  const xl1Value = value as FemtoXL1

  return new Proxy(xl1Value, {
    get(target, prop) {
      if (prop === 'toAtto') {
        return () => AttoXL1(target * AttoXL1ConvertFactor.femto)
      }
      return Reflect.get(target, prop)
    },
  }) as FemtoXL1 & { toAtto(): AttoXL1 }
}

export function AttoXL1(value: bigint): AttoXL1 & { toAtto(): AttoXL1 } {
  const xl1Value = value as AttoXL1

  return new Proxy(xl1Value, {
    get(target, prop) {
      if (prop === 'toAtto') {
        return () => AttoXL1(target * AttoXL1ConvertFactor.atto)
      }
      return Reflect.get(target, prop)
    },
  }) as AttoXL1 & { toAtto(): AttoXL1 }
}

/** @deprecated use XL1Places and xl1ConvertFactor(unit) instead */
export const XL1ConvertDict: Record<XL1Units, number> = {
  xl1: 18,
  milli: 15,
  micro: 12,
  nano: 9,
  pico: 6,
  femto: 3,
  atto: 0,
} as const

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

/** @deprecated use AttoXL1ConvertFactor instead */
export function xl1ConvertFactor(unit: XL1Units) {
  return 10n ** XL1Places[unit]
}
