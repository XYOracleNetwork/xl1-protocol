import type { Address, Hash } from '@xylabs/sdk-js'
import {
  isAddress, isArray, isHash,
  isNumber, isObject,
} from '@xylabs/sdk-js'
import type { AccountInstance } from '@xyo-network/account-model'
import type {
  AllowedBlockPayload, AttoXL1, ChainId, SignedHydratedTransaction, XL1BlockNumber,
} from '@xyo-network/xl1-protocol'

export interface BaseBuildBlockOptions {
  blockPayloads: AllowedBlockPayload[]
  chainId: ChainId
  chainStepRewardAddress?: Address
  previousBlockNumber?: XL1BlockNumber
  protocol?: number
  signers: AccountInstance[]
  txs: SignedHydratedTransaction[]
}

export const isBaseBuildBlockOptions = (value: unknown): value is BaseBuildBlockOptions => {
  if (!isObject(value)) {
    return false
  }
  const typedValue = value as BaseBuildBlockOptions
  if (!isArray(typedValue.blockPayloads) || !isAddress(typedValue.chainId) || !isArray(typedValue.signers) || !isArray(typedValue.txs)) {
    return false
  }
  return true
}

export interface BuildGenesisBlockOptions extends BaseBuildBlockOptions {
  previousBlockHash: null
}

export const isBuildGenesisBlockOptions = (value: unknown): value is BuildGenesisBlockOptions => {
  if (!isBaseBuildBlockOptions(value)) {
    return false
  }
  const typedValue = value as BuildGenesisBlockOptions
  if (typedValue.previousBlockHash !== null) {
    return false
  }
  if (typedValue.previousBlockNumber !== undefined) {
    return false
  }
  return true
}

export interface BuildNextBlockOptions extends BaseBuildBlockOptions {
  previousBlockHash: Hash
  previousBlockNumber: XL1BlockNumber
  previousStepHashes: Hash[]
  stepRewardPoolBalance: AttoXL1
}

export const isBuildNextBlockOptions = (value: unknown): value is BuildNextBlockOptions => {
  if (!isBaseBuildBlockOptions(value)) {
    return false
  }
  const typedValue = value as BuildNextBlockOptions
  if (!isHash(typedValue.previousBlockHash)) {
    return false
  }
  if (!isNumber(typedValue.previousBlockNumber)) {
    return false
  }
  if (!isArray(typedValue.previousStepHashes)) {
    return false
  }
  return true
}

export type BuildBlockOptions = BuildGenesisBlockOptions | BuildNextBlockOptions
