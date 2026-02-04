import {
  asHash, type Hash, isDefined,
} from '@xylabs/sdk-js'
import { toSafeJsonString } from '@xylabs/sdk-js'
import type { Signed } from '@xyo-network/boundwitness-model'
import type { WithHashMeta } from '@xyo-network/payload-model'
import type {
  BlockBoundWitness, ChainContextRead, XL1BlockNumber,
} from '@xyo-network/xl1-protocol'
import {
  asSignedBlockBoundWitnessWithStorageMeta, SignedBlockBoundWitnessWithHashMetaZod, StepSizes,
} from '@xyo-network/xl1-protocol'

import { withContextCacheResponse } from '../../model/index.ts'

export async function blockFromBlockNumber(
  context: ChainContextRead,
  blockNumber: XL1BlockNumber,
): Promise<WithHashMeta<Signed<BlockBoundWitness>>> {
  const cacheKey = `${blockNumber}`
  const { chainMap, head } = context
  return await withContextCacheResponse(context, 'blockFromBlockNumber', cacheKey, async () => {
    const result = await chainMap.get(head._hash)
    if (!isDefined(result)) {
      throw new Error(`Head block not found for hash: ${head._hash}`)
    }
    let currentBlock = asSignedBlockBoundWitnessWithStorageMeta(
      result,
      () => `Found Payload is not a Signed<BlockBoundWitness>: ${JSON.stringify(result, null, 2)}`,
    )
    if (currentBlock.block < blockNumber) {
      throw new Error(`Block number ${blockNumber} is greater than head ${currentBlock.block}.`)
    }
    while (currentBlock.block > blockNumber) {
      let jumpHash: Hash | null = currentBlock.previous
      let jumpBlockNumber = currentBlock.block - 1
      for (const [step, stepSize] of StepSizes.entries()) {
        const possibleJumpBlockNumber = currentBlock.block - (currentBlock.block % stepSize) - 1
        if (possibleJumpBlockNumber >= blockNumber && possibleJumpBlockNumber <= jumpBlockNumber) {
          jumpBlockNumber = possibleJumpBlockNumber
          jumpHash = asHash(currentBlock.step_hashes?.at(step), () => `Step hash not found for step ${step} in block ${currentBlock.block}`)
        }
      }
      const newBlock = await chainMap.get(
        asHash(jumpHash, () => `Jump hash not found for block number [${blockNumber}]: ${jumpBlockNumber} ${toSafeJsonString(currentBlock, 10)}`),
      )
      if (!isDefined(newBlock)) {
        throw new Error(`Block not found for jump hash: ${jumpHash}`)
      }
      currentBlock = asSignedBlockBoundWitnessWithStorageMeta(
        newBlock,
        () => {
          const result = SignedBlockBoundWitnessWithHashMetaZod.safeParse(newBlock)
          return `Found Payload [jump hash] is not a Signed<BlockBoundWitness>: ${result.error}`
        },
      )
      if (currentBlock.block === blockNumber) {
        break
      }
      if (currentBlock.block < blockNumber) {
        throw new Error(`Block number ${blockNumber} is not a valid step block number for block ${head._hash}.`)
      }
    }
    return currentBlock
  })
}
