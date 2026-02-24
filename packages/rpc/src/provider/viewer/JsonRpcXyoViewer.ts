import {
  type Address, assertEx, type Hash, isUndefined,
} from '@xylabs/sdk-js'
import { PayloadBuilder } from '@xyo-network/sdk-js'
import type {
  AccountBalanceHistoryItem,
  AccountBalanceViewer,
  AttoXL1,
  BlockRate,
  BlockViewer,
  ChainId,
  ChainQualifiedConfig,
  ForkHistory,
  HydratedBlock,
  MempoolViewer,
  NetworkStakeViewer, Position,
  Provider,
  ProviderMoniker,
  SignedHydratedBlockWithHashMeta,
  SignedHydratedTransaction,
  SingleTimeConfig,
  StakeViewer,
  StepIdentity,
  StepViewer,
  TimeDurations,
  TimeSyncViewer,
  TransactionViewer,
  XL1BlockNumber,
  XL1BlockRange,
  XyoViewer,
  XyoViewerV2,
} from '@xyo-network/xl1-protocol'
import {
  AccountBalanceViewerMoniker, BlockViewerMoniker, isSignedHydratedBlock, isSignedHydratedBlockWithHashMeta,
  MempoolViewerMoniker,
  NetworkStakeViewerMoniker, StakeViewerMoniker, StepViewerMoniker, TimeSyncViewerMoniker,
  TransactionViewerMoniker,
  XyoViewerMoniker,
} from '@xyo-network/xl1-protocol'
import { creatableProvider } from '@xyo-network/xl1-protocol-sdk'

import { XyoViewerRpcSchemas } from '../../types/index.ts'
import type { JsonRpcViewerParams } from './JsonRpcViewer.ts'
import { AbstractJsonRpcViewer } from './JsonRpcViewer.ts'

// TODO: remove after back compat need is done
async function fixSignedHydratedBlockWithHashMeta(block: HydratedBlock): Promise<SignedHydratedBlockWithHashMeta> {
  if (isSignedHydratedBlockWithHashMeta(block)) {
    return block
  }
  if (isSignedHydratedBlock(block)) {
    return [await PayloadBuilder.addHashMeta(block[0]), await PayloadBuilder.addHashMeta(block[1])]
  }
  throw new Error('Invalid block format')
}

export interface JsonRpcXyoViewerParams extends JsonRpcViewerParams<typeof XyoViewerRpcSchemas> {
  networkStakeViewer?: NetworkStakeViewer
}

export interface JsonRpcXyoViewerProviders extends Record<typeof JsonRpcXyoViewer.dependencies[number], Provider<ProviderMoniker>> {
  [AccountBalanceViewerMoniker]: AccountBalanceViewer
  [BlockViewerMoniker]: BlockViewer
  [MempoolViewerMoniker]: MempoolViewer
  [NetworkStakeViewerMoniker]: NetworkStakeViewer
  [StakeViewerMoniker]: StakeViewer
  [StepViewerMoniker]: StepViewer
  [TimeSyncViewerMoniker]: TimeSyncViewer
  [TransactionViewerMoniker]: TransactionViewer
}

@creatableProvider()
export class JsonRpcXyoViewer extends AbstractJsonRpcViewer<XyoViewerRpcSchemas, JsonRpcXyoViewerParams> implements XyoViewer, XyoViewerV2 {
  static readonly defaultMoniker = XyoViewerMoniker

  static readonly dependencies = [
    AccountBalanceViewerMoniker,
    BlockViewerMoniker,
    MempoolViewerMoniker,
    NetworkStakeViewerMoniker,
    StakeViewerMoniker,
    StepViewerMoniker,
    TimeSyncViewerMoniker,
    TransactionViewerMoniker,
  ]

  static readonly monikers = [XyoViewerMoniker]

  moniker = JsonRpcXyoViewer.defaultMoniker

  protected _chainId?: ChainId

  private _providers: JsonRpcXyoViewerProviders | undefined = undefined

  get account() {
    return { balance: assertEx(this.providers?.[AccountBalanceViewerMoniker], () => `AccountBalanceViewer provider not found for ${this.moniker}`) }
  }

  get block() {
    return assertEx(this.providers?.[BlockViewerMoniker], () => `BlockViewer provider not found for ${this.moniker}`)
  }

  get mempool() {
    return assertEx(this.providers?.[MempoolViewerMoniker], () => `MempoolViewer provider not found for ${this.moniker}`)
  }

  get networkStake() {
    return assertEx(this.providers?.[NetworkStakeViewerMoniker], () => `NetworkStakeViewer provider not found for ${this.moniker}`)
  }

  get stake() {
    return assertEx(this.providers?.[StakeViewerMoniker], () => `StakeViewer provider not found for ${this.moniker}`)
  }

  get step() {
    return assertEx(this.providers?.[StepViewerMoniker], () => `StepViewer provider not found for ${this.moniker}`)
  }

  get time() {
    return assertEx(this.providers?.[TimeSyncViewerMoniker], () => `TimeSyncViewer provider not found for ${this.moniker}`)
  }

  get transaction() {
    return assertEx(this.providers?.[TransactionViewerMoniker], () => `TransactionViewer provider not found for ${this.moniker}`)
  }

  protected get providers() {
    return this._providers
  }

  async accountBalance(address: Address, config: ChainQualifiedConfig = {}): Promise<AttoXL1> {
    return (await this.account.balance.accountBalance(address, config))
  }

  async accountBalanceHistory(address: Address, config: ChainQualifiedConfig = {}): Promise<AccountBalanceHistoryItem[]> {
    return (await this.account.balance.accountBalanceHistory(address, config))
  }

  async blockByHash(hash: Hash): Promise<SignedHydratedBlockWithHashMeta | null> {
    return (await this.blocksByHash(hash, 1))[0]
  }

  async blockByNumber(blockNumber: XL1BlockNumber): Promise<SignedHydratedBlockWithHashMeta | null> {
    return (await this.blocksByNumber(blockNumber, 1))[0]
  }

  async blocksByHash(hash: Hash, limit?: number): Promise<SignedHydratedBlockWithHashMeta[]> {
    return await Promise.all((await this.transport.sendRequest(
      'xyoViewer_blocksByHash',
      [hash, limit],
    )).map(b => fixSignedHydratedBlockWithHashMeta(b)))
  }

  async blocksByNumber(blockNumber: XL1BlockNumber, limit?: number): Promise<SignedHydratedBlockWithHashMeta[]> {
    return await Promise.all((await this.transport.sendRequest(
      'xyoViewer_blocksByNumber',
      [blockNumber, limit],
    )).map(b => fixSignedHydratedBlockWithHashMeta(b)))
  }

  async chainId(blockNumber: XL1BlockNumber | 'latest' = 'latest'): Promise<ChainId> {
    const block = blockNumber === 'latest' ? await this.currentBlock() : await this.blockByNumber(blockNumber)
    if (!block) {
      throw new Error(`Block not found: ${blockNumber}`)
    }
    return block[0].chain
  }

  override async createHandler() {
    await super.createHandler()
    this._providers = {
      [AccountBalanceViewerMoniker]: await this.locator.getInstance<AccountBalanceViewer>(AccountBalanceViewerMoniker),
      [BlockViewerMoniker]: await this.locator.getInstance<BlockViewer>(BlockViewerMoniker),
      [MempoolViewerMoniker]: await this.locator.getInstance<MempoolViewer>(MempoolViewerMoniker),
      [StakeViewerMoniker]: await this.locator.getInstance<StakeViewer>(StakeViewerMoniker),
      [StepViewerMoniker]: await this.locator.getInstance<StepViewer>(StepViewerMoniker),
      [NetworkStakeViewerMoniker]: await this.locator.getInstance<NetworkStakeViewer>(NetworkStakeViewerMoniker),
      [TimeSyncViewerMoniker]: await this.locator.getInstance<TimeSyncViewer>(TimeSyncViewerMoniker),
      [TransactionViewerMoniker]: await this.locator.getInstance<TransactionViewer>(TransactionViewerMoniker),
    }

    for (const [moniker, provider] of Object.entries(assertEx(this._providers, () => 'Failed to initialize JsonRpcXyoViewer: providers not found'))) {
      if (isUndefined(provider)) {
        throw new Error(`Failed to initialize JsonRpcXyoViewer: missing provider dependency for ${moniker}`)
      }
    }
  }

  async currentBlock(): Promise<SignedHydratedBlockWithHashMeta> {
    const result = await this.transport.sendRequest('xyoViewer_currentBlock')
    return fixSignedHydratedBlockWithHashMeta(result)
  }

  async currentBlockHash(): Promise<Hash> {
    return (await this.currentBlock())[0]._hash
  }

  async currentBlockNumber(): Promise<XL1BlockNumber> {
    return (await this.currentBlock())[0].block
  }

  async forkHistory(): Promise<ForkHistory> {
    return (await this.transport.sendRequest('xyoViewer_forkHistory'))
  }

  async networkStakeStepRewardAddressHistory(address: Address) {
    return (await this.transport.sendRequest('xyoViewer_networkStakeStepRewardAddressHistory', [address]))
  }

  async networkStakeStepRewardAddressReward(context: StepIdentity, address: Address) {
    return (await this.transport.sendRequest('xyoViewer_networkStakeStepRewardAddressReward', [context, address]))
  }

  async networkStakeStepRewardAddressShare(context: StepIdentity, address: Address): Promise<[bigint, bigint]> {
    return (await this.transport.sendRequest('xyoViewer_networkStakeStepRewardAddressShare', [context, address]))
  }

  async networkStakeStepRewardClaimedByAddress(address: Address) {
    return (await this.transport.sendRequest('xyoViewer_networkStakeStepRewardClaimedByAddress', [address]))
  }

  async networkStakeStepRewardForPosition(position: number, range: [number, number]) {
    return (await this.transport.sendRequest('xyoViewer_networkStakeStepRewardForPosition', [position, range]))
  }

  async networkStakeStepRewardForStep(context: StepIdentity) {
    return (await this.transport.sendRequest('xyoViewer_networkStakeStepRewardForStep', [context]))
  }

  async networkStakeStepRewardForStepForPosition(context: StepIdentity, position: number) {
    return (await this.transport.sendRequest('xyoViewer_networkStakeStepRewardForStepForPosition', [context, position]))
  }

  async networkStakeStepRewardPoolRewards(context: StepIdentity) {
    return (await this.transport.sendRequest('xyoViewer_networkStakeStepRewardPoolRewards', [context]))
  }

  async networkStakeStepRewardPoolShares(context: StepIdentity): Promise<Record<Address, bigint>> {
    return (await this.transport.sendRequest('xyoViewer_networkStakeStepRewardPoolShares', [context]))
  }

  async networkStakeStepRewardPositionWeight(context: StepIdentity, position: number): Promise<bigint> {
    return (await this.transport.sendRequest('xyoViewer_networkStakeStepRewardPositionWeight', [context, position]))
  }

  async networkStakeStepRewardPotentialPositionLoss(context: StepIdentity, position: number) {
    return (await this.transport.sendRequest('xyoViewer_networkStakeStepRewardPotentialPositionLoss', [context, position]))
  }

  async networkStakeStepRewardRandomizer(context: StepIdentity) {
    return (await this.transport.sendRequest('xyoViewer_networkStakeStepRewardRandomizer', [context]))
  }

  async networkStakeStepRewardStakerCount(context: StepIdentity): Promise<number> {
    return (await this.transport.sendRequest('xyoViewer_networkStakeStepRewardStakerCount', [context]))
  }

  async networkStakeStepRewardUnclaimedByAddress(address: Address) {
    return (await this.transport.sendRequest('xyoViewer_networkStakeStepRewardUnclaimedByAddress', [address]))
  }

  async networkStakeStepRewardWeightForAddress(context: StepIdentity, address: Address): Promise<bigint> {
    return (await this.transport.sendRequest('xyoViewer_networkStakeStepRewardWeightForAddress', [context, address]))
  }

  async networkStakeStepRewardsForPosition(position: number, range: [number, number]) {
    return (await this.transport.sendRequest('xyoViewer_networkStakeStepRewardsForPosition', [position, range]))
  }

  async networkStakeStepRewardsForRange(range: [number, number]) {
    return (await this.transport.sendRequest('xyoViewer_networkStakeStepRewardsForRange', [range]))
  }

  async networkStakeStepRewardsForStepLevel(stepLevel: number, range: [number, number]) {
    return (await this.transport.sendRequest('xyoViewer_networkStakeStepRewardsForStepLevel', [stepLevel, range]))
  }

  async payloadByHash(hash: Hash) {
    return (await this.payloadsByHash([hash]))[0] ?? null
  }

  async payloadsByHash(hashes: Hash[]) {
    return await PayloadBuilder.addHashMeta(await this.transport.sendRequest(
      'xyoViewer_payloadsByHash',
      [hashes],
    ))
  }

  async rate(range: XL1BlockRange, timeUnit?: keyof TimeDurations): Promise<BlockRate> {
    return await this.block.rate(range, timeUnit)
  }

  async stakeById(id: number): Promise<Position> {
    return (await this.transport.sendRequest('xyoViewer_stakeById', [id]))
  }

  async stakeByStaker(staker: Address, slot: number): Promise<Position> {
    return (await this.transport.sendRequest('xyoViewer_stakeByStaker', [staker, slot]))
  }

  async stakesByStaked(staked: Address): Promise<Position[]> {
    return (await this.transport.sendRequest('xyoViewer_stakesByStaked', [staked]))
  }

  async stakesByStaker(staker: Address): Promise<Position[]> {
    return (await this.transport.sendRequest('xyoViewer_stakesByStaker', [staker]))
  }

  async stepSizeRate(start: XL1BlockNumber, stepIndex: number, count?: number, timeUnit?: keyof TimeDurations): Promise<BlockRate> {
    return await this.block.stepSizeRate(start, stepIndex, count, timeUnit)
  }

  async timeDurationRate(
    timeConfig: SingleTimeConfig,
    startBlockNumber?: XL1BlockNumber,
    timeUnit?: keyof TimeDurations,
    toleranceMs?: number,
    maxAttempts?: number,
  ): Promise<BlockRate> {
    return await this.block.timeDurationRate(timeConfig, startBlockNumber, timeUnit, toleranceMs, maxAttempts)
  }

  async transactionByBlockHashAndIndex(blockHash: Hash, transactionIndex: number): Promise<SignedHydratedTransaction | null> {
    return (await this.transport.sendRequest('xyoViewer_transactionByBlockHashAndIndex', [blockHash, transactionIndex])) as SignedHydratedTransaction | null
  }

  async transactionByBlockNumberAndIndex(blockNumber: number, transactionIndex: number): Promise<SignedHydratedTransaction | null> {
    return (await this.transport.sendRequest('xyoViewer_transactionByBlockNumberAndIndex', [blockNumber, transactionIndex])) as SignedHydratedTransaction | null
  }

  async transactionByHash(transactionHash: Hash): Promise<SignedHydratedTransaction | null> {
    return (await this.transport.sendRequest('xyoViewer_transactionByHash', [transactionHash])) as SignedHydratedTransaction | null
  }

  protected schemas() {
    return XyoViewerRpcSchemas
  }
}
