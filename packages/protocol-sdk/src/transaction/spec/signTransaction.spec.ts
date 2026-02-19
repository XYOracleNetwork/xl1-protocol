import { asHash, asHex } from '@xylabs/sdk-js'
import { BoundWitnessValidator } from '@xyo-network/boundwitness-validator'
import type { Unsigned } from '@xyo-network/sdk-js'
import { Account, asSchema } from '@xyo-network/sdk-js'
import { asXL1BlockNumber, type TransactionBoundWitness } from '@xyo-network/xl1-protocol'
import {
  describe, expect, it,
} from 'vitest'

import { signTransaction } from '../signTransaction.ts'

describe('signTransaction', () => {
  it('successfully signs transaction', async () => {
    const account = await Account.random()
    const bw = {
      $signatures: [],
      addresses: [],
      chain: asHex('0000000000000000000000000000000000000000', true),
      exp: asXL1BlockNumber(1001, true),
      fees: {
        base: asHex('e8d4a51000', true),
        gasLimit: asHex('038d7ea4c68000', true),
        gasPrice: asHex('02540be400', true),
        priority: asHex('00', true),
      },
      from: account.address,
      nbf: asXL1BlockNumber(1, true),
      payload_hashes: [
        asHash('34e5eadb2ccfc7005e224bfa6c3d10c32087d63238005efeaef9c67a85ed6fa2', true),
        asHash('eb28b0213854d3b5f255806c2261e568fabcef8afa8b7d7f504bee35d9bce917', true),
      ],
      payload_schemas: [
        asSchema('network.xyo.hash', true),
        asSchema('network.xyo.id', true),
      ],
      previous_hashes: [],
      schema: asSchema('network.xyo.boundwitness', true),
      script: [
        'elevate|34e5eadb2ccfc7005e224bfa6c3d10c32087d63238005efeaef9c67a85ed6fa2',
      ],
    } satisfies Unsigned<TransactionBoundWitness>
    const signed = await signTransaction(bw, account)
    expect(signed).toBeDefined()
    const validationErrors = await new BoundWitnessValidator(signed).validate()
    expect(validationErrors.length).toBe(0)
  })
})
