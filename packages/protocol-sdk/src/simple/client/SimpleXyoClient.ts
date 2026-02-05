import type {
  XyoClient, XyoGatewayRunner, XyoPermissions,
} from '@xyo-network/xl1-protocol'

export class SimpleXyoClient implements XyoClient {
  gateways: Readonly<Partial<Record<string, XyoGatewayRunner>>>
  permissions: XyoPermissions

  constructor(gateways: Readonly<Partial<Record<string, XyoGatewayRunner>>>, permissions: XyoPermissions) {
    this.gateways = gateways
    this.permissions = permissions
  }
}
