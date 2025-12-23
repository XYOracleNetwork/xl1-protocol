import {
  asXL1Factory, isXL1Factory, toXL1Factory,
} from './isXL1Factory.ts'
import { xl1MaxValue } from './xl1MaxValue.ts'
import { XL1Places } from './XL1Units.ts'

export const MicroXL1MaxValue = xl1MaxValue(XL1Places.micro)
export type MicroXL1 = bigint & { readonly _tag: 'MicroXL1' }
export const isMicroXL1 = isXL1Factory<MicroXL1>(XL1Places.micro)
export const asMicroXL1 = asXL1Factory<MicroXL1>(XL1Places.micro)

export const toMicroXL1 = toXL1Factory<MicroXL1>(XL1Places.micro)

export const MicroXL1 = asMicroXL1
