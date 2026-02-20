import type { Address, Promisable } from '@xylabs/sdk-js'
import type { AccountInstance, Payload } from '@xyo-network/sdk-js'
import { Account, PayloadBuilder } from '@xyo-network/sdk-js'
import type {
  AllowedBlockPayload, ChainId, SignedHydratedTransactionWithHashMeta,
  SignedTransactionBoundWitness, TransactionFeesBigInt,
  UnsignedTransactionBoundWitness,
  XL1BlockNumber, XyoSigner,
} from '@xyo-network/xl1-protocol'
import {
  SignedHydratedTransactionWithHashMetaZod,
  XyoSignerMoniker,
} from '@xyo-network/xl1-protocol'

import type { CreatableProviderParams } from '../../CreatableProvider/index.ts'
import { AbstractCreatableProvider } from '../../CreatableProvider/index.ts'
import { buildTransaction, signTransaction } from '../../transaction/index.ts'

export interface SimpleXyoSignerParams extends CreatableProviderParams {
  account: AccountInstance
}

export class SimpleXyoSigner extends AbstractCreatableProvider<SimpleXyoSignerParams> implements XyoSigner {
  static readonly defaultMoniker = XyoSignerMoniker
  static readonly dependencies = []
  static readonly monikers = [XyoSignerMoniker]
  moniker = SimpleXyoSigner.defaultMoniker

  static override async paramsHandler(params?: Partial<SimpleXyoSignerParams>) {
    let account: AccountInstance
    if (params?.account) {
      account = params.account
    } else {
      const localLogger = params?.logger ?? params?.context?.logger
      localLogger?.warn(`No account provided to SimpleXyoSigner, generating a random account. 
        This account will not be persisted and any transactions signed with it may be lost.
      `)

      account = await Account.random()
    }
    return { ...await super.paramsHandler(params), account }
  }

  address(): Promisable<Address> {
    return this.params.account.address
  }

  /** @deprecated - use signTransaction instead */
  async createSignedTransaction(
    chain: ChainId,
    elevatedPayloads: AllowedBlockPayload[],
    additionalPayloads: Payload[],
    nbf: XL1BlockNumber,
    exp: XL1BlockNumber,
    fees: TransactionFeesBigInt,
    from?: Address,
  ): Promise<SignedTransactionBoundWitness> {
    const fromAddress = from ?? await this.address()
    const transaction = await buildTransaction(
      chain,
      elevatedPayloads,
      additionalPayloads,
      this.params.account,
      nbf,
      exp,
      fromAddress,
      fees,
    )
    return transaction[0]
  }

  async signTransaction(tx: [UnsignedTransactionBoundWitness, Payload[]]): Promise<SignedHydratedTransactionWithHashMeta> {
    const txBW = await signTransaction(tx[0], this.params.account)
    return SignedHydratedTransactionWithHashMetaZod.parse([await PayloadBuilder.addStorageMeta(txBW), await PayloadBuilder.addStorageMeta(tx[1])])
  }
}
