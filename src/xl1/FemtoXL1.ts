import {
  asXL1Factory, isXL1Factory, toXL1Factory,
} from './isXL1Factory.ts'
import { xl1MaxValue } from './xl1MaxValue.ts'
import { XL1Places } from './XL1Units.ts'

export const FemtoXL1MaxValue = xl1MaxValue(XL1Places.femto)
export type FemtoXL1 = bigint & { readonly _tag: 'FemtoXL1' }
export const isFemtoXL1 = isXL1Factory<FemtoXL1>(XL1Places.femto)
export const asFemtoXL1 = asXL1Factory<FemtoXL1>(XL1Places.femto)

export const toFemtoXL1 = toXL1Factory<FemtoXL1>(XL1Places.femto)

export const FemtoXL1 = asFemtoXL1
