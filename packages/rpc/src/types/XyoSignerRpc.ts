import type { XyoSignerMethods } from '@xyo-network/xl1-protocol'

export type XyoSignerMethodName = keyof XyoSignerMethods

export type XyoSignerRpcMethodName = `xyoSigner_${XyoSignerMethodName}`

// Map each XYO RPC method string to the corresponding function type from XyoSigner
export type XyoSignerRpcMethodHandlers = {
  [K in XyoSignerMethodName as `xyoSigner_${K}`]: (
    params: Parameters<XyoSignerMethods[K]>,
  ) => ReturnType<XyoSignerMethods[K]>
}
