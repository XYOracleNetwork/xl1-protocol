import type { Address } from '@xylabs/sdk-js'
import type { AccountInstance } from '@xyo-network/sdk-js'
import { Account } from '@xyo-network/sdk-js'
import type {
  SignedHydratedTransactionWithHashMeta,
  StepIdentity,
} from '@xyo-network/xl1-protocol'
import { asXL1BlockNumber } from '@xyo-network/xl1-protocol'
import {
  buildRandomTransaction,
  buildTransaction,
  completedStepRewardAddress,
  createTransferPayload,
  derivedReceiveAddress,
} from '@xyo-network/xl1-protocol-sdk'
import {
  beforeAll, beforeEach, describe, expect, it,
} from 'vitest'

import {
  CompletedStepRewardAddressValidatorFactory,
  DerivedReceiveAddressValidatorFactory,
  SelfSignerValidator,
  TransactionTransfersValidatorFactory,
} from '../TransactionTransfersValidator.ts'

describe('TransactionTransfersValidator', () => {
  const chainId = 'a82920051db4fcbb804463440dd45e03f72442fd' as Address
  const context = {
    chainId,
    singletons: {},
  }

  let signer: AccountInstance

  beforeAll(async () => {
    signer = await Account.random()
  })

  // ─── SelfSignerValidator ─────────────────────────────────────────────────────

  describe('SelfSignerValidator', () => {
    it('should return true when signer equals signee', () => {
      expect(SelfSignerValidator('aabbcc' as Address, 'aabbcc' as Address)).toBe(true)
    })

    it('should return false when signer does not equal signee', () => {
      expect(SelfSignerValidator('aabbcc' as Address, 'ddeeff' as Address)).toBe(false)
    })
  })

  // ─── CompletedStepRewardAddressValidatorFactory ───────────────────────────────

  describe('CompletedStepRewardAddressValidatorFactory', () => {
    const step: StepIdentity = { block: asXL1BlockNumber(100, true), step: 0 }

    it('should return false when step context is undefined', async () => {
      const signerAddress = (await Account.random()).address
      const validator = CompletedStepRewardAddressValidatorFactory([signerAddress])
      const rewardAddress = completedStepRewardAddress(step)
      expect(validator(signerAddress, rewardAddress, {})).toBe(false)
    })

    it('should return false when signer is not in allowedSigners', async () => {
      const signerAddress = (await Account.random()).address
      const otherAddress = (await Account.random()).address
      const validator = CompletedStepRewardAddressValidatorFactory([otherAddress])
      const rewardAddress = completedStepRewardAddress(step)
      expect(validator(signerAddress, rewardAddress, { step })).toBe(false)
    })

    it('should return false when signee does not match completedStepRewardAddress', async () => {
      const signerAddress = (await Account.random()).address
      const wrongAddress = (await Account.random()).address
      const validator = CompletedStepRewardAddressValidatorFactory([signerAddress])
      expect(validator(signerAddress, wrongAddress, { step })).toBe(false)
    })

    it('should return true when signer is allowed and signee matches completedStepRewardAddress', async () => {
      const signerAddress = (await Account.random()).address
      const validator = CompletedStepRewardAddressValidatorFactory([signerAddress])
      const rewardAddress = completedStepRewardAddress(step)
      expect(validator(signerAddress, rewardAddress, { step })).toBe(true)
    })
  })

  // ─── DerivedReceiveAddressValidatorFactory ────────────────────────────────────

  describe('DerivedReceiveAddressValidatorFactory', () => {
    const allowedScope = 'stake'

    it('should return false when scope does not match allowedScope', async () => {
      const signerAddress = (await Account.random()).address
      const address = (await Account.random()).address
      const validator = DerivedReceiveAddressValidatorFactory([signerAddress], allowedScope)
      const derived = derivedReceiveAddress(address, allowedScope)
      expect(validator(signerAddress, derived, { address, scope: 'other' })).toBe(false)
    })

    it('should return false when context address is undefined', async () => {
      const signerAddress = (await Account.random()).address
      const address = (await Account.random()).address
      const validator = DerivedReceiveAddressValidatorFactory([signerAddress], allowedScope)
      const derived = derivedReceiveAddress(address, allowedScope)
      expect(validator(signerAddress, derived, { scope: allowedScope })).toBe(false)
    })

    it('should return false when signer is not in allowedSigners', async () => {
      const signerAddress = (await Account.random()).address
      const otherAddress = (await Account.random()).address
      const address = (await Account.random()).address
      const validator = DerivedReceiveAddressValidatorFactory([otherAddress], allowedScope)
      const derived = derivedReceiveAddress(address, allowedScope)
      expect(validator(signerAddress, derived, { address, scope: allowedScope })).toBe(false)
    })

    it('should return false when signee does not match derivedReceiveAddress', async () => {
      const signerAddress = (await Account.random()).address
      const address = (await Account.random()).address
      const wrongAddress = (await Account.random()).address
      const validator = DerivedReceiveAddressValidatorFactory([signerAddress], allowedScope)
      expect(validator(signerAddress, wrongAddress, { address, scope: allowedScope })).toBe(false)
    })

    it('should return true when all conditions are met', async () => {
      const signerAddress = (await Account.random()).address
      const address = (await Account.random()).address
      const validator = DerivedReceiveAddressValidatorFactory([signerAddress], allowedScope)
      const derived = derivedReceiveAddress(address, allowedScope)
      expect(validator(signerAddress, derived, { address, scope: allowedScope })).toBe(true)
    })

    it('should return false when context is undefined', async () => {
      const signerAddress = (await Account.random()).address
      const address = (await Account.random()).address
      const validator = DerivedReceiveAddressValidatorFactory([signerAddress], allowedScope)
      const derived = derivedReceiveAddress(address, allowedScope)
      expect(validator(signerAddress, derived)).toBe(false)
    })
  })

  // ─── TransactionTransfersValidatorFactory ────────────────────────────────────

  describe('TransactionTransfersValidatorFactory', () => {
    const TransactionTransfersValidator = TransactionTransfersValidatorFactory()

    describe('with self-signed transfer (default SelfSignerValidator)', () => {
      let transaction: SignedHydratedTransactionWithHashMeta

      beforeEach(async () => {
        transaction = await buildRandomTransaction(chainId, [], signer)
      })

      it('should return no errors when transfer.from matches the transaction signer', async () => {
        const errors = await TransactionTransfersValidator(context, transaction)
        expect(errors).toEqual([])
      })
    })

    describe('with unauthorized transfer', () => {
      let transaction: SignedHydratedTransactionWithHashMeta
      let otherAddress: Address

      beforeEach(async () => {
        otherAddress = (await Account.random()).address
        const receiver = (await Account.random()).address
        const transfer = createTransferPayload(otherAddress, { [receiver]: 1n })
        transaction = await buildTransaction(
          chainId,
          [transfer],
          [],
          signer,
          asXL1BlockNumber(0, true),
          asXL1BlockNumber(1000, true),
        )
      })

      it('should return an error when transfer.from does not match the transaction signer', async () => {
        const errors = await TransactionTransfersValidator(context, transaction)
        expect(errors.length).toBe(1)
      })

      it('should include both the unauthorized address and the signer in the error message', async () => {
        const errors = await TransactionTransfersValidator(context, transaction)
        expect(errors[0].message).toBe(
          `transfer from address ${otherAddress} is not authorized by signer ${signer.address}`,
        )
      })
    })

    describe('with custom validator that approves all transfers', () => {
      it('should return no errors even when transfer.from does not match the signer', async () => {
        const allowAllValidator = TransactionTransfersValidatorFactory([() => true])
        const otherAddress = (await Account.random()).address
        const receiver = (await Account.random()).address
        const transfer = createTransferPayload(otherAddress, { [receiver]: 1n })
        const transaction = await buildTransaction(
          chainId,
          [transfer],
          [],
          signer,
          asXL1BlockNumber(0, true),
          asXL1BlockNumber(1000, true),
        )
        const errors = await allowAllValidator(context, transaction)
        expect(errors).toEqual([])
      })
    })

    describe('with missing elevated payloads', () => {
      it('should return a validation excepted error', async () => {
        // Strip payloads so elevatedPayloads() throws inside the try block
        const [bw] = await buildRandomTransaction(chainId, [], signer)
        const txWithMissingPayloads = [bw, []] as SignedHydratedTransactionWithHashMeta
        const errors = await TransactionTransfersValidator(context, txWithMissingPayloads)
        expect(errors.length).toBe(1)
        expect(errors[0].message).toBe('validation excepted')
      })
    })
  })
})
