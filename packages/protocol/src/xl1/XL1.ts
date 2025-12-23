import {
  asXL1Factory, isXL1Factory, toXL1Factory,
} from './isXL1Factory.ts'
import { xl1MaxValue } from './xl1MaxValue.ts'
import { XL1Places } from './XL1Units.ts'

export const XL1MaxValue = xl1MaxValue(XL1Places.xl1)
export type XL1 = bigint & { readonly _tag: 'XL1' }
export const isXL1 = isXL1Factory<XL1>(XL1Places.xl1)
export const asXL1 = asXL1Factory<XL1>(XL1Places.xl1)

export const toXL1 = toXL1Factory<XL1>(XL1Places.xl1)

export const XL1 = asXL1
