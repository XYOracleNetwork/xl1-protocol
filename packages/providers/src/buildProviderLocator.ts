import type { ArchivistInstance } from '@xyo-network/archivist-model'
import type { NodeInstance } from '@xyo-network/node-model'
import type { WithHashMeta } from '@xyo-network/payload-model'
import type { MapType, Position } from '@xyo-network/xl1-protocol'
import type {
  BalancesStepSummary, CreatableProviderContext, TransfersStepSummary,
} from '@xyo-network/xl1-protocol-sdk'
import {
  ConfigZod,
  getEmptyProviderContext, ProviderFactoryLocator, SimpleAccountBalanceViewer, SimpleBlockViewer, SimpleFinalizationViewer, SimpleMempoolRunner, SimpleMempoolViewer,
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
import type { GatewayRunnerLocatorParams } from './registerHelpers.ts'
import { registerGatewayWithLocator } from './registerHelpers.ts'
import { SimpleNetworkStakeViewer } from './SimpleNetworkStakeViewer.ts'
import {
  SimpleStepRewardsByPositionViewer, SimpleStepRewardsByStakerViewer, SimpleStepRewardsByStepViewer, SimpleStepRewardsTotalViewer, SimpleStepRewardsViewer,
} from './SimpleStepRewards/index.ts'
import { SimpleStepViewer } from './SimpleStepViewer.ts'

/** @deprecated use buildEmptyProviderLocator */
export interface BuildProviderLocatorParams {
  context?: Omit<CreatableProviderContext, 'locator'> & Partial<{ locator: CreatableProviderContext['locator'] }>
}

/** @deprecated use buildEmptyProviderLocator */
// eslint-disable-next-line @typescript-eslint/no-deprecated
export function buildProviderLocator({ context = getEmptyProviderContext(ConfigZod.parse({})) }: BuildProviderLocatorParams = {}) {
  const {
    config, locator, singletons = {}, caches = {}, ...restOfContext
  } = context
  return new ProviderFactoryLocator({
    ...restOfContext, config, singletons, caches,
  }, locator?.registry)
}

/** @deprecated use buildSimpleProviderLocatorV2 instead */
// eslint-disable-next-line @typescript-eslint/no-deprecated
export interface BuildSimpleProviderLocatorParams extends BuildProviderLocatorParams, GatewayRunnerLocatorParams {
}

/** @deprecated use buildSimpleProviderLocatorV2 instead */
// eslint-disable-next-line @typescript-eslint/no-deprecated
export function buildSimpleProviderLocator(params?: BuildSimpleProviderLocatorParams) {
  // eslint-disable-next-line @typescript-eslint/no-deprecated
  const locator = buildProviderLocator(params)
  const positions: Position[] = []
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

  return registerGatewayWithLocator(locator, params?.signerAccount)
}

/** @deprecated use buildJsonRpcProviderLocatorV2 instead */
// eslint-disable-next-line @typescript-eslint/no-deprecated
export interface BuildJsonRpcProviderLocatorParams extends BuildProviderLocatorParams, GatewayRunnerLocatorParams {
  transportFactory: TransportFactory
}

/** @deprecated use buildJsonRpcProviderLocatorV2 instead */
// eslint-disable-next-line @typescript-eslint/no-deprecated
export async function buildJsonRpcProviderLocator(params: BuildJsonRpcProviderLocatorParams) {
  // eslint-disable-next-line @typescript-eslint/no-deprecated
  const locator = buildProviderLocator(params)
  const transportFactory = params.transportFactory
  const positions: Position[] = []
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
    SimpleStakeViewer.factory<SimpleStakeViewer>(SimpleStakeViewer.dependencies, { positions }),
    SimpleStakeEventsViewer.factory<SimpleStakeEventsViewer>(SimpleStakeEventsViewer.dependencies, { positions }),
    SimpleStepViewer.factory<SimpleStepViewer>(SimpleStepViewer.dependencies, {}),
  ])

  return registerGatewayWithLocator(locator, params?.signerAccount)
}

/** deprecated use buildLocalProviderLocatorV2 instead */
// eslint-disable-next-line @typescript-eslint/no-deprecated
export interface BuildLocalProviderLocatorParams extends BuildProviderLocatorParams, GatewayRunnerLocatorParams {
  balancesSummaryMap: MapType<string, WithHashMeta<BalancesStepSummary>>
  finalizedArchivist: ArchivistInstance
  node: NodeInstance
  pendingBlocksArchivist: ArchivistInstance
  pendingTransactionsArchivist: ArchivistInstance
  transfersSummaryMap: MapType<string, WithHashMeta<TransfersStepSummary>>
}

/** deprecated use buildLocalProviderLocatorV2 instead */
export function buildLocalProviderLocator(params: BuildLocalProviderLocatorParams) {
  // eslint-disable-next-line @typescript-eslint/no-deprecated
  const locator = buildSimpleProviderLocator(params)
  const {
    pendingTransactionsArchivist, pendingBlocksArchivist, balancesSummaryMap, transfersSummaryMap, finalizedArchivist, node,
  } = params
  locator.registerMany([
    SimpleMempoolViewer.factory<SimpleMempoolViewer>(SimpleMempoolViewer.dependencies, { pendingTransactionsArchivist, pendingBlocksArchivist }),
    SimpleMempoolRunner.factory<SimpleMempoolRunner>(SimpleMempoolRunner.dependencies, { pendingTransactionsArchivist, pendingBlocksArchivist }),
    SimpleAccountBalanceViewer.factory<SimpleAccountBalanceViewer>(SimpleAccountBalanceViewer.dependencies, { balancesSummaryMap, transfersSummaryMap }),
    SimpleFinalizationViewer.factory<SimpleFinalizationViewer>(SimpleFinalizationViewer.dependencies, { finalizedArchivist }),
    SimpleBlockViewer.factory<SimpleBlockViewer>(SimpleBlockViewer.dependencies, { finalizedArchivist }),
    SimpleXyoRunner.factory<SimpleXyoRunner>(SimpleXyoRunner.dependencies, {}),
    SimpleWindowedBlockViewer.factory<SimpleWindowedBlockViewer>(SimpleWindowedBlockViewer.dependencies, { maxWindowSize: 10_000, syncInterval: 10_000 }),
    NodeXyoViewer.factory<NodeXyoViewer>(NodeXyoViewer.dependencies, { node }),
  ])

  return registerGatewayWithLocator(locator, params?.signerAccount)
}
