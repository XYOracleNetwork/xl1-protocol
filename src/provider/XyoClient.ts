import type { PermissionsProvider } from './PermissionsProvider.ts'
import type { XyoGatewayProvider } from './XyoGateway.ts'

export type GatewayName = string & { __gatewayName: true }

export interface XyoGatewayConfig {
  name: GatewayName
}

export interface XyoRpcGatewayConfig extends XyoGatewayConfig {
  dataLakeEndpoint: string
  networkEndpoint: string
}

export interface XyoClient {
  addGateway?: (providerOrConfig: XyoGatewayConfig | XyoRpcGatewayConfig | XyoGatewayProvider) => Promise<XyoGatewayProvider>
  gateways: Readonly<Record<GatewayName, XyoGatewayProvider>>
  permissionsProvider: PermissionsProvider
  removeGateway?: (name: GatewayName) => Promise<void>
}
