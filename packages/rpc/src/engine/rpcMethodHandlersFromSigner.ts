import type { XyoSignerMethods } from '@xyo-network/xl1-protocol'

import type { XyoSignerRpcMethodHandlers } from '../types/index.ts'

export const rpcMethodHandlersFromSigner = (signer: XyoSignerMethods): XyoSignerRpcMethodHandlers => {
  return {
    xyoSigner_address: params => signer.address(...(params ?? [])),
    xyoSigner_signTransaction: params => signer.signTransaction(...(params ?? [])),
  }
}
