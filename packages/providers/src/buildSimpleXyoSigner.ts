import type { AccountInstance } from '@xyo-network/account-model'
import { SimpleXyoSigner, XyoSignerMoniker } from '@xyo-network/xl1-protocol-sdk'

import type { BuildProviderLocatorParams } from './buildProviderLocator.ts'
import { buildSimpleProviderLocator } from './buildProviderLocator.ts'

export interface BuildSimpleXyoSignerLocatorParams extends BuildProviderLocatorParams {
  account: AccountInstance
}

export async function buildSimpleXyoSigner(params: BuildSimpleXyoSignerLocatorParams) {
  const { account, ...restParams } = params
  const locator = buildSimpleProviderLocator(restParams)
  locator.register(
    SimpleXyoSigner.factory<SimpleXyoSigner>(SimpleXyoSigner.dependencies, { account }),
  )
  return await locator.getInstance<SimpleXyoSigner>(XyoSignerMoniker)
}
