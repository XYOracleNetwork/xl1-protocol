import {
  asXL1Factory, isXL1Factory, toXL1Factory,
} from './isXL1Factory.ts'
import { xl1MaxValue } from './xl1MaxValue.ts'
import { XL1Places } from './XL1Units.ts'

export const PicoXL1MaxValue = xl1MaxValue(XL1Places.pico)
export type PicoXL1 = bigint & { readonly _tag: 'PicoXL1' }
export const isPicoXL1 = isXL1Factory<PicoXL1>(XL1Places.pico)
export const asPicoXL1 = asXL1Factory<PicoXL1>(XL1Places.pico)

export const toPicoXL1 = toXL1Factory<PicoXL1>(XL1Places.pico)

export const PicoXL1 = asPicoXL1
