import type { Promisable } from '@xylabs/promise'

export interface ValidatableInstance {
  validate(): Promisable<Error[]>
}
