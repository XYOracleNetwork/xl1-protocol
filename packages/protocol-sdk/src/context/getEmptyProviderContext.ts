import type { Config } from '../config/index.ts'
import { getDefaultConfig } from '../config/index.ts'
import { type CreatableProviderContext, ProviderFactoryLocator } from '../CreatableProvider/index.ts'

export function getEmptyProviderContext(config?: Config): CreatableProviderContext {
  const resolvedConfig = config ?? getDefaultConfig()
  const singletons = {}
  const caches = {}
  const locator = new ProviderFactoryLocator({
    config: resolvedConfig, singletons, caches, logger: console,
  })
  return locator.context
}

/** @deprecated Use getEmptyProviderContext instead */
export function getEmptyContext(config?: Config) {
  return getEmptyProviderContext(config)
}
