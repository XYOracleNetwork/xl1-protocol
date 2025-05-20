export type XL1 = bigint & { readonly _tag: 'XL1' } // 1e-18
export type MicroXL1 = bigint & { readonly _tag: 'MicroXL1' } // 1e-12

export const XL1 = (value: bigint): XL1 => value as XL1
export const MicroXL1 = (value: bigint): MicroXL1 => value as MicroXL1
