export type XL1 = bigint & { readonly _tag: 'XL1' } // 1e-18
export type MicroXL1 = bigint & { readonly _tag: 'MicroXL1' } // 1e-24

export const XL1 = (value: bigint): XL1 => value as XL1
export const MicroXL1 = (value: bigint): MicroXL1 => value as MicroXL1

export const mXL1ToXL1 = (value: MicroXL1): XL1 => {
  return XL1(BigInt(value) / BigInt(1_000_000))
}

export const mXL1FromXL1 = (value: XL1): MicroXL1 => {
  return MicroXL1(BigInt(value) * BigInt(1_000_000))
}
