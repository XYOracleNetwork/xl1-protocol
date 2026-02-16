import type { Provider, ProviderMoniker } from '../provider/index.ts'
import type { XyoConnection } from './XyoConnection.ts'

export const XyoGatewayMoniker = 'XyoGateway' as const
export type XyoGatewayMoniker = typeof XyoGatewayMoniker

export interface XyoGatewayMethods {}

export interface XyoGatewayProvider<
  TMoniker extends ProviderMoniker = ProviderMoniker> extends XyoGatewayMethods, Provider<TMoniker> {
  /**
   * Returns the connection provider for this gateway.
   */
  connection: XyoConnection
}

export interface XyoGateway extends XyoGatewayProvider<XyoGatewayMoniker>, Provider<XyoGatewayMoniker> {
}
