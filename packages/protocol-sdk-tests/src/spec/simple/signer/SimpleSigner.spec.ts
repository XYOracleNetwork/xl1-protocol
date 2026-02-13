import type { AccountInstance } from '@xyo-network/account-model'
import type { Payload } from '@xyo-network/payload-model'
import { Account } from '@xyo-network/sdk-js'
import type {
  AllowedBlockPayload, ChainId, XyoSigner,
} from '@xyo-network/xl1-protocol'
import {
  asXL1BlockNumber, defaultTransactionFees, SignedHydratedTransactionWithHashMetaZod,
} from '@xyo-network/xl1-protocol'
import {
  buildUnsignedTransaction, ConfigZod, SimpleXyoSigner,
} from '@xyo-network/xl1-protocol-sdk'
import { buildSimpleXyoSignerV2 } from '@xyo-network/xl1-providers'
import {
  beforeEach, describe, expect, it,
} from 'vitest'

const config = ConfigZod.parse({})

describe('SimpleXyoSigner', () => {
  let sut: XyoSigner
  let account: AccountInstance

  beforeEach(async () => {
    account = await Account.random()
    sut = await buildSimpleXyoSignerV2(config, account)
  })

  it('should create an instance of SimpleXyoSigner', () => {
    expect(sut).toBeInstanceOf(SimpleXyoSigner)
  })

  it('should expose the the signer address', () => {
    expect(sut.address()).toBe(account.address)
  })

  it('should sign a transaction', async () => {
    const chain = '2AAE728aFd1777b79c34D79c4523797F9D9965b0' as ChainId
    const elevatedPayloads: AllowedBlockPayload[] = []
    const additionalPayloads: Payload[] = []
    const nbf = asXL1BlockNumber(100_000, true)
    const exp = asXL1BlockNumber(200_000, true)
    const fees = defaultTransactionFees

    const unsignedTransaction = await buildUnsignedTransaction(chain, elevatedPayloads, additionalPayloads, nbf, exp, account.address, fees)

    const signedTx = await sut.signTransaction(unsignedTransaction)

    expect(signedTx).toBeDefined()
    const result = SignedHydratedTransactionWithHashMetaZod.safeParse(signedTx)
    expect(result.success).toBe(true)
  })
})
