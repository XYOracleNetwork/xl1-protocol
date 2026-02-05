import type { AccountInstance } from '@xyo-network/account-model'
import { XyoSignerMoniker } from '@xyo-network/xl1-protocol'
import type { Config } from '@xyo-network/xl1-protocol-sdk'
import { SimpleXyoSigner } from '@xyo-network/xl1-protocol-sdk'

import { buildEmptyProviderLocator } from './buildProviderLocatorV2.ts'

export async function buildSimpleXyoSignerV2(config: Config, account: AccountInstance) {
  const locator = buildEmptyProviderLocator(config)
  locator.register(
    SimpleXyoSigner.factory<SimpleXyoSigner>(SimpleXyoSigner.dependencies, { account }),
  )
  return await locator.getInstance<SimpleXyoSigner>(XyoSignerMoniker)
}
