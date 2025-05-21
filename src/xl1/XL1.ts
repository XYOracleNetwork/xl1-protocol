export type XL1 = bigint & { readonly _tag: 'XL1' } // 1e-18
export type MilliXL1 = bigint & { readonly _tag: 'MilliXL1' } // 1e-15 [XL1 * 1e3 = milliXL1] [milliXL1 / 1e3 = XL1]
export type MicroXL1 = bigint & { readonly _tag: 'MicroXL1' } // 1e-12 [XL1 * 1e6 = microXL1] [microXL1 / 1e6 = XL1]
export type NanoXL1 = bigint & { readonly _tag: 'NanoXL1' } // 1e-9 [XL1 * 1e9 = nanoXL1] [nanoXL1 / 1e9 = XL1]
export type PicoXL1 = bigint & { readonly _tag: 'PicoXL1' } // 1e-6 [XL1 * 1e12 = picoXL1] [picoXL1 / 1e12 = XL1]
export type FemtoXL1 = bigint & { readonly _tag: 'FemtoXL1' } // 1e-3 [XL1 * 1e15 = femtoXL1] [femtoXL1 / 1e15 = XL1]
export type AttoXL1 = bigint & { readonly _tag: 'AttoXL1' } // 1e-0 [XL1 * 1e18 = attoXL1] [attoXL1 / 1e18 = XL1]

export const XL1: TypingFunc<XL1> = (value: bigint): XL1 => value as XL1
export const MilliXL1: TypingFunc<MilliXL1> = (value: bigint): MilliXL1 => value as MilliXL1
export const MicroXL1: TypingFunc<MicroXL1> = (value: bigint): MicroXL1 => value as MicroXL1
export const NanoXL1: TypingFunc<NanoXL1> = (value: bigint): NanoXL1 => value as NanoXL1
export const PicoXL1: TypingFunc<PicoXL1> = (value: bigint): PicoXL1 => value as PicoXL1
export const FemtoXL1: TypingFunc<FemtoXL1> = (value: bigint): FemtoXL1 => value as FemtoXL1
export const AttoXL1: TypingFunc<AttoXL1> = (value: bigint): AttoXL1 => value as AttoXL1

export const XL1ConvertDict: Record<string, number> = {
  milli: 3,
  micro: 6,
  nano: 9,
  pico: 12,
  femto: 15,
  atto: 18,
}

export type TypingFunc<T extends bigint> = (value: bigint) => T

export function toXL1<T extends bigint>(value: T, factor: number): XL1 {
  return XL1(value / (10n ** BigInt(factor)))
}

export function fromXL1<T extends bigint>(value: XL1, factor: number, typingFunc: TypingFunc<T>): T {
  return typingFunc(value * (10n ** BigInt(factor)))
}

// milli
export const milliXL1ToXL1 = (value: MilliXL1): XL1 => {
  return toXL1(value, XL1ConvertDict.milli)
}

export const milliXL1FromXL1 = (value: XL1): MilliXL1 => {
  return fromXL1(value, XL1ConvertDict.micro, MilliXL1)
}

// micro
export const microXL1ToXL1 = (value: MicroXL1): XL1 => {
  return toXL1(value, XL1ConvertDict.micro)
}

export const microXL1FromXL1 = (value: XL1): MicroXL1 => {
  return fromXL1(value, XL1ConvertDict.micro, MicroXL1)
}

// nano
export const nanoXL1ToXL1 = (value: NanoXL1): XL1 => {
  return toXL1(value, XL1ConvertDict.nano)
}

export const nanoXL1FromXL1 = (value: XL1): NanoXL1 => {
  return fromXL1(value, XL1ConvertDict.nano, NanoXL1)
}

// pico
export const picoXL1ToXL1 = (value: PicoXL1): XL1 => {
  return toXL1(value, XL1ConvertDict.pico)
}

export const picoXL1FromXL1 = (value: XL1): PicoXL1 => {
  return fromXL1(value, XL1ConvertDict.pico, PicoXL1)
}

// femto
export const femtoXL1ToXL1 = (value: FemtoXL1): XL1 => {
  return toXL1(value, XL1ConvertDict.femto)
}

export const femtoXL1FromXL1 = (value: XL1): FemtoXL1 => {
  return fromXL1(value, XL1ConvertDict.femto, FemtoXL1)
}

// atto
export const attoXL1ToXL1 = (value: AttoXL1): XL1 => {
  return toXL1(value, XL1ConvertDict.atto)
}

export const attoXL1FromXL1 = (value: XL1): AttoXL1 => {
  return fromXL1(value, XL1ConvertDict.atto, AttoXL1)
}
