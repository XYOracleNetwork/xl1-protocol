import type { Config } from '../../config/index.ts'
import { ProviderFactoryLocator } from '../../CreatableProvider/index.ts'
import type { CreatableProviderContext } from '../../model/index.ts'

// This file should not be exported from the package
export function getTestProviderContext(config: Config): CreatableProviderContext {
  const singletons = {}
  const caches = {}
  const locator = new ProviderFactoryLocator({
    config, singletons, caches, logger: console,
  })
  return locator.context
}
