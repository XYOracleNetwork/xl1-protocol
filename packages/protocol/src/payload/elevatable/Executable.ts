import type { Address, EmptyObject } from '@xylabs/sdk-js'
import { isAnyPayload } from '@xyo-network/sdk-js'

export interface FromFields {
  // the address that is treated as the source of this action
  from: Address
}

export const hasFrom = (value: unknown): value is FromFields => {
  return (value as FromFields).from !== undefined
}

export interface ExecutableFields {
  script: string[]
}

export type Executable<T extends EmptyObject = EmptyObject> = T & ExecutableFields
export type OptionalExecutable<T extends EmptyObject = EmptyObject> = T & Partial<ExecutableFields>

export const isExecutable = <T extends EmptyObject>(value: T | undefined): value is Executable<T> => {
  return isAnyPayload(value) && Array.isArray((value as unknown as ExecutableFields).script)
}

export const asExecutable = <T extends EmptyObject>(value: T | undefined): Executable<T> | undefined => {
  return isExecutable(value)
    ? value as unknown as Executable<T>
    : undefined
}
