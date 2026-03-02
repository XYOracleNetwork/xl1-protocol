import type { GatewayName } from '../model/index.ts'
import type { XyoPermissions } from '../permissions/index.ts'
import type { XyoGateway } from './XyoGateway.ts'
import type { XyoGatewayRunner } from './XyoGatewayRunner.ts'

/** @deprecated */
export interface XyoGatewayConfig {
  name: GatewayName
}

/** @deprecated */
export interface XyoRpcGatewayConfig extends XyoGatewayConfig {
  dataLakeEndpoint: string
  networkEndpoint: string
}

export interface XyoClient {
  gateways: Readonly<Partial<Record<GatewayName, XyoGatewayRunner>>>
  permissions: XyoPermissions

  /** @deprecated */
  addGateway?(providerOrConfig: XyoGatewayConfig | XyoRpcGatewayConfig | XyoGateway): Promise<XyoGateway>
  /** @deprecated */
  removeGateway?(name: GatewayName): Promise<void>
}
