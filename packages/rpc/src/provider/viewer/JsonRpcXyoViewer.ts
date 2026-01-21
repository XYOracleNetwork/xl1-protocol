import type { Address, Hash } from '@xylabs/sdk-js'
import { Signed } from '@xyo-network/boundwitness-model'
import type {
  AttoXL1,
  BlockBoundWitnessWithHashMeta,
  BlockRate,
  ChainId,
  HydratedBlock,
  SignedHydratedBlockWithHashMeta,
  SignedHydratedTransaction,
  SingleTimeConfig,
  StepIdentity,
  TimeDurations,
  XL1BlockNumber,
  XL1BlockRange,
} from '@xyo-network/xl1-protocol'
import {
  isSignedHydratedBlock, isSignedHydratedBlockWithHashMeta,
  toWithHashMeta,
} from '@xyo-network/xl1-protocol'
import type {
  AccountBalanceHistoryItem,
  AccountBalanceViewer,
  BlockViewer,
  ChainQualifiedConfig,
  ForkHistory,
  MempoolViewer,
  NetworkStakeViewer, Position,
  StakeViewer,
  StepViewer,
  TimeSyncViewer,
  XyoViewer,
} from '@xyo-network/xl1-protocol-sdk'
import {
  AccountBalanceViewerMoniker, BlockViewerMoniker, creatableProvider, MempoolViewerMoniker,
  NetworkStakeViewerMoniker, StepViewerMoniker, TimeSyncViewerMoniker, XyoViewerMoniker,
} from '@xyo-network/xl1-protocol-sdk'

import { XyoViewerRpcSchemas } from '../../types/index.ts'
import type { JsonRpcViewerParams } from './JsonRpcViewer.ts'
import { AbstractJsonRpcViewer } from './JsonRpcViewer.ts'

// TODO: remove after back compat need is done
async function fixSignedHydratedBlockWithHashMeta(block: HydratedBlock): Promise<SignedHydratedBlockWithHashMeta> {
  if (isSignedHydratedBlockWithHashMeta(block)) {
    return block
  }
  if (isSignedHydratedBlock(block)) {
    return [block[0] as Signed<BlockBoundWitnessWithHashMeta>, await Promise.all(block[1].map(p => toWithHashMeta(p, true)))]
  }
  throw new Error('Invalid block format')
}

export interface JsonRpcXyoViewerParams extends JsonRpcViewerParams<typeof XyoViewerRpcSchemas> {
  networkStakeViewer?: NetworkStakeViewer
}

@creatableProvider()
export class JsonRpcXyoViewer extends AbstractJsonRpcViewer<XyoViewerRpcSchemas, JsonRpcXyoViewerParams> implements XyoViewer {
  static readonly defaultMoniker = XyoViewerMoniker

  static readonly dependencies = [
    AccountBalanceViewerMoniker,
    BlockViewerMoniker,
    MempoolViewerMoniker,
    StepViewerMoniker,
    TimeSyncViewerMoniker,
  ]

  static readonly monikers = [XyoViewerMoniker]

  moniker = JsonRpcXyoViewer.defaultMoniker

  protected _chainId?: ChainId

  private _accountBalanceViewer?: AccountBalanceViewer
  private _blockViewer?: BlockViewer
  private _mempoolViewer?: MempoolViewer
  private _networkStakeViewer?: NetworkStakeViewer
  private _stakeViewer?: StakeViewer
  private _stepViewer?: StepViewer
  private _timeSyncViewer?: TimeSyncViewer

  get account() {
    return { balance: this._accountBalanceViewer! }
  }

  get block() {
    return this._blockViewer!
  }

  get mempool() {
    return this._mempoolViewer!
  }

  get networkStake() {
    return this._networkStakeViewer!
  }

  get stake() {
    return this._stakeViewer!
  }

  get step() {
    return this._stepViewer!
  }

  get time() {
    return this._timeSyncViewer!
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
    this._accountBalanceViewer = await this.locator.getInstance<AccountBalanceViewer>(AccountBalanceViewerMoniker)
    this._blockViewer = await this.locator.getInstance<BlockViewer>(BlockViewerMoniker)
    this._mempoolViewer = await this.locator.getInstance<MempoolViewer>(MempoolViewerMoniker)
    this._stepViewer = await this.locator.getInstance<StepViewer>(StepViewerMoniker)
    this._networkStakeViewer = await this.locator.getInstance<NetworkStakeViewer>(NetworkStakeViewerMoniker)
    this._timeSyncViewer = await this.locator.getInstance<TimeSyncViewer>(TimeSyncViewerMoniker)
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
    return await Promise.all((await this.transport.sendRequest(
      'xyoViewer_payloadsByHash',
      [hashes],
    )).map(p => toWithHashMeta(p, true)))
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
