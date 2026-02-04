import type { Address } from '@xylabs/sdk-js'
import { Account } from '@xyo-network/account'
import type { ArchivistInstance } from '@xyo-network/archivist-model'
import { type ChainId, XYO_ZERO_ADDRESS } from '@xyo-network/xl1-protocol'

import { getEmptyProviderContext } from '../context/index.ts'
import {
  SimpleBlockViewer, SimpleChainContractViewer, SimpleFinalizationViewer,
} from '../simple/index.ts'
import { buildRandomChainArchivist } from './buildRandomChain.ts'

export interface GetSimpleBlockViewerLocatorParams {
  chainId?: ChainId
  finalizedArchivist?: ArchivistInstance
  minWithdrawalBlocks?: number
  rewardsContract?: Address
  stakingTokenAddress?: Address
}

export async function getSimpleBlockViewerLocator({
  chainId: chainIdIn, minWithdrawalBlocks = 10,
  finalizedArchivist: finalizedArchivistIn,
  rewardsContract = XYO_ZERO_ADDRESS, stakingTokenAddress = XYO_ZERO_ADDRESS,
}: GetSimpleBlockViewerLocatorParams) {
  const chainId = chainIdIn ?? (await Account.random()).address as ChainId
  const finalizedArchivist = finalizedArchivistIn ?? await buildRandomChainArchivist()
  const context = getEmptyProviderContext()
  context.locator.registerMany([
    SimpleChainContractViewer.factory<SimpleChainContractViewer>(SimpleChainContractViewer.dependencies, {
      chainId,
      minWithdrawalBlocks,
      rewardsContract,
      stakingTokenAddress,
    }),
    SimpleFinalizationViewer.factory<SimpleFinalizationViewer>(SimpleFinalizationViewer.dependencies, { finalizedArchivist }),
    SimpleBlockViewer.factory<SimpleBlockViewer>(SimpleBlockViewer.dependencies, { finalizedArchivist }),
  ])
  return context.locator
}
