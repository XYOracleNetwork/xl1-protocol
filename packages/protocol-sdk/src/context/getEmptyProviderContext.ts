import { ProviderFactoryLocator } from '../CreatableProvider/index.ts'
import type { Config, CreatableProviderContext } from '../model/index.ts'

/** @deprecated use getTestProviderContext instead */
export function getEmptyProviderContext(config: Config): CreatableProviderContext {
  const singletons = {}
  const caches = {}
  const locator = new ProviderFactoryLocator({
    config, singletons, caches, logger: console,
  })
  return locator.context
}

/** @deprecated Use getEmptyProviderContext instead */
export function getEmptyContext(config: Config) {
  // eslint-disable-next-line @typescript-eslint/no-deprecated
  return getEmptyProviderContext(config)
}
