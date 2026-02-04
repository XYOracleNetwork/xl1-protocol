import type { AccountInstance } from '@xyo-network/account-model'
import type { ArchivistInstance } from '@xyo-network/archivist-model'
import type { NodeInstance } from '@xyo-network/node-model'
import type { WithHashMeta } from '@xyo-network/payload-model'
import type {
  ChainId, MapType, Position,
} from '@xyo-network/xl1-protocol'
import type {
  BalancesStepSummary, CreatableProviderContext, CreatableProviderContextType, TransfersStepSummary,
} from '@xyo-network/xl1-protocol-sdk'
import {
  getDefaultConfig, getEmptyContext, ProviderFactoryLocator, SimpleAccountBalanceViewer, SimpleBlockViewer, SimpleFinalizationViewer, SimpleMempoolRunner, SimpleMempoolViewer,
  SimpleStakeEventsViewer, SimpleStakeViewer, SimpleTimeSyncViewer, SimpleWindowedBlockViewer, SimpleXyoGatewayRunner, SimpleXyoRunner,
  SimpleXyoSigner,
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
import {
  SimpleStepRewardsByPositionViewer, SimpleStepRewardsByStakerViewer, SimpleStepRewardsByStepViewer, SimpleStepRewardsTotalViewer, SimpleStepRewardsViewer,
} from './SimpleStepRewards/index.ts'
import { SimpleStepViewer } from './SimpleStepViewer.ts'
import { SimpleXyoConnection } from './SimpleXyoConnection.ts'

export interface BuildProviderLocatorParams {
  context?: Omit<CreatableProviderContext, 'locator'> & Partial<{ locator: CreatableProviderContext['locator'] }>
}

export interface GatewayRunnerLocatorParams {
  /**
   * The account instance to be used to register a SimpleXyoSigner with the locator
   */
  signerAccount?: AccountInstance
}

export function buildProviderLocator({ context = getEmptyContext() }: BuildProviderLocatorParams = {}) {
  const {
    config = getDefaultConfig(), locator, singletons = {}, caches = {}, ...restOfContext
  } = context
  return new ProviderFactoryLocator({
    ...restOfContext, config, singletons, caches,
  }, locator?.registry)
}

export interface BuildSimpleProviderLocatorParams extends BuildProviderLocatorParams, GatewayRunnerLocatorParams {
}

export function buildSimpleProviderLocator(params?: BuildSimpleProviderLocatorParams) {
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
    SimpleStakeViewer.factory<SimpleStakeViewer>(SimpleStakeViewer.dependencies, { positions }),
    SimpleXyoConnection.factory<SimpleXyoConnection>(SimpleXyoConnection.dependencies, {}),
  ])
  registerGatewayRunnerWithLocatorIfProvided(locator, params)
  return locator
}

export interface BuildJsonRpcProviderLocatorParams extends BuildProviderLocatorParams, GatewayRunnerLocatorParams {
  transportFactory: TransportFactory
}

export async function buildJsonRpcProviderLocator(params: BuildJsonRpcProviderLocatorParams) {
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
    SimpleXyoConnection.factory<SimpleXyoConnection>(SimpleXyoConnection.dependencies, {}),
  ])
  registerGatewayRunnerWithLocatorIfProvided(locator, params)
  return locator
}

export interface BuildLocalProviderLocatorParams extends BuildProviderLocatorParams, GatewayRunnerLocatorParams {
  balancesSummaryMap: MapType<string, WithHashMeta<BalancesStepSummary>>
  chainId: ChainId
  finalizedArchivist: ArchivistInstance
  node: NodeInstance
  pendingBlocksArchivist: ArchivistInstance
  pendingTransactionsArchivist: ArchivistInstance
  transfersSummaryMap: MapType<string, WithHashMeta<TransfersStepSummary>>
}

export function buildLocalProviderLocator(params: BuildLocalProviderLocatorParams) {
  const locator = buildSimpleProviderLocator(params)
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
  registerGatewayRunnerWithLocatorIfProvided(locator, params)
  return locator
}

/**
 * Registers a SimpleXyoGatewayRunner with the locator if a signerAccount is provided in params
 * @param locator The ProviderFactoryLocator to register the signer with
 * @param params The SignerLocatorParams containing the optional signerAccount
 * @returns The updated ProviderFactoryLocator
 */
const registerGatewayRunnerWithLocatorIfProvided = (
  locator: ProviderFactoryLocator<CreatableProviderContextType, string[]>,
  params?: GatewayRunnerLocatorParams,
) => {
  const account = params?.signerAccount
  if (account) {
    locator.registerMany([
      SimpleXyoSigner.factory<SimpleXyoSigner>(SimpleXyoSigner.dependencies, { account }),
      SimpleXyoGatewayRunner.factory<SimpleXyoGatewayRunner>(SimpleXyoGatewayRunner.dependencies, {}),
    ])
  }
  return locator
}
