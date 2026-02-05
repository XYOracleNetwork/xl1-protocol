import { getEmptyProviderContext } from '../_internal/index.ts'
import type { Config } from '../config/index.ts'
import { type CreatableProviderContext } from '../CreatableProvider/index.ts'

export function getTestProviderContext(config: Config): CreatableProviderContext {
  return getEmptyProviderContext(config)
}
