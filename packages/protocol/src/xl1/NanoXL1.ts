import {
  asXL1Factory, isXL1Factory, toXL1Factory,
} from './isXL1Factory.ts'
import { xl1MaxValue } from './xl1MaxValue.ts'
import { XL1Places } from './XL1Units.ts'

export const NanoXL1MaxValue = xl1MaxValue(XL1Places.nano)
export type NanoXL1 = bigint & { readonly _tag: 'NanoXL1' }
export const isNanoXL1 = isXL1Factory<NanoXL1>(XL1Places.nano)
export const asNanoXL1 = asXL1Factory<NanoXL1>(XL1Places.nano)

export const toNanoXL1 = toXL1Factory<NanoXL1>(XL1Places.nano)

export const NanoXL1 = asNanoXL1
