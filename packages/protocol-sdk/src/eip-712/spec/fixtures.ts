import { Wallet } from 'ethers/wallet'

import type { EIP712DataPayload } from '../Payloads/index.ts'
import { EIP712DataPayloadSchema } from '../Payloads/index.ts'

const mnemonic = 'test test test test test test test test test test test junk'

export const wallet = Wallet.fromPhrase(mnemonic)

export const samplePayload: EIP712DataPayload = {
  schema: EIP712DataPayloadSchema,
  domain: {
    name: 'MyDApp',
    version: '1',
    chainId: 1,
  },
  types: {
    Payload: [
      { name: 'hash', type: 'string' },
      { name: 'schema', type: 'string' },
    ],
  },
  values: {
    hash: '0x1234567890abcdef',
    schema: EIP712DataPayloadSchema,
  },
}
