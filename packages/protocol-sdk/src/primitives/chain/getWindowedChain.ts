import {
  assertEx, type Hash, isDefined, isNull,
  spanRootAsync,
} from '@xylabs/sdk-js'
import type {
  BaseContext, BlockViewer, SignedHydratedBlockWithHashMeta,
} from '@xyo-network/xl1-protocol'

/**
 * Constructs a bounded, contiguous canonical chain ending at the current head.
 * @param blockViewer The BlockViewer to fetch blocks from
 * @param maxWindowSize The maximum size of the windowed chain
 * @param previousChain An optional previous chain to build upon
 * @returns A promise that resolves to the windowed chain of blocks
 */
export async function getWindowedChain(
  context: BaseContext,
  blockViewer: BlockViewer,
  maxWindowSize: number,
  previousChain: SignedHydratedBlockWithHashMeta[] = [],
):
Promise<SignedHydratedBlockWithHashMeta[]> {
  return await spanRootAsync('getWindowedChain', async () => {
    const newChain: SignedHydratedBlockWithHashMeta[] = []
    const previousChainByHash = new Map<Hash, SignedHydratedBlockWithHashMeta>(previousChain.map(block => [block[0]._hash, block]))
    const head = await blockViewer.currentBlock()
    let currentBlock: SignedHydratedBlockWithHashMeta | null = head
    console.log('[getWindowedChain] Current Block:', currentBlock?.[0]._hash)
    while (currentBlock !== null && newChain.length < maxWindowSize) {
      const currentBlockNumber = currentBlock[0].block
      const nextBlock = newChain[0]
      if (isDefined(nextBlock)) {
        const nextBlockNumber = nextBlock[0].block
        assertEx(
          currentBlockNumber === nextBlockNumber - 1,
          () => `[getWindowedChain] Non-monotonic block sequence detected: current=${currentBlockNumber}, next=${nextBlockNumber}`,
        )
      }
      assertEx(
        currentBlockNumber <= head[0].block,
        () => `[getWindowedChain] Current block number (${currentBlockNumber}) exceeds head block number (${head[0].block})`,
      )
      newChain.unshift(currentBlock)
      const previousBlockHash: Hash | null = currentBlock[0].previous
      if (isNull(previousBlockHash)) break
      currentBlock = previousChainByHash.get(previousBlockHash) ?? await blockViewer.blockByHash(previousBlockHash)
    }
    return newChain
  }, context)
}
