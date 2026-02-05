import type { AccountInstance } from '@xyo-network/account-model'
import type { CreatableProviderContextType, ProviderFactoryLocator } from '@xyo-network/xl1-protocol-sdk'
import {
  SimpleXyoGateway, SimpleXyoGatewayRunner,
  SimpleXyoSigner,
} from '@xyo-network/xl1-protocol-sdk'

import { SimpleXyoConnection } from './SimpleXyoConnection.ts'

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
 * @param params The SignerLocatorParams containing the optional signerAccount
 * @returns The updated ProviderFactoryLocator
 */
export const registerGatewayAndConnectionWithLocator = (
  locator: ProviderFactoryLocator,
) => {
  locator.registerMany([
    SimpleXyoConnection.factory<SimpleXyoConnection>(SimpleXyoConnection.dependencies, {}),
    SimpleXyoGateway.factory<SimpleXyoGateway>(SimpleXyoGateway.dependencies, {}),
  ])
  return locator
}
