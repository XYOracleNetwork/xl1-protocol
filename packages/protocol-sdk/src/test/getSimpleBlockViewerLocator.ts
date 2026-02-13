import type { Address } from '@xylabs/sdk-js'
import type { ArchivistInstance } from '@xyo-network/archivist-model'
import { Account } from '@xyo-network/sdk-js'
import { type ChainId, XYO_ZERO_ADDRESS } from '@xyo-network/xl1-protocol'

import { getTestProviderContext } from '../_internal/index.ts'
import type { Config } from '../config/index.ts'
import { ConfigZod } from '../config/index.ts'
import {
  SimpleBlockViewer, SimpleChainContractViewer, SimpleFinalizationViewer,
} from '../simple/index.ts'
import { buildRandomChainArchivist } from './buildRandomChain.ts'

export interface TestSimpleBlockViewerLocatorParams {
  chainId?: ChainId
  config?: Config
  finalizedArchivist?: ArchivistInstance
  minWithdrawalBlocks?: number
  rewardsContract?: Address
  stakingTokenAddress?: Address
}

export async function getTestSimpleBlockViewerLocator({
  chainId: chainIdIn, minWithdrawalBlocks = 10,
  config = ConfigZod.parse({}),
  finalizedArchivist: finalizedArchivistIn,
  rewardsContract = XYO_ZERO_ADDRESS, stakingTokenAddress = XYO_ZERO_ADDRESS,
}: TestSimpleBlockViewerLocatorParams) {
  const chainId = chainIdIn ?? (await Account.random()).address as ChainId
  const finalizedArchivist = finalizedArchivistIn ?? await buildRandomChainArchivist()
  const context = getTestProviderContext(config)
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
