import type { XyoSigner } from '@xyo-network/xl1-protocol-sdk'

export type XyoSignerMethodName = keyof XyoSigner

export type XyoSignerRpcMethodName = `xyoSigner_${XyoSignerMethodName}`

// Map each XYO RPC method string to the corresponding function type from XyoSigner
export type XyoSignerRpcMethodHandlers = {
  [K in XyoSignerMethodName as `xyoSigner_${K}`]: (
    params: Parameters<XyoSigner[K]>,
  ) => ReturnType<XyoSigner[K]>
}
