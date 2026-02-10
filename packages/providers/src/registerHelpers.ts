import type { AccountInstance } from '@xyo-network/account-model'
import type { Position } from '@xyo-network/xl1-protocol'
import type { CreatableProviderContextType, ProviderFactoryLocator } from '@xyo-network/xl1-protocol-sdk'
import {
  SimpleStakeEventsViewer,
  SimpleStakeViewer,
  SimpleXyoGateway, SimpleXyoGatewayRunner,
  SimpleXyoSigner,
} from '@xyo-network/xl1-protocol-sdk'

import { SimpleXyoConnectionRunner } from './SimpleXyoConnectionRunner.ts'

export interface GatewayRunnerLocatorParams {
  /**
   * The account instance to be used to register a SimpleXyoSigner with the locator
   */
  signerAccount?: AccountInstance
}

/**
 * Registers a SimpleXyoGatewayRunner with the locator if a signerAccount is provided in params
 * @param locator The ProviderFactoryLocator to register the signer with
 * @param params The SignerLocatorParams containing the optional signerAccount
 * @returns The updated ProviderFactoryLocator
 * @deprecated Use registerGatewayWithLocator instead
 */
export const registerGatewayRunnerWithLocatorIfProvided = (
  locator: ProviderFactoryLocator<CreatableProviderContextType, string[]>,
  params?: GatewayRunnerLocatorParams,
) => {
  const account = params?.signerAccount
  if (account) {
    locator.registerMany([
      SimpleXyoSigner.factory<SimpleXyoSigner>(SimpleXyoSigner.dependencies, { account }),
      SimpleXyoGatewayRunner.factory<SimpleXyoGatewayRunner>(SimpleXyoGatewayRunner.dependencies, {}),
    ])
  }
  return locator
}

/**
 * Registers a SimpleXyoGateway and SimpleXyoConnection with the locator
 * @param locator The ProviderFactoryLocator to register the signer with
 * @param account Optional AccountInstance to register a SimpleXyoSigner and SimpleXyoGatewayRunner with the locator
 * @returns The updated ProviderFactoryLocator
 */
export const registerGatewayWithLocator = (
  locator: ProviderFactoryLocator,
  account?: AccountInstance,
) => {
  locator.registerMany([
    SimpleXyoConnectionRunner.factory<SimpleXyoConnectionRunner>(SimpleXyoConnectionRunner.dependencies, {}),
    SimpleXyoGateway.factory<SimpleXyoGateway>(SimpleXyoGateway.dependencies, {}),
  ])
  if (account) {
    locator.registerMany([
      SimpleXyoSigner.factory<SimpleXyoSigner>(SimpleXyoSigner.dependencies, { account }),
      SimpleXyoGatewayRunner.factory<SimpleXyoGatewayRunner>(SimpleXyoGatewayRunner.dependencies, {}),
    ])
  }
  return locator
}

/**
 * Registers a SimpleStakeViewer with the locator
 * @param locator The ProviderFactoryLocator to register the signer with
 * @param positions The positions to be used by the SimpleStakeViewer and SimpleStakeEventsViewer instances
 * @returns The updated ProviderFactoryLocator
 */
export const registerSimpleStakeViewerWithLocator = (
  locator: ProviderFactoryLocator,
  positions: Position[],
) => {
  locator.registerMany([
    SimpleStakeViewer.factory<SimpleStakeViewer>(SimpleStakeViewer.dependencies, { positions }),
    SimpleStakeEventsViewer.factory<SimpleStakeEventsViewer>(SimpleStakeEventsViewer.dependencies, { positions }),
  ])
  return locator
}
