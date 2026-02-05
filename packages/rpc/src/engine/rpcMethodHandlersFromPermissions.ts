import type { XyoPermissions } from '@xyo-network/xl1-protocol'

import type { XyoPermissionsRpcMethodHandlers } from '../types/index.ts'

export const rpcMethodHandlersFromPermissions = (permissions: XyoPermissions): XyoPermissionsRpcMethodHandlers => {
  return {
    xyoPermissions_getPermissions: params => permissions.getPermissions(...(params ?? [])),
    xyoPermissions_requestPermissions: params => permissions.requestPermissions(...(params ?? [])),
    xyoPermissions_revokePermissions: params => permissions.revokePermissions(...(params ?? [])),
  }
}
