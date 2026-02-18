import type { AccountInstance } from '@xyo-network/account-model'
import type { ArchivistInstance } from '@xyo-network/archivist-model'
import type { WithHashMeta } from '@xyo-network/payload-model'
import type { MapType } from '@xyo-network/xl1-protocol'
import type {
  BalancesStepSummary, Config, TransfersStepSummary,
} from '@xyo-network/xl1-protocol-sdk'
import {
  ProviderFactoryLocator, SimpleAccountBalanceViewer, SimpleBlockViewer, SimpleFinalizationViewer, SimpleMempoolRunner, SimpleMempoolViewer,
  SimpleTimeSyncViewer, SimpleWindowedBlockViewer, SimpleXyoRunner,
} from '@xyo-network/xl1-protocol-sdk'
import type { TransportFactory } from '@xyo-network/xl1-rpc'
import {
  AccountBalanceViewerRpcSchemas, BlockViewerRpcSchemas,
  JsonRpcAccountBalanceViewer, JsonRpcBlockViewer,
  JsonRpcMempoolRunner, JsonRpcMempoolViewer, JsonRpcNetworkStakeViewer, JsonRpcNetworkStakingStepRewardsViewer, JsonRpcStakeTotalsViewer,
  JsonRpcTimeSyncViewer, JsonRpcXyoRunner, JsonRpcXyoViewer, MempoolRunnerRpcSchemas, MempoolViewerRpcSchemas, NetworkStakeViewerRpcSchemas,
  StakeTotalsViewerRpcSchemas, TimeSyncViewerRpcSchemas, XyoRunnerRpcSchemas, XyoViewerRpcSchemas,
} from '@xyo-network/xl1-rpc'

import { registerGatewayWithLocator } from './registerHelpers.ts'
import { SimpleNetworkStakeViewer } from './SimpleNetworkStakeViewer.ts'
import {
  SimpleStepRewardsByPositionViewer, SimpleStepRewardsByStakerViewer, SimpleStepRewardsByStepViewer, SimpleStepRewardsTotalViewer, SimpleStepRewardsViewer,
} from './SimpleStepRewards/index.ts'
import { SimpleStepViewer } from './SimpleStepViewer.ts'
import { SimpleXyoViewer } from './SimpleXyoViewer.ts'

export function buildEmptyProviderLocator(config: Config) {
  return new ProviderFactoryLocator({
    config, singletons: {}, caches: {},
  })
}

export function buildSimpleProviderLocatorV2(config: Config, account?: AccountInstance) {
  const locator = buildEmptyProviderLocator(config)
  locator.registerMany([
    SimpleNetworkStakeViewer.factory<SimpleNetworkStakeViewer>(SimpleNetworkStakeViewer.dependencies, {}),
    SimpleTimeSyncViewer.factory<SimpleTimeSyncViewer>(SimpleTimeSyncViewer.dependencies, {}),
    SimpleStepViewer.factory<SimpleStepViewer>(SimpleStepViewer.dependencies, {}),
    SimpleStepRewardsViewer.factory<SimpleStepRewardsViewer>(SimpleStepRewardsViewer.dependencies, {}),
    SimpleStepRewardsByPositionViewer.factory<SimpleStepRewardsByPositionViewer>(SimpleStepRewardsByPositionViewer.dependencies, {}),
    SimpleStepRewardsByStakerViewer.factory<SimpleStepRewardsByStakerViewer>(SimpleStepRewardsByStakerViewer.dependencies, {}),
    SimpleStepRewardsByStepViewer.factory<SimpleStepRewardsByStepViewer>(SimpleStepRewardsByStepViewer.dependencies, {}),
    SimpleStepRewardsTotalViewer.factory<SimpleStepRewardsTotalViewer>(SimpleStepRewardsTotalViewer.dependencies, {}),
    SimpleXyoRunner.factory<SimpleXyoRunner>(SimpleXyoRunner.dependencies, {}),
  ])
  return registerGatewayWithLocator(locator, account)
}

export async function buildJsonRpcProviderLocatorV2(config: Config, transportFactory: TransportFactory, account?: AccountInstance) {
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
  ])
  return registerGatewayWithLocator(locator, account)
}

export interface BuildLocalGatewayParams {
  account?: AccountInstance
  balancesSummaryMap: MapType<string, WithHashMeta<BalancesStepSummary>>
  finalizedArchivist: ArchivistInstance
  pendingBlocksArchivist: ArchivistInstance
  pendingTransactionsArchivist: ArchivistInstance
  transfersSummaryMap: MapType<string, WithHashMeta<TransfersStepSummary>>
}

export function buildLocalGateway(config: Config, params: BuildLocalGatewayParams) {
  const {
    account, pendingTransactionsArchivist, pendingBlocksArchivist, balancesSummaryMap, transfersSummaryMap, finalizedArchivist,
  } = params
  const locator = buildSimpleProviderLocatorV2(config, account)
  locator.registerMany([
    SimpleMempoolViewer.factory<SimpleMempoolViewer>(SimpleMempoolViewer.dependencies, { pendingTransactionsArchivist, pendingBlocksArchivist }),
    SimpleMempoolRunner.factory<SimpleMempoolRunner>(SimpleMempoolRunner.dependencies, { pendingTransactionsArchivist, pendingBlocksArchivist }),
    SimpleAccountBalanceViewer.factory<SimpleAccountBalanceViewer>(SimpleAccountBalanceViewer.dependencies, { balancesSummaryMap, transfersSummaryMap }),
    SimpleFinalizationViewer.factory<SimpleFinalizationViewer>(SimpleFinalizationViewer.dependencies, { finalizedArchivist }),
    SimpleBlockViewer.factory<SimpleBlockViewer>(SimpleBlockViewer.dependencies, { finalizedArchivist }),
    SimpleWindowedBlockViewer.factory<SimpleWindowedBlockViewer>(SimpleWindowedBlockViewer.dependencies, { maxWindowSize: 10_000, syncInterval: 10_000 }),
    SimpleXyoViewer.factory<SimpleXyoViewer>(SimpleXyoViewer.dependencies, { finalizedArchivist }),
  ])
  return locator
}
