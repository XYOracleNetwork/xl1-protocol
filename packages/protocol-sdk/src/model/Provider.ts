import { assertEx, isString } from '@xylabs/sdk-js'

export type ProviderMoniker = string

export const asProviderMoniker = <T>(value: T) => {
  const moniker = isString(value) ? (value as unknown as ProviderMoniker) : undefined
  return assertEx(moniker)
}

export interface Provider<T extends ProviderMoniker> {
  moniker: T
}

export const DefaultProviderMoniker = 'Provider' as const
export type DefaultProviderMoniker = typeof DefaultProviderMoniker
