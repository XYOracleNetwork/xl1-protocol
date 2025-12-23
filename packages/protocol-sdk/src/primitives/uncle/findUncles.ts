import {
  assertEx,
  exists, type Hash,
} from '@xylabs/sdk-js'
import { isTransactionBoundWitness, type SignedHydratedBlockWithHashMeta } from '@xyo-network/xl1-protocol'

import type { BaseContext } from '../../model/index.ts'

function blocksToChains(blocks: SignedHydratedBlockWithHashMeta[]) {
  const chains: SignedHydratedBlockWithHashMeta[][] = []
  const map = new Map<Hash, SignedHydratedBlockWithHashMeta>()
  for (const block of blocks) {
    map.set(block[0]._hash, block)
  }
  for (const block of blocks) {
    let uncle: SignedHydratedBlockWithHashMeta[] = [block]
    let previous = block[0].previous ? map.get(block[0].previous) : undefined
    while (previous) {
      if (previous[0].block === (uncle[0][0].block - 1)) {
        uncle.unshift(previous)
        previous = previous[0].previous ? map.get(previous[0].previous) : undefined
      } else {
        // block number sequence is off
        uncle = []
        break
      }
    }
    if (uncle.length > 0) {
      chains.push(uncle)
    }
  }
  return chains
}

function toValidUncle(
  _context: BaseContext,
  finalizedWindowedChain: SignedHydratedBlockWithHashMeta[],
  possibleUncle: SignedHydratedBlockWithHashMeta[],
) {
  const finalizedWindowStartBlockNumber = finalizedWindowedChain.at(0)?.[0].block ?? -1
  const finalizedHead = assertEx(finalizedWindowedChain.at(-1), () => 'finalizedWindowedChain is empty')
  // prune the chain to match the finalized head

  const prunedPossibleUncle = possibleUncle.filter(b => b[0].block > finalizedHead[0].block)

  if (prunedPossibleUncle.length === 0) {
    return
  }

  if (prunedPossibleUncle[0][0].block !== finalizedHead[0].block + 1) {
    // uncle does not build on finalized head (block number mismatch)
    return
  }
  if (prunedPossibleUncle[0][0].previous !== finalizedHead[0]._hash) {
    // uncle does not build on finalized head (previous hash mismatch)
    return
  }
  const allUncleTransactions = prunedPossibleUncle.flatMap(b => b[1]).filter(isTransactionBoundWitness)
  const allFinalizedTransactions = finalizedWindowedChain.flatMap(b => b[1]).filter(isTransactionBoundWitness)
  const txPossiblyBeforeWindow = allUncleTransactions.find(tx => tx.nbf < finalizedWindowStartBlockNumber)
  if (txPossiblyBeforeWindow) {
    // uncle has a transaction that is valid before the finalized window
    return
  }
  const txExistsInWindow = allUncleTransactions.find(tx => allFinalizedTransactions.find(finalTx => finalTx._hash === tx._hash))
  if (txExistsInWindow) {
    // uncle has a transaction that is already in the finalized window
    return
  }
  return prunedPossibleUncle
}

export function findUncles(context: BaseContext, finalizedWindowedChain: SignedHydratedBlockWithHashMeta[], blocks: SignedHydratedBlockWithHashMeta[]) {
  return blocksToChains(blocks).map(chain => toValidUncle(context, finalizedWindowedChain, chain)).filter(exists)
}
