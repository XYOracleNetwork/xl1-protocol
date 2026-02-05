import type { Address } from '@xylabs/sdk-js'
import type {
  SignedHydratedTransactionWithHashMeta,
  UnsignedHydratedTransaction, XyoSignerMethods,
} from '@xyo-network/xl1-protocol'
import { XyoSignerMoniker } from '@xyo-network/xl1-protocol'

import { XyoSignerRpcSchemas } from '../../types/index.ts'
import { AbstractJsonRpcRunner } from '../runner/index.ts'

export class JsonRpcXyoSignerMethods extends AbstractJsonRpcRunner<typeof XyoSignerRpcSchemas> implements XyoSignerMethods {
  readonly moniker = XyoSignerMoniker
  async address(): Promise<Address> {
    return await this.transport.sendRequest('xyoSigner_address')
  }

  async signTransaction(tx: UnsignedHydratedTransaction): Promise<SignedHydratedTransactionWithHashMeta> {
    return await this.transport.sendRequest('xyoSigner_signTransaction', [tx])
  }

  protected schemas() {
    return XyoSignerRpcSchemas
  }
}
