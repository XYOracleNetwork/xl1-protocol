import type {
  InvokerPermission,
  PermissionRequest,
  RequestedPermission,
  XyoPermissions,
} from '@xyo-network/xl1-protocol-sdk'

import type { RpcTransport } from '../../transport/index.ts'
import type { XyoPermissionsRpcSchemas } from '../../types/index.ts'

export class RpcXyoPermissions implements XyoPermissions {
  protected readonly transport: RpcTransport<typeof XyoPermissionsRpcSchemas>

  constructor(transport: RpcTransport<typeof XyoPermissionsRpcSchemas>) {
    this.transport = transport
  }

  async getPermissions(): Promise<InvokerPermission[]> {
    return await this.transport.sendRequest('xyoPermissions_getPermissions', [])
  }

  async requestPermissions(permissions: PermissionRequest[]): Promise<RequestedPermission[]> {
    return await this.transport.sendRequest('xyoPermissions_requestPermissions', [permissions])
  }

  async revokePermissions(_permissions: PermissionRequest): Promise<RequestedPermission[]> {
    await Promise.resolve()
    throw new Error('Method [revokePermissions] not implemented.')
  }
}
