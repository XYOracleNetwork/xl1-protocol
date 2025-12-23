import type {
  Address, Hash, Hex,
} from '@xylabs/sdk-js'
import { PayloadBuilder } from '@xyo-network/payload-builder'
import type { Sequence } from '@xyo-network/payload-model'
import type { HydratedTransactionWithStorageMeta } from '@xyo-network/xl1-protocol'
import {
  asHydratedTransactionWithStorageMeta,
  TransactionBoundWitnessZod,
} from '@xyo-network/xl1-protocol'
import {
  describe, expect, it,
} from 'vitest'

import { transactionBlockByteCount } from '../transactionBlockByteCount.ts'

const hydratedTransaction = asHydratedTransactionWithStorageMeta([
  {
    schema: 'network.xyo.boundwitness',
    addresses: [
      '136c12e131f5e3eef708dbde954a2841dd72f9af' as Address,
    ],
    payload_hashes: [
      '6d12a4aae2d7056b5b9b1a5e078c883e7ebf887a86d16a4e5e87b5940658873d' as Hash,
      '1f9b639358aefa6f3c2467a7d571cde3b68b8fd5d9c7af6a14d0a4023832286f' as Hash,
    ],
    payload_schemas: [
      'network.xyo.hash',
      'network.xyo.crypto.asset',
    ],
    previous_hashes: [
      null,
    ],
    $signatures: [
      'c6c4101d2854046974cebd14a941e61ff969f7cf523f677bec2907d262ad98235e00bf829be6344241b5f25cb313c3cadeb0b0abda618b8cfee359859d4246f4' as Hex,
    ],
    nbf: 25_383,
    exp: 26_383,
    fees: {
      base: '038d7ea4c68000' as Hex,
      gasLimit: '0de0b6b3a7640000' as Hex,
      gasPrice: '09184e72a000' as Hex,
      priority: '00' as Hex,
    },
    chain: 'a82920051db4fcbb804463440dd45e03f72442fd' as Address,
    from: '136c12e131f5e3eef708dbde954a2841dd72f9af' as Address,
    script: [
      'elevate|6d12a4aae2d7056b5b9b1a5e078c883e7ebf887a86d16a4e5e87b5940658873d',
    ],
    _dataHash: '9c6c0ebf16761fc219d8235b398fa058db05f3b139a821f812683c5434e4d08b' as Hash,
    _hash: 'bd5909fa90603cba7c794ce8358140467a2aeee1845feaabcac3ad1d3e0dd48a' as Hash,
    _sequence: '0000000000000000000000003e0dd48a' as Sequence,
  },
  [
    {
      schema: 'network.xyo.hash',
      hash: '1f9b639358aefa6f3c2467a7d571cde3b68b8fd5d9c7af6a14d0a4023832286f',
      _dataHash: '6d12a4aae2d7056b5b9b1a5e078c883e7ebf887a86d16a4e5e87b5940658873d' as Hash,
      _hash: '6d12a4aae2d7056b5b9b1a5e078c883e7ebf887a86d16a4e5e87b5940658873d' as Hash,
      _sequence: '000001975b401332000000030658873d' as Sequence,
    },
  ],
], true)

describe('transactionBlockByteCount', () => {
  it('calculates correct byte count for a transaction with no payloads', () => {
    // Expected byte count - transaction only (no payloads)
    const expectedCleanTransaction = TransactionBoundWitnessZod.parse(hydratedTransaction[0])
    const expectedCleanPayloads = PayloadBuilder.omitStorageMeta(hydratedTransaction[1])
    const expectedByteCount = JSON.stringify(expectedCleanTransaction).length
      + expectedCleanPayloads.reduce((acc, payload) => acc + JSON.stringify(payload).length, 0)

    // Act
    const actualByteCount = transactionBlockByteCount(hydratedTransaction)

    // Assert
    expect(actualByteCount).toBe(expectedByteCount)
  })

  it('calculates correct byte count for a transaction with multiple payloads', () => {
    // Expected byte count - transaction + payloads (without $meta)
    const expectedCleanTransaction = PayloadBuilder.omitStorageMeta(hydratedTransaction[0])
    const expectedCleanPayloads = PayloadBuilder.omitStorageMeta(hydratedTransaction[1])
    const expectedByteCount
      = JSON.stringify(expectedCleanTransaction).length
        + expectedCleanPayloads.reduce((acc, payload) => acc + JSON.stringify(payload).length, 0)

    // Act
    const actualByteCount = transactionBlockByteCount(hydratedTransaction)

    // Assert
    expect(actualByteCount).toBe(expectedByteCount)
  })

  it('handles transaction with empty payload array', () => {
    // Arrange
    const emptyPayloadsTransaction: HydratedTransactionWithStorageMeta = [
      { ...hydratedTransaction[0] },
      [], // Empty payload array
    ]

    // Expected byte count - transaction only with no payloads
    const expectedCleanTransaction = PayloadBuilder.omitStorageMeta(emptyPayloadsTransaction[0])
    const expectedByteCount = JSON.stringify(expectedCleanTransaction).length

    // Act
    const actualByteCount = transactionBlockByteCount(emptyPayloadsTransaction)

    // Assert
    expect(actualByteCount).toBe(expectedByteCount)
  })

  it('correctly handles payloads with complex nested structures', async () => {
    // Arrange
    const complexPayload = await PayloadBuilder.addStorageMeta({
      schema: 'network.xyo.complex',
      data: {
        nested: {
          array: [1, 2, 3, 4, 5],
          objects: [
            { id: 1, name: 'item1' },
            { id: 2, name: 'item2' },
          ],
          deepNesting: { level1: { level2: { level3: 'deep value' } } },
        },
      },
    })

    const complexTransaction: HydratedTransactionWithStorageMeta = [
      { ...hydratedTransaction[0] },
      [complexPayload],
    ]

    // Expected byte count
    const expectedCleanTransaction = PayloadBuilder.omitStorageMeta(complexTransaction[0])
    const expectedCleanPayloads = PayloadBuilder.omitStorageMeta([complexPayload])
    const expectedByteCount
      = JSON.stringify(expectedCleanTransaction).length
        + JSON.stringify(expectedCleanPayloads[0]).length

    // Act
    const actualByteCount = transactionBlockByteCount(complexTransaction)

    // Assert
    expect(actualByteCount).toBe(expectedByteCount)
  })

  it('returns correct byte count for transaction with multiple large payloads', async () => {
    // Arrange
    const largePayloads = await PayloadBuilder.addStorageMeta(Array.from({ length: 5 }, (_, i) => ({
      schema: `network.xyo.test.${i}`,
      data: Array.from({ length: 100 }, (_, j) => `data-item-${j}`),
      metadata: {
        timestamp: Date.now(),
        source: `test-source-${i}`,
        tags: Array.from({ length: 10 }, (_, k) => `tag-${k}`),
      },
      _dataHash: `datahash${i}`,
      _hash: `hash${i}`,
    })))

    const largeTransaction: HydratedTransactionWithStorageMeta = [
      { ...hydratedTransaction[0] },
      largePayloads,
    ]

    // Expected byte count
    const expectedCleanTransaction = PayloadBuilder.omitStorageMeta(largeTransaction[0])
    const expectedCleanPayloads = PayloadBuilder.omitStorageMeta(largePayloads)

    let expectedByteCount = JSON.stringify(expectedCleanTransaction).length
    for (const payload of expectedCleanPayloads) {
      expectedByteCount += JSON.stringify(payload).length
    }

    // Act
    const actualByteCount = transactionBlockByteCount(largeTransaction)

    // Assert
    expect(actualByteCount).toBe(expectedByteCount)
  })

  it('handles transactions with special characters in payloads', async () => {
    // Arrange
    const specialCharPayload = await PayloadBuilder.addStorageMeta({
      schema: 'network.xyo.special',
      text: 'Special characters: 你好, ñáéíóú, 🚀 💻 🔗, \u0000\u0001\u0002',
      escapes: '\\n\\t\\r\\"\\\'\\\\',
      _hash: 'special-hash',
    })

    const specialTransaction: HydratedTransactionWithStorageMeta = [
      { ...hydratedTransaction[0] },
      [specialCharPayload],
    ]

    // Expected byte count
    const expectedCleanTransaction = PayloadBuilder.omitStorageMeta(specialTransaction[0])
    const expectedCleanPayload = PayloadBuilder.omitStorageMeta([specialCharPayload])
    const expectedByteCount
      = JSON.stringify(expectedCleanTransaction).length
        + JSON.stringify(expectedCleanPayload[0]).length

    // Act
    const actualByteCount = transactionBlockByteCount(specialTransaction)

    // Assert
    expect(actualByteCount).toBe(expectedByteCount)
  })

  it('correctly omits all storage metadata fields from byte count', async () => {
    // Arrange
    const txWithExtraMeta = await PayloadBuilder.addStorageMeta({
      ...hydratedTransaction[0],
      _extraMeta1: 'should be omitted',
      _extraMeta2: 'should be omitted as well',
    })

    const payloadWithExtraMeta = await PayloadBuilder.addStorageMeta({
      schema: 'network.xyo.test',
      data: 'test data',
      _extraMeta1: 'should be omitted',
      _extraMeta2: 'should be omitted as well',
    })

    const transactionWithExtraMeta: HydratedTransactionWithStorageMeta = [
      txWithExtraMeta,
      [payloadWithExtraMeta],
    ]

    // Expected byte count - all meta fields should be omitted
    const expectedCleanTransaction = PayloadBuilder.omitStorageMeta(txWithExtraMeta)
    const expectedCleanPayload = PayloadBuilder.omitStorageMeta([payloadWithExtraMeta])
    const expectedByteCount
      = JSON.stringify(expectedCleanTransaction).length
        + JSON.stringify(expectedCleanPayload[0]).length

    // Act
    const actualByteCount = transactionBlockByteCount(transactionWithExtraMeta)

    // Assert
    expect(actualByteCount).toBe(expectedByteCount)
    // Verify meta fields are actually omitted
    expect(expectedCleanTransaction).not.toHaveProperty('$meta')
    expect(expectedCleanTransaction).not.toHaveProperty('_extraMeta1')
    expect(expectedCleanPayload[0]).not.toHaveProperty('$meta')
    expect(expectedCleanPayload[0]).not.toHaveProperty('_extraMeta1')
  })
})
