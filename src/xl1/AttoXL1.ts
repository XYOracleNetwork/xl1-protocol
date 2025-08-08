import {
  asXL1Factory, isXL1Factory, toXL1Factory,
} from './isXL1Factory.ts'
import { xl1MaxValue } from './xl1MaxValue.ts'
import { XL1Places } from './XL1Units.ts'

export const AttoXL1MaxValue = xl1MaxValue(XL1Places.atto)
export type AttoXL1 = bigint & { readonly _tag: 'AttoXL1' }
export const isAttoXL1 = isXL1Factory<AttoXL1>(XL1Places.atto)
export const asAttoXL1 = asXL1Factory<AttoXL1>(XL1Places.atto)
export const toAttoXL1 = toXL1Factory<AttoXL1>(XL1Places.atto)

export const AttoXL1 = asAttoXL1
