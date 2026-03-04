import {
  describe, expect, it,
} from 'vitest'

import { SignedHydratedTransactionWithHashMetaZod } from '../HydratedTransaction.ts'

const signedHydratedTransaction = [
  {
    schema: 'network.xyo.boundwitness',
    addresses: [
      'ef8d1b062a6991bdb066abccf572342465dd68e9',
    ],
    payload_hashes: [
      'a4b2301de85e4fbe00eda32373b5a379831db8eab7ae019a75f9a74303b57186',
      '9fefee3eba6bb8216e32bfa1bb39f3cf8fc76a2ee20fb1022794b534750290e8',
    ],
    payload_schemas: [
      'network.xyo.chain.bridge.intent',
      'network.xyo.transfer',
    ],
    previous_hashes: [
      null,
    ],
    $signatures: [
      'f72c601a97aaf5503536b02ff56e4e54982d5b61532ebdff53871b5c574edbc15e292a02ba472350301b8aa07605147633b9248663e011cad5928363c0cf3a63',
    ],
    nbf: 739_569,
    exp: 740_569,
    fees: {
      base: 'e8d4a51000',
      gasLimit: '038d7ea4c68000',
      gasPrice: '02540be400',
      priority: '00',
    },
    chain: '319e667ced10452a117472811130444ded357f26',
    from: 'ef8d1b062a6991bdb066abccf572342465dd68e9',
    script: [
      'elevate|a4b2301de85e4fbe00eda32373b5a379831db8eab7ae019a75f9a74303b57186',
      'elevate|9fefee3eba6bb8216e32bfa1bb39f3cf8fc76a2ee20fb1022794b534750290e8',
    ],
    _dataHash: '0b51c777ac00574a77eb1f2318a25dfbc3e6697b56dbfd58c6ad01db08c266e8',
    _hash: 'c37abeb7ddc3d20ed093fba78489866eb8b422dfd0f18b0860a2a8c6f5b2a481',
  },
  [
    {
      schema: 'network.xyo.chain.bridge.intent',
      dest: '01',
      destAddress: '9a1b29ea95cf5499a0afbe36d0caad63da94079f',
      destAmount: '06c2edc3c39c0ea80000',
      destToken: 'f72ae3e0da743033abd7a407557d684c1ae66aed',
      nonce: '89885060-2d40-4a63-a568-321b4880765e',
      src: '319e667ced10452a117472811130444ded357f26',
      srcAddress: 'ef8d1b062a6991bdb066abccf572342465dd68e9',
      srcAmount: '06c2edc3c39c0ea80000',
      srcToken: '319e667ced10452a117472811130444ded357f26',
      _dataHash: 'a4b2301de85e4fbe00eda32373b5a379831db8eab7ae019a75f9a74303b57186',
      _hash: 'a4b2301de85e4fbe00eda32373b5a379831db8eab7ae019a75f9a74303b57186',
    },
    {
      schema: 'network.xyo.transfer',
      context: {
        feeFixed: '3635c9adc5dea00000',
        feeVariable: '33ed886ed40aae0000',
        srcAmount: '06c2edc3c39c0ea80000',
      },
      epoch: 1_772_639_733_404,
      from: 'ef8d1b062a6991bdb066abccf572342465dd68e9',
      transfers: { e8b570880c984075bca62ab6b56aa758eb9aa45b: '072d1115e035f7f60000' },
      _dataHash: '9fefee3eba6bb8216e32bfa1bb39f3cf8fc76a2ee20fb1022794b534750290e8',
      _hash: '9fefee3eba6bb8216e32bfa1bb39f3cf8fc76a2ee20fb1022794b534750290e8',
    },
  ],
]

describe('SignedHydratedTransactionWithHashMetaZod', () => {
  it('should parse a SignedHydratedTransactionWithHashMeta', () => {
    const result = SignedHydratedTransactionWithHashMetaZod.safeParse(signedHydratedTransaction)
    expect(result.success).toBe(true)
    expect(result.data).toEqual(signedHydratedTransaction)
  })
})
