import type { AccountInstance } from '@xyo-network/sdk-js'
import { XyoSignerMoniker } from '@xyo-network/xl1-protocol'
import type { BaseConfigContext } from '@xyo-network/xl1-protocol-sdk'
import { ProviderFactoryLocator, SimpleXyoSigner } from '@xyo-network/xl1-protocol-sdk'

export async function buildSimpleXyoSignerV2(context: BaseConfigContext, account: AccountInstance) {
  const locator = new ProviderFactoryLocator(context)
  locator.register(
    SimpleXyoSigner.factory<SimpleXyoSigner>(SimpleXyoSigner.dependencies, { account }),
  )
  return await locator.getInstance<SimpleXyoSigner>(XyoSignerMoniker)
}
