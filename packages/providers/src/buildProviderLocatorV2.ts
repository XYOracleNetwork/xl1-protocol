import type { ArchivistInstance } from '@xyo-network/archivist-model'
import type { NodeInstance } from '@xyo-network/node-model'
import type { WithHashMeta } from '@xyo-network/payload-model'
import type {
  ChainId, MapType, Position,
} from '@xyo-network/xl1-protocol'
import type {
  BalancesStepSummary, Config, TransfersStepSummary,
} from '@xyo-network/xl1-protocol-sdk'
import {
  ProviderFactoryLocator, SimpleAccountBalanceViewer, SimpleBlockViewer, SimpleFinalizationViewer, SimpleMempoolRunner, SimpleMempoolViewer,
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
import { registerGatewayAndConnectionWithLocator } from './registerHelpers.ts'
import { SimpleNetworkStakeViewer } from './SimpleNetworkStakeViewer.ts'
import {
  SimpleStepRewardsByPositionViewer, SimpleStepRewardsByStakerViewer, SimpleStepRewardsByStepViewer, SimpleStepRewardsTotalViewer, SimpleStepRewardsViewer,
} from './SimpleStepRewards/index.ts'
import { SimpleStepViewer } from './SimpleStepViewer.ts'

export function buildEmptyProviderLocator(config: Config) {
  return new ProviderFactoryLocator({
    config, singletons: {}, caches: {},
  })
}

export function buildSimpleProviderLocatorV2(config: Config, positions: Position[]) {
  const locator = buildEmptyProviderLocator(config)
  locator.registerMany([
    SimpleStakeViewer.factory<SimpleStakeViewer>(SimpleStakeViewer.dependencies, { positions }),
    SimpleStakeEventsViewer.factory<SimpleStakeEventsViewer>(SimpleStakeEventsViewer.dependencies, { positions }),
    SimpleNetworkStakeViewer.factory<SimpleNetworkStakeViewer>(SimpleNetworkStakeViewer.dependencies, {}),
    SimpleTimeSyncViewer.factory<SimpleTimeSyncViewer>(SimpleTimeSyncViewer.dependencies, {}),
    SimpleStepViewer.factory<SimpleStepViewer>(SimpleStepViewer.dependencies, {}),
    SimpleStepRewardsViewer.factory<SimpleStepRewardsViewer>(SimpleStepRewardsViewer.dependencies, {}),
    SimpleStepRewardsByPositionViewer.factory<SimpleStepRewardsByPositionViewer>(SimpleStepRewardsByPositionViewer.dependencies, {}),
    SimpleStepRewardsByStakerViewer.factory<SimpleStepRewardsByStakerViewer>(SimpleStepRewardsByStakerViewer.dependencies, {}),
    SimpleStepRewardsByStepViewer.factory<SimpleStepRewardsByStepViewer>(SimpleStepRewardsByStepViewer.dependencies, {}),
    SimpleStepRewardsTotalViewer.factory<SimpleStepRewardsTotalViewer>(SimpleStepRewardsTotalViewer.dependencies, {}),
  ])
  return registerGatewayAndConnectionWithLocator(locator)
}

export async function buildJsonRpcProviderLocatorV2(config: Config, transportFactory: TransportFactory, positions: Position[]) {
  const locator = buildEmptyProviderLocator(config)
  locator.registerMany([
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

    SimpleStakeViewer.factory<SimpleStakeViewer>(SimpleStakeViewer.dependencies, { positions }),
    SimpleStakeEventsViewer.factory<SimpleStakeEventsViewer>(SimpleStakeEventsViewer.dependencies, { positions }),
    SimpleStepViewer.factory<SimpleStepViewer>(SimpleStepViewer.dependencies, {}),
  ])
  return registerGatewayAndConnectionWithLocator(locator)
}

export interface BuildLocalProviderLocatorParamsV2 {
  balancesSummaryMap: MapType<string, WithHashMeta<BalancesStepSummary>>
  chainId: ChainId
  finalizedArchivist: ArchivistInstance
  node: NodeInstance
  pendingBlocksArchivist: ArchivistInstance
  pendingTransactionsArchivist: ArchivistInstance
  positions: Position[]
  transfersSummaryMap: MapType<string, WithHashMeta<TransfersStepSummary>>
}

export function buildLocalProviderLocatorV2(config: Config, params: BuildLocalProviderLocatorParamsV2) {
  const locator = buildSimpleProviderLocatorV2(config, params.positions)
  const {
    pendingTransactionsArchivist, pendingBlocksArchivist, balancesSummaryMap, transfersSummaryMap, finalizedArchivist, node, chainId,
  } = params
  locator.registerMany([
    SimpleMempoolViewer.factory<SimpleMempoolViewer>(SimpleMempoolViewer.dependencies, { pendingTransactionsArchivist, pendingBlocksArchivist }),
    SimpleMempoolRunner.factory<SimpleMempoolRunner>(SimpleMempoolRunner.dependencies, { pendingTransactionsArchivist, pendingBlocksArchivist }),
    SimpleAccountBalanceViewer.factory<SimpleAccountBalanceViewer>(SimpleAccountBalanceViewer.dependencies, { balancesSummaryMap, transfersSummaryMap }),
    SimpleFinalizationViewer.factory<SimpleFinalizationViewer>(SimpleFinalizationViewer.dependencies, { finalizedArchivist }),
    SimpleBlockViewer.factory<SimpleBlockViewer>(SimpleBlockViewer.dependencies, { finalizedArchivist }),
    SimpleXyoRunner.factory<SimpleXyoRunner>(SimpleXyoRunner.dependencies, {}),
    SimpleWindowedBlockViewer.factory<SimpleWindowedBlockViewer>(SimpleWindowedBlockViewer.dependencies, { maxWindowSize: 10_000, syncInterval: 10_000 }),
    NodeXyoViewer.factory<NodeXyoViewer>(NodeXyoViewer.dependencies, { node, chainId }),
  ])
  return registerGatewayAndConnectionWithLocator(locator)
}
