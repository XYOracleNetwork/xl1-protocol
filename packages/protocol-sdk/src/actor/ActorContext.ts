import type { CachingContext } from '@xyo-network/xl1-protocol'

import type { Config } from '../config/index.ts'
import type { ProviderFactoryLocatorInstance } from '../CreatableProvider/index.ts'

export interface ActorContext extends CachingContext {
  config: Config
  locator: ProviderFactoryLocatorInstance
}
