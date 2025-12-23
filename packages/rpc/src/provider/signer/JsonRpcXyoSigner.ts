import type { Address } from '@xylabs/sdk-js'
import type {
  SignedHydratedTransactionWithHashMeta,
  UnsignedHydratedTransaction,
} from '@xyo-network/xl1-protocol'
import type { XyoSigner } from '@xyo-network/xl1-protocol-sdk'

import type { RpcTransport } from '../../transport/index.ts'
import type { XyoSignerRpcSchemas } from '../../types/index.ts'

export class RpcXyoSigner implements XyoSigner {
  protected readonly transport: RpcTransport<typeof XyoSignerRpcSchemas>

  constructor(transport: RpcTransport<typeof XyoSignerRpcSchemas>) {
    this.transport = transport
  }

  async address(): Promise<Address> {
    return await this.transport.sendRequest('xyoSigner_address')
  }

  async signTransaction(tx: UnsignedHydratedTransaction): Promise<SignedHydratedTransactionWithHashMeta> {
    return await this.transport.sendRequest('xyoSigner_signTransaction', [tx])
  }
}
