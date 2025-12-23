import {
  InvokerPermissionZod, PermissionRequestZod, RequestedPermissionZod,
} from '@xyo-network/xl1-protocol'
import { z } from 'zod'

import type { XyoPermissionsRpcMethodName } from '../XyoPermissions.ts'
import type { RpcSchemaMap } from './RpcSchemaMap.ts'

export const XyoPermissionsRpcSchemas = {
  xyoPermissions_getPermissions: {
    params: {
      to: z.array(z.any()).length(0),
      from: z.array(z.any()).length(0),
    },
    result: {
      to: z.array(InvokerPermissionZod),
      from: z.array(InvokerPermissionZod),
    },
  },
  xyoPermissions_requestPermissions: {
    params: {
      to: z.tuple([z.array(PermissionRequestZod)]),
      from: z.tuple([z.array(PermissionRequestZod)]),
    },
    result: {
      to: z.array(RequestedPermissionZod),
      from: z.array(RequestedPermissionZod),
    },
  },
  xyoPermissions_revokePermissions: {
    params: {
      to: z.tuple([z.array(PermissionRequestZod)]),
      from: z.tuple([z.array(PermissionRequestZod)]),
    },
    result: {
      to: z.array(RequestedPermissionZod),
      from: z.array(RequestedPermissionZod),
    },
  },
} satisfies RpcSchemaMap<XyoPermissionsRpcMethodName>

export type XyoPermissionsRpcSchemas = typeof XyoPermissionsRpcSchemas
