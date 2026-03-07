import type { BoundWitness } from '@xyo-network/sdk-js'
import { Account, BoundWitnessBuilder } from '@xyo-network/sdk-js'
import {
  describe, expect, it,
} from 'vitest'

import { BoundWitnessSignaturesValidator } from '../BoundWitnessSignatures.ts'

describe('BoundWitnessSignaturesValidator', () => {
  describe('with valid signatures', () => {
    it('should return no errors when BW has correct signatures', async () => {
      const signer = await Account.random()
      const [bw] = await new BoundWitnessBuilder().signers([signer]).build()
      const errors = await BoundWitnessSignaturesValidator(bw)
      expect(errors).toEqual([])
    })
  })

  describe('with no addresses', () => {
    it('should return no errors for an unsigned BW', async () => {
      const [bw] = await new BoundWitnessBuilder().build()
      const errors = await BoundWitnessSignaturesValidator(bw)
      expect(errors).toEqual([])
    })
  })

  describe('with invalid signatures', () => {
    it('should return errors when signatures do not match', async () => {
      const signer = await Account.random()
      const otherSigner = await Account.random()
      const [bw] = await new BoundWitnessBuilder().signers([signer]).build()
      // Replace addresses with other signer's address so signature check fails
      const tampered: BoundWitness = {
        ...bw,
        addresses: [otherSigner.address],
      }
      const errors = await BoundWitnessSignaturesValidator(tampered)
      expect(errors.length).toBeGreaterThan(0)
    })

    it('should use undefined for missing signature ($signatures[index] ?? undefined)', async () => {
      const signer = await Account.random()
      const [bw] = await new BoundWitnessBuilder().signers([signer]).build()
      // BW has an address but empty $signatures, so $signatures[0] is undefined
      const noSigBw: BoundWitness = {
        ...bw,
        $signatures: [],
      }
      const errors = await BoundWitnessSignaturesValidator(noSigBw)
      // Should return errors since signature is undefined/invalid
      expect(errors.length).toBeGreaterThan(0)
    })
  })

  describe('with malformed BoundWitness', () => {
    it('should return a validation excepted error', async () => {
      // Throw on any access except _hash (used in the catch handler)
      const throwingBw = new Proxy({} as BoundWitness, {
        get(_target, key) {
          if (key === '_hash') return
          throw new Error('BW access failed')
        },
      })
      const errors = await BoundWitnessSignaturesValidator(throwingBw)
      expect(errors.length).toBe(1)
      expect(errors[0].message).toBe('validation excepted')
    })
  })
})
