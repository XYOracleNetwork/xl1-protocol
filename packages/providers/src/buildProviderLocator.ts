import type { ArchivistInstance } from '@xyo-network/archivist-model'
import type { NodeInstance } from '@xyo-network/node-model'
import type {
  BalanceStepSummaryContext, CreatableProviderContext, TransfersStepSummaryContext,
} from '@xyo-network/xl1-protocol-sdk'
import {
  getDefaultConfig, ProviderFactoryLocator, SimpleAccountBalanceViewer, SimpleBlockViewer, SimpleFinalizationViewer, SimpleMempoolRunner, SimpleMempoolViewer,
  SimpleStakeEventsViewer, SimpleStakeViewer, SimpleTimeSyncViewer, SimpleWindowedBlockViewer, SimpleXyoRunner,
} from '@xyo-network/xl1-protocol-sdk'
import type { TransportFactory } from '@xyo-network/xl1-rpc'
import {
  AccountBalanceViewerRpcSchemas, BlockViewerRpcSchemas, DataLakeViewerRpcSchemas, JsonRpcAccountBalanceViewer, JsonRpcBlockViewer, JsonRpcDataLakeViewer,
  JsonRpcMempoolRunner, JsonRpcMempoolViewer, JsonRpcNetworkStakeViewer, JsonRpcNetworkStakingStepRewardsViewer, JsonRpcStakeTotalsViewer,
  JsonRpcTimeSyncViewer, JsonRpcXyoRunner, JsonRpcXyoViewer, MempoolRunnerRpcSchemas, MempoolViewerRpcSchemas, NetworkStakeViewerRpcSchemas,
  StakeTotalsViewerRpcSchemas, TimeSyncViewerRpcSchemas, XyoRunnerRpcSchemas, XyoViewerRpcSchemas,
} from '@xyo-network/xl1-rpc'

import { NodeXyoViewer } from './NodeXyoViewer.ts'
import { SimpleNetworkStakeViewer } from './SimpleNetworkStakeViewer.ts'
import { SimpleStepRewardsByPositionViewer } from './SimpleStepRewardsByPositionViewer.ts'
import { SimpleStepRewardsByStakerViewer } from './SimpleStepRewardsByStakerViewer.ts'
import { SimpleStepRewardsByStepViewer } from './SimpleStepRewardsByStepViewer.ts'
import { SimpleStepRewardsTotalViewer } from './SimpleStepRewardsTotalViewer.ts'
import { SimpleStepRewardsViewer } from './SimpleStepRewardsViewer.ts'
import { SimpleStepViewer } from './SimpleStepViewer.ts'
import { SimpleXyoConnection } from './SimpleXyoConnection.ts'

export interface BuildProviderLocatorParams {
  context?: Partial<CreatableProviderContext>
}

export function buildProviderLocator({ context = {} }: BuildProviderLocatorParams = {}) {
  const {
    config = getDefaultConfig(), locator, singletons = {}, ...restOfContext
  } = context
  return new ProviderFactoryLocator({
    ...restOfContext, config, singletons,
  }, locator?.registry)
}

export interface BuildSimpleProviderLocatorParams extends BuildProviderLocatorParams {

}

export function buildSimpleProviderLocator(params: BuildSimpleProviderLocatorParams = {}) {
  const locator = buildProviderLocator(params)
  return locator.registerMany([
    SimpleStakeViewer.factory<SimpleStakeViewer>(SimpleStakeViewer.dependencies),
    SimpleStakeEventsViewer.factory<SimpleStakeEventsViewer>(SimpleStakeEventsViewer.dependencies),
    SimpleNetworkStakeViewer.factory<SimpleNetworkStakeViewer>(SimpleNetworkStakeViewer.dependencies),
    SimpleTimeSyncViewer.factory<SimpleTimeSyncViewer>(SimpleTimeSyncViewer.dependencies),
    SimpleStepViewer.factory<SimpleStepViewer>(SimpleStepViewer.dependencies),
    SimpleStepRewardsViewer.factory<SimpleStepRewardsViewer>(SimpleStepRewardsViewer.dependencies),
    SimpleStepRewardsByPositionViewer.factory<SimpleStepRewardsByPositionViewer>(SimpleStepRewardsByPositionViewer.dependencies),
    SimpleStepRewardsByStakerViewer.factory<SimpleStepRewardsByStakerViewer>(SimpleStepRewardsByStakerViewer.dependencies),
    SimpleStepRewardsByStepViewer.factory<SimpleStepRewardsByStepViewer>(SimpleStepRewardsByStepViewer.dependencies),
    SimpleStepRewardsTotalViewer.factory<SimpleStepRewardsTotalViewer>(SimpleStepRewardsTotalViewer.dependencies),
    SimpleStakeViewer.factory<SimpleStakeViewer>(SimpleStakeViewer.dependencies),
    SimpleXyoConnection.factory<SimpleXyoConnection>(SimpleXyoConnection.dependencies),
  ])
}

export interface BuildJsonRpcProviderLocatorParams extends BuildProviderLocatorParams {
  transportFactory: TransportFactory
}

export async function buildJsonRpcProviderLocator(params: BuildJsonRpcProviderLocatorParams) {
  const locator = buildProviderLocator(params)
  const transportFactory = params.transportFactory
  return locator.registerMany([
    JsonRpcStakeTotalsViewer.factory<JsonRpcStakeTotalsViewer>(
      JsonRpcStakeTotalsViewer.dependencies,
      { transport: await transportFactory(StakeTotalsViewerRpcSchemas) },
    ),
    JsonRpcAccountBalanceViewer.factory<JsonRpcAccountBalanceViewer>(
      JsonRpcAccountBalanceViewer.dependencies,
      { transport: await transportFactory(AccountBalanceViewerRpcSchemas) },
    ),
    JsonRpcBlockViewer.factory<JsonRpcBlockViewer>(JsonRpcBlockViewer.dependencies, { transport: await transportFactory(BlockViewerRpcSchemas) }),
    JsonRpcDataLakeViewer.factory<JsonRpcDataLakeViewer>(JsonRpcDataLakeViewer.dependencies, { transport: await transportFactory(DataLakeViewerRpcSchemas) }),
    JsonRpcMempoolRunner.factory<JsonRpcMempoolRunner>(JsonRpcMempoolRunner.dependencies, { transport: await transportFactory(MempoolRunnerRpcSchemas) }),
    JsonRpcMempoolViewer.factory<JsonRpcMempoolViewer>(JsonRpcMempoolViewer.dependencies, { transport: await transportFactory(MempoolViewerRpcSchemas) }),
    JsonRpcNetworkStakeViewer.factory<JsonRpcNetworkStakeViewer>(
      JsonRpcNetworkStakeViewer.dependencies,
      { transport: await transportFactory(NetworkStakeViewerRpcSchemas) },
    ),
    JsonRpcTimeSyncViewer.factory<JsonRpcTimeSyncViewer>(JsonRpcTimeSyncViewer.dependencies, { transport: await transportFactory(TimeSyncViewerRpcSchemas) }),
    JsonRpcNetworkStakingStepRewardsViewer.factory<JsonRpcNetworkStakingStepRewardsViewer>(
      JsonRpcNetworkStakingStepRewardsViewer.dependencies,
      { transport: await transportFactory(NetworkStakeViewerRpcSchemas) },
    ),
    JsonRpcXyoRunner.factory<JsonRpcXyoRunner>(JsonRpcXyoRunner.dependencies, { transport: await transportFactory(XyoRunnerRpcSchemas) }),
    JsonRpcXyoViewer.factory<JsonRpcXyoViewer>(JsonRpcXyoViewer.dependencies, { transport: await transportFactory(XyoViewerRpcSchemas) }),
    SimpleStakeViewer.factory<SimpleStakeViewer>(SimpleStakeViewer.dependencies),
    SimpleStakeEventsViewer.factory<SimpleStakeEventsViewer>(SimpleStakeEventsViewer.dependencies),
    SimpleStepViewer.factory<SimpleStepViewer>(SimpleStepViewer.dependencies),
    SimpleXyoConnection.factory<SimpleXyoConnection>(SimpleXyoConnection.dependencies),
  ])
}

export interface BuildLocalProviderLocatorParams extends BuildProviderLocatorParams {
  balanceSummaryContext: BalanceStepSummaryContext
  finalizedArchivist: ArchivistInstance
  node: NodeInstance
  pendingBlocksArchivist: ArchivistInstance
  pendingTransactionsArchivist: ArchivistInstance
  transfersSummaryContext: TransfersStepSummaryContext
}

export function buildLocalProviderLocator({
  balanceSummaryContext, finalizedArchivist, pendingBlocksArchivist, pendingTransactionsArchivist, transfersSummaryContext, node, ...params
}: BuildLocalProviderLocatorParams) {
  const locator = buildSimpleProviderLocator(params)
  return locator.registerMany([
    SimpleMempoolViewer.factory<SimpleMempoolViewer>(SimpleMempoolViewer.dependencies, { pendingTransactionsArchivist, pendingBlocksArchivist }),
    SimpleMempoolRunner.factory<SimpleMempoolRunner>(SimpleMempoolRunner.dependencies, { pendingTransactionsArchivist, pendingBlocksArchivist }),
    SimpleAccountBalanceViewer.factory<SimpleAccountBalanceViewer>(SimpleAccountBalanceViewer.dependencies, { balanceSummaryContext, transfersSummaryContext }),
    SimpleFinalizationViewer.factory<SimpleFinalizationViewer>(SimpleFinalizationViewer.dependencies, { finalizedArchivist }),
    SimpleBlockViewer.factory<SimpleBlockViewer>(SimpleBlockViewer.dependencies, { finalizedArchivist }),
    SimpleXyoRunner.factory<SimpleXyoRunner>(SimpleXyoRunner.dependencies),
    SimpleWindowedBlockViewer.factory<SimpleWindowedBlockViewer>(SimpleWindowedBlockViewer.dependencies, { maxWindowSize: 10_000, syncInterval: 10_000 }),
    NodeXyoViewer.factory<NodeXyoViewer>(NodeXyoViewer.dependencies, { node }),
  ])
}
