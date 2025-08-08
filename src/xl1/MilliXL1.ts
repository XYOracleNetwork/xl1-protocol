import {
  asXL1Factory, isXL1Factory, toXL1Factory,
} from './isXL1Factory.ts'
import { xl1MaxValue } from './xl1MaxValue.ts'
import { XL1Places } from './XL1Units.ts'

export const MilliXL1MaxValue = xl1MaxValue(XL1Places.milli)
export type MilliXL1 = bigint & { readonly _tag: 'MilliXL1' }
export const isMilliXL1 = isXL1Factory<MilliXL1>(XL1Places.milli)
export const asMilliXL1 = asXL1Factory<MilliXL1>(XL1Places.milli)

export const toMilliXL1 = toXL1Factory<MilliXL1>(XL1Places.milli)

export const MilliXL1 = asMilliXL1
