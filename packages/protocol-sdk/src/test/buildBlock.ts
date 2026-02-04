/* eslint-disable complexity */
/* eslint-disable max-statements */
import type { Hex } from '@xylabs/sdk-js'
import {
  assertEx, isDefined, isHash, toSafeJsonString,
} from '@xylabs/sdk-js'
import { BoundWitnessBuilder } from '@xyo-network/boundwitness-builder'
import { PayloadBuilder } from '@xyo-network/payload-builder'
import type { Payload, WithStorageMeta } from '@xyo-network/payload-model'
import type {
  BlockBoundWitness, SignedHydratedBlockWithHashMeta, Transfer,
} from '@xyo-network/xl1-protocol'
import {
  asXL1BlockNumber, AttoXL1, isBlockBoundWitness, isExecutable, StepRewardFractions,
  StepSizes,
  XL1_PROTOCOL_VERSION,
  XYO_STEP_REWARD_ADDRESS,
  XYO_ZERO_ADDRESS,
} from '@xyo-network/xl1-protocol'

import { createTransferPayload } from '../createTransferPayload.ts'
import { completedStepRewardAddress } from '../primitives/index.ts'
import {
  type BuildBlockOptions, isBuildGenesisBlockOptions, isBuildNextBlockOptions,
} from './BuildBlockOptions.ts'

/*
//this is for testing only to speed up the pace
export const StepRewardFractions = [
  [0n, 1n], // 0%
  [1n, 10_000n], // 0.01%
  [2n, 1000n], // 0.2%
  [3n, 100n], // 3%
  [45n, 100n], // 45%
] as const
 */

function calculateCompletedStepReward(step: number, balance: AttoXL1): AttoXL1 {
  return AttoXL1(StepRewardFractions[step][0] * balance / StepRewardFractions[step][1])
}

export async function buildBlock(options: BuildBlockOptions): Promise<SignedHydratedBlockWithHashMeta> {
  const previousBlockNumber = isBuildGenesisBlockOptions(options) ? -1 : options.previousBlockNumber
  const blockNumber = asXL1BlockNumber(previousBlockNumber + 1, true)
  const inStepHashes = isBuildNextBlockOptions(options) ? options.previousStepHashes : []
  const previousBlockHash = isBuildNextBlockOptions(options) ? options.previousBlockHash : undefined
  const stepRewardPoolBalance = isBuildNextBlockOptions(options) ? options.stepRewardPoolBalance : AttoXL1(0n)
  const {
    chainId, txs,
    chainStepRewardAddress = XYO_STEP_REWARD_ADDRESS,
    blockPayloads, protocol = XL1_PROTOCOL_VERSION, signers,
  } = options
  const step_hashes: Hex[] = []

  for (const [tx] of txs) {
    if (tx.nbf > blockNumber) {
      throw new Error(`Transaction ${await PayloadBuilder.hash(tx)} not valid for block ${blockNumber} - NBF is ${tx.nbf}`)
    }
    if (tx.exp < blockNumber) {
      throw new Error(`Transaction ${await PayloadBuilder.hash(tx)} not valid for block ${blockNumber} - EXP is ${tx.exp}`)
    }
  }

  const completedStepRewardTransfers: Transfer[] = []

  // update the step hashes
  for (const [i, step] of StepSizes.entries()) {
    if (blockNumber < step) {
      break
    }
    if (blockNumber % step === 0) {
      if (StepRewardFractions[i][0] > 0 && chainStepRewardAddress !== XYO_ZERO_ADDRESS) {
        const completedStepRewardHolderAddress = completedStepRewardAddress({ block: blockNumber, step })
        const completedStepReward = calculateCompletedStepReward(i, stepRewardPoolBalance)
        completedStepRewardTransfers.push(createTransferPayload(chainStepRewardAddress, { [completedStepRewardHolderAddress]: completedStepReward }))
      }
      step_hashes.push(assertEx(previousBlockHash, () => `Previous block hash is required for step ${step} at block ${blockNumber}`))
    } else {
      if (isDefined(inStepHashes.at(i))) {
        step_hashes.push(inStepHashes[i])
      }
    }
  }

  const previous = previousBlockHash ?? null
  const block = blockNumber
  const txElevatedPayloads: WithStorageMeta<Payload>[] = []

  for (const [txBw, txPayloads] of txs) {
    if (isExecutable(txBw)) {
      const operations = txBw.script.map(op => op.split('|'))
      for (let [opCode, ...args] of operations) {
        switch (opCode) {
          case 'elevate': {
            const [hash, ...rest] = args
            const txPayloadsWithStorageMeta = await PayloadBuilder.addStorageMeta(txPayloads)
            assertEx(rest.length === 0, () => `Invalid elevate operation ${opCode} ${args} - Too many Arguments`)
            if (isHash(hash)) {
              assertEx(
                txBw.payload_hashes.includes(hash),
                () => `Invalid elevate operation ${opCode} ${args} - Hash not in payload hashes => ${toSafeJsonString(txBw, 20)}`,
              )
              const txPayload = assertEx(
                txPayloadsWithStorageMeta.find(p => p._hash === hash),
                () => `Invalid elevate operation ${opCode} ${args} - Payload not found`,
              )
              txElevatedPayloads.push(txPayload)
            } else {
              throw new Error(`Invalid elevate operation ${opCode} ${args} - Invalid hash`)
            }
            break
          }
          default: {
            throw new Error(`Invalid opCode ${opCode}`)
          }
        }
      }
    }
  }

  const payloads: Payload[] = [
    ...txs.map(([tx]) => tx),
    ...blockPayloads,
    ...txElevatedPayloads,
    ...completedStepRewardTransfers,
  ]

  const [bw, txPayloads] = await new BoundWitnessBuilder<BlockBoundWitness, WithStorageMeta<Payload>>()
    .fields({
      block, chain: chainId, previous, step_hashes, protocol,
    })
    .meta({ $epoch: Date.now(), $signatures: [] })
    .signers(signers)
    .payloads(await PayloadBuilder.addStorageMeta(payloads))
    .build()
  assertEx(isBlockBoundWitness(bw), () => 'Build of BlockBoundWitness failed')
  return [await PayloadBuilder.addStorageMeta(bw), txPayloads]
}
