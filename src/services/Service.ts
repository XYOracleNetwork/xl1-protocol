import type { JsonObject } from '@xylabs/object'
import type { Promisable } from '@xylabs/promise'

/** @public */
export interface Service {
  /** @description Service Function Interface */
  sfi(): Promisable<JsonObject>
}

/** @public */
export const isService = (value: unknown): value is Service => {
  return (
    typeof value === 'object'
    && value !== null
    && 'sfi' in value
    && typeof (value as Service).sfi === 'function'
  )
}
