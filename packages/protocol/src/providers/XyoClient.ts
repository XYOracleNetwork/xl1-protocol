import type { GatewayName } from '../model/index.ts'
import type { XyoPermissions } from '../permissions/index.ts'
import type { XyoGateway } from './XyoGateway.ts'
import type { XyoGatewayRunner } from './XyoGatewayRunner.ts'

export interface XyoGatewayConfig {
  name: GatewayName
}

export interface XyoRpcGatewayConfig extends XyoGatewayConfig {
  dataLakeEndpoint: string
  networkEndpoint: string
}

export interface XyoClient {
  gateways: Readonly<Partial<Record<GatewayName, XyoGatewayRunner>>>
  permissions: XyoPermissions

  addGateway?(providerOrConfig: XyoGatewayConfig | XyoRpcGatewayConfig | XyoGateway): Promise<XyoGateway>
  removeGateway?(name: GatewayName): Promise<void>
}
