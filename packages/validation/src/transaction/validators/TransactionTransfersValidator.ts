import type { Address } from '@xylabs/sdk-js'
import { isDefined, isUndefined } from '@xylabs/sdk-js'
import type {
  HydratedTransactionValidationFunction, StepIdentity,
  Transfer,
} from '@xyo-network/xl1-protocol'
import { HydratedTransactionValidationError, isTransfer } from '@xyo-network/xl1-protocol'
import {
  completedStepRewardAddress, derivedReceiveAddress, elevatedPayloads,
} from '@xyo-network/xl1-protocol-sdk'

export type SignerValidator = (signer: Address, signee: Address, context?: { address?: Address; scope?: string; step?: StepIdentity }) => boolean

export type SignerMapping = Map<Address, Address[]>

export const SelfSignerValidator: SignerValidator = (signer: Address, signee: Address) => signer === signee

export const CompletedStepRewardAddressValidatorFactory = (allowedSigners: Address[]): SignerValidator => (
  signer: Address,
  signee: Address,
  context?: { step?: StepIdentity },
) => {
  const step = context?.step
  if (isDefined(step)) {
    const contextAddress = completedStepRewardAddress(step)
    return allowedSigners.includes(signer) && signee === contextAddress
  } else {
    return false
  }
}

export const DerivedReceiveAddressValidatorFactory = (allowedSigners: Address[], allowedScope: string): SignerValidator => (
  signer: Address,
  signee: Address,
  context?: { address?: Address; scope?: string },
) => {
  const { address, scope } = context ?? {}
  if (scope !== allowedScope) {
    return false
  }
  if (isDefined(address)) {
    const derivedAddress = derivedReceiveAddress(address, scope)
    return allowedSigners.includes(signer) && signee === derivedAddress
  } else {
    return false
  }
}

export function TransactionTransfersValidatorFactory(
  signerValidators: SignerValidator[] = [SelfSignerValidator],
): HydratedTransactionValidationFunction {
  return async (
    context,
    hydratedTx,
  ) => {
    const errors: HydratedTransactionValidationError[] = []
    const signer = hydratedTx[0].from
    try {
      const payloads = elevatedPayloads(hydratedTx)
      const transfers = payloads.filter(isTransfer) as Transfer[]
      for (const transfer of transfers) {
        if (isUndefined(signerValidators.find(v => v(signer, transfer.from, transfer.context)))) {
          errors.push(new HydratedTransactionValidationError(
            hydratedTx[0]._hash,
            hydratedTx,
            `transfer from address ${transfer.from} is not authorized by signer ${signer}`,
          ))
        }
      }
    } catch (ex) {
      errors.push(new HydratedTransactionValidationError(hydratedTx[0]._hash, hydratedTx, 'validation excepted', ex))
    }
    return await Promise.resolve(errors)
  }
}
