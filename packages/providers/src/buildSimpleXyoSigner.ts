import type { AccountInstance } from '@xyo-network/account-model'
import { SimpleXyoSigner, XyoSignerMoniker } from '@xyo-network/xl1-protocol-sdk'

import type { BuildProviderLocatorParams } from './buildProviderLocator.ts'
import { buildSimpleProviderLocator } from './buildProviderLocator.ts'

/** @deprecated use buildSimpleXyoSignerV2 instead  */
// eslint-disable-next-line @typescript-eslint/no-deprecated
export interface BuildSimpleXyoSignerLocatorParams extends BuildProviderLocatorParams {
  account: AccountInstance
}

/** @deprecated use buildSimpleXyoSignerV2 instead  */
// eslint-disable-next-line @typescript-eslint/no-deprecated
export async function buildSimpleXyoSigner(params: BuildSimpleXyoSignerLocatorParams) {
  const { account, ...restParams } = params
  // eslint-disable-next-line @typescript-eslint/no-deprecated
  const locator = buildSimpleProviderLocator(restParams)
  locator.register(
    SimpleXyoSigner.factory<SimpleXyoSigner>(SimpleXyoSigner.dependencies, { account }),
  )
  return await locator.getInstance<SimpleXyoSigner>(XyoSignerMoniker)
}
