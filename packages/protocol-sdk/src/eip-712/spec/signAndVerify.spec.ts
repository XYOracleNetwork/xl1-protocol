import {
  describe, expect, it,
} from 'vitest'

import { EIP712SignaturePayloadSchema } from '../Payloads/index.ts'
import { signEIP712Message } from '../sign.ts'
import { verifyEIP712Message } from '../verify.ts'
import { samplePayload, wallet } from './fixtures.ts'

describe('signEIP712Message', () => {
  it('should sign an EIP-712 message and return the correct payload', async () => {
    const payload = await signEIP712Message(wallet, samplePayload)

    expect(payload.address).toEqual(await wallet.getAddress())
    expect(payload.signature).toBeDefined()
    expect(payload.schema).toEqual(EIP712SignaturePayloadSchema)
    expect(payload.hash).toBeDefined()
  })

  it('should verify the signature of an EIP-712 message', async () => {
    const payload = await signEIP712Message(wallet, samplePayload)

    const isValidSignature = await verifyEIP712Message(samplePayload, payload)

    expect(isValidSignature).toBe(true)
  })
})
