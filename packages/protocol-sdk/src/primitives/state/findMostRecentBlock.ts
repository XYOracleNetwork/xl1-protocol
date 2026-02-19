import type { NextOptions, ReadArchivist } from '@xyo-network/archivist-model'
import type {
  Payload, Sequence, WithStorageMeta,
} from '@xyo-network/sdk-js'
import type { SignedBlockBoundWitnessWithHashMeta } from '@xyo-network/xl1-protocol'
import { isSignedBlockBoundWitnessWithStorageMeta } from '@xyo-network/xl1-protocol'

// TODO: Use some smart value relative to DEFAULT_BLOCK_SIZE
// to ensure we're likely to find it in a single request
// without bringing back too much data
const DEFAULT_NEXT_OPTIONS: NextOptions = { limit: 50 }

/**
 * Iterates an archivist to find the most recent block
 * @param chainArchivist The archivist to iterate over for the most recent chain block
 * @param nextOptions The options to use when iterating the archivist
 * @param maxIterations The max number of iterations to perform when finding the most recent block
 * @returns The most recent block found in the archivist or undefined if no blocks are found
 */
export const findMostRecentBlock = async (
  chainArchivist: ReadArchivist,
  nextOptions: NextOptions = DEFAULT_NEXT_OPTIONS,
  maxIterations = Number.POSITIVE_INFINITY,
): Promise<SignedBlockBoundWitnessWithHashMeta | undefined> => {
  let mostRecentBlock: SignedBlockBoundWitnessWithHashMeta | undefined
  let cursor: Sequence | undefined
  let batch: WithStorageMeta<Payload>[]
  let iterations = 0
  do {
    batch = await chainArchivist.next({
      ...nextOptions, order: 'desc', cursor,
    })
    const blocks = batch.filter(isSignedBlockBoundWitnessWithStorageMeta)
    const last = blocks?.at(0)
    if (last) {
      mostRecentBlock = last
      break
    } else {
      cursor = batch.at(-1)?._sequence
    }
    iterations = iterations + 1
  } while (batch.length > 0 && iterations < maxIterations)
  return mostRecentBlock
}
