import type { Provider, ProviderMoniker } from '../Provider.ts'
import type { DataLakesViewer } from './DataLakes.ts'
import type { XyoConnection } from './XyoConnection.ts'

export const XyoGatewayMoniker = 'XyoGateway' as const
export type XyoGatewayMoniker = typeof XyoGatewayMoniker

export interface XyoGatewayMethods {}

export interface XyoGatewayProvider<
  TMoniker extends ProviderMoniker = ProviderMoniker,
  TDataLakesProvider extends DataLakesViewer = DataLakesViewer> extends XyoGatewayMethods, Provider<TMoniker> {
  /**
   * Returns the connection provider for this gateway.
   */
  connection: XyoConnection

  dataLakes?: TDataLakesProvider
}

export interface XyoGateway<
  TDataLakesProvider extends DataLakesViewer = DataLakesViewer> extends XyoGatewayProvider<XyoGatewayMoniker, TDataLakesProvider>, Provider<XyoGatewayMoniker> {
  /**
   * Returns the connection provider for this gateway.
   */
  connection: XyoConnection

  dataLakes?: TDataLakesProvider
}
