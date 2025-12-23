import type { Promisable } from '@xylabs/sdk-js'

export interface ValidatableInstance {
  validate(): Promisable<Error[]>
}
