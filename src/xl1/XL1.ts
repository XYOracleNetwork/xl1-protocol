export type XL1 = bigint & { readonly _tag: 'XL1' } // 1e-18
export type MilliXL1 = bigint & { readonly _tag: 'MilliXL1' } // 1e-15 [XL1 * 1e3 = milliXL1] [milliXL1 / 1e3 = XL1]
export type MicroXL1 = bigint & { readonly _tag: 'MicroXL1' } // 1e-12 [XL1 * 1e6 = microXL1] [microXL1 / 1e6 = XL1]
export type NanoXL1 = bigint & { readonly _tag: 'NanoXL1' } // 1e-9 [XL1 * 1e9 = nanoXL1] [nanoXL1 / 1e9 = XL1]
export type PicoXL1 = bigint & { readonly _tag: 'PicoXL1' } // 1e-6 [XL1 * 1e12 = picoXL1] [picoXL1 / 1e12 = XL1]
export type FemtoXL1 = bigint & { readonly _tag: 'FemtoXL1' } // 1e-3 [XL1 * 1e15 = femtoXL1] [femtoXL1 / 1e15 = XL1]
export type AttoXL1 = bigint & { readonly _tag: 'AttoXL1' } // 1e-0 [XL1 * 1e18 = attoXL1] [attoXL1 / 1e18 = XL1]

export type TypingFunc<T extends bigint> = (value: bigint) => T

export const XL1: TypingFunc<XL1> = (value: bigint): XL1 => value as XL1
export const MilliXL1: TypingFunc<MilliXL1> = (value: bigint): MilliXL1 => value as MilliXL1
export const MicroXL1: TypingFunc<MicroXL1> = (value: bigint): MicroXL1 => value as MicroXL1
export const NanoXL1: TypingFunc<NanoXL1> = (value: bigint): NanoXL1 => value as NanoXL1
export const PicoXL1: TypingFunc<PicoXL1> = (value: bigint): PicoXL1 => value as PicoXL1
export const FemtoXL1: TypingFunc<FemtoXL1> = (value: bigint): FemtoXL1 => value as FemtoXL1
export const AttoXL1: TypingFunc<AttoXL1> = (value: bigint): AttoXL1 => value as AttoXL1

export const XL1ConvertDict: Record<string, number> = {
  xl1: 18,
  milli: 15,
  micro: 12,
  nano: 9,
  pico: 6,
  femto: 3,
  atto: 0,
}
