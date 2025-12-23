import type { Address, Promisable } from '@xylabs/sdk-js'
import { Account } from '@xyo-network/account'
import type { AccountInstance } from '@xyo-network/account-model'
import { PayloadBuilder } from '@xyo-network/payload-builder'
import { type Payload } from '@xyo-network/payload-model'
import type {
  AllowedBlockPayload, ChainId, SignedHydratedTransactionWithHashMeta,
  SignedTransactionBoundWitness, TransactionFeesBigInt,
  UnsignedTransactionBoundWitness,
  XL1BlockNumber,
} from '@xyo-network/xl1-protocol'
import { SignedHydratedTransactionWithHashMetaZod } from '@xyo-network/xl1-protocol'

import type { CreatableProviderParams } from '../../CreatableProvider/index.ts'
import { AbstractCreatableProvider } from '../../CreatableProvider/index.ts'
import { type XyoSigner, XyoSignerMoniker } from '../../provider/index.ts'
import { buildTransaction, signTransaction } from '../../transaction/index.ts'

export interface SimpleXyoSignerParams extends CreatableProviderParams {
  account: AccountInstance
}

export class SimpleXyoSigner extends AbstractCreatableProvider<SimpleXyoSignerParams> implements XyoSigner {
  static readonly defaultMoniker = XyoSignerMoniker
  static readonly monikers = [XyoSignerMoniker]
  moniker = SimpleXyoSigner.defaultMoniker
  protected readonly _account!: AccountInstance

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
    return this._account.address
  }

  async createSignedTransaction(
    chain: ChainId,
    elevatedPayloads: AllowedBlockPayload[],
    additionalPayloads: Payload[],
    nbf: XL1BlockNumber,
    exp: XL1BlockNumber,
    fees: TransactionFeesBigInt,
    from?: Address,
  ): Promise<SignedTransactionBoundWitness> {
    const fromAddress = from ?? this._account.address
    const transaction = await buildTransaction(
      chain,
      elevatedPayloads,
      additionalPayloads,
      this._account,
      nbf,
      exp,
      fromAddress,
      fees,
    )
    return transaction[0]
  }

  async signTransaction(tx: [UnsignedTransactionBoundWitness, Payload[]]): Promise<SignedHydratedTransactionWithHashMeta> {
    const txBW = await signTransaction(tx[0], this._account)
    return SignedHydratedTransactionWithHashMetaZod.parse([await PayloadBuilder.addStorageMeta(txBW), await PayloadBuilder.addStorageMeta(tx[1])])
  }
}
