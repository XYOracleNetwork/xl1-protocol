import type { Config } from '../../config/index.ts'
import { type CreatableProviderContext, ProviderFactoryLocator } from '../../CreatableProvider/index.ts'

// This file should not be exported from the package
export function getEmptyProviderContext(config: Config): CreatableProviderContext {
  const singletons = {}
  const caches = {}
  const locator = new ProviderFactoryLocator({
    config, singletons, caches, logger: console,
  })
  return locator.context
}
