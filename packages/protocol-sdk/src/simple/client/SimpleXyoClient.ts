import type {
  XyoClient, XyoGatewayRunner, XyoPermissions,
} from '../../model/index.ts'

export class SimpleXyoClient implements XyoClient {
  gateways: Readonly<Partial<Record<string, XyoGatewayRunner>>>
  permissions: XyoPermissions

  constructor(gateways: Readonly<Partial<Record<string, XyoGatewayRunner>>>, permissions: XyoPermissions) {
    this.gateways = gateways
    this.permissions = permissions
  }
}
