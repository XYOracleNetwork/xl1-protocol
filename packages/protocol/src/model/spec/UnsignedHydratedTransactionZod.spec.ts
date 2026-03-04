import {
  describe, expect, it,
} from 'vitest'

import { UnsignedHydratedTransactionZod } from '../HydratedTransaction.ts'

const unsignedHydratedTransaction = [
  {
    $signatures: [],
    chain: '0000000000000000000000000000000000000000',
    fees: {
      base: 'e8d4a51000',
      gasLimit: '038d7ea4c68000',
      gasPrice: '02540be400',
      priority: '00',
    },
    nbf: 1,
    exp: 1001,
    from: 'ce544b3bab3131c8c68954873e281fda3ede8f3b',
    script: [
      'elevate|e70f82c755ac75847f9d1c6b45d96099b343571d724e5383569724c85cc9d303',
    ],
    addresses: [],
    payload_hashes: [
      'e70f82c755ac75847f9d1c6b45d96099b343571d724e5383569724c85cc9d303',
      'd5ab1ca9dba010cfe626b8e6a75df0665005dfe4b85c16a30d4c9520cc021970',
    ],
    payload_schemas: [
      'network.xyo.hash',
      'network.xyo.id',
    ],
    previous_hashes: [],
    schema: 'network.xyo.boundwitness',
  },
  [
    {
      hash: 'd5ab1ca9dba010cfe626b8e6a75df0665005dfe4b85c16a30d4c9520cc021970',
      schema: 'network.xyo.hash',
    },
    {
      salt: 'Hello from Sample - 2025-08-08T17:47:51.106Z',
      schema: 'network.xyo.id',
    },
  ],
]

describe('UnsignedHydratedTransaction', () => {
  it('should parse an UnsignedHydratedTransaction', () => {
    const result = UnsignedHydratedTransactionZod.safeParse(unsignedHydratedTransaction)
    expect(result.success).toBe(true)
    expect(result.data).toEqual(unsignedHydratedTransaction)
  })
})
