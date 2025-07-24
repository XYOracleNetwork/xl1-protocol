import type { PermissionsProvider } from './PermissionsProvider.ts'
import type { XyoGatewayProvider } from './XyoGateway.ts'

export interface XyoClient {
  gateways: Readonly<Record<string, XyoGatewayProvider>>
  permissionsProvider: PermissionsProvider
}
