import type { Promisable } from '@xylabs/promise'

import type { PermissionsProvider } from './permissions/index.ts'
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
  connect?: Promisable<string[]>
  gateways: Readonly<Record<GatewayName, XyoGatewayProvider>>
  permissions: PermissionsProvider

  addGateway?(providerOrConfig: XyoGatewayConfig | XyoRpcGatewayConfig | XyoGatewayProvider): Promise<XyoGatewayProvider>
  removeGateway?(name: GatewayName): Promise<void>
}
