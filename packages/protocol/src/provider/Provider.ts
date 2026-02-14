import type { ProviderMoniker } from './ProviderMoniker.ts'

export interface Provider<T extends ProviderMoniker> {
  moniker: T
}
