import type { XyoPermissions } from '@xyo-network/xl1-protocol'

export type XyoPermissionMethodName = keyof XyoPermissions

// Convert `accountBalance` to `xyo_accountBalance`, etc.
export type XyoPermissionsRpcMethodName = `xyoPermissions_${XyoPermissionMethodName}`

// Map each XYO RPC method string to the corresponding function type from XyoPermissions
export type XyoPermissionsRpcMethodHandlers = {
  [K in XyoPermissionMethodName as `xyoPermissions_${K}`]: (
    params: Parameters<XyoPermissions[K]>,
  ) => ReturnType<XyoPermissions[K]>
}
