import { getTestProviderContext as getTestProviderContextInternal } from '../_internal/index.ts'
import type { Config } from '../config/index.ts'
import type { CreatableProviderContext } from '../model/index.ts'

export function getTestProviderContext(config: Config): CreatableProviderContext {
  return getTestProviderContextInternal(config)
}
