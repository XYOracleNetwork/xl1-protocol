import type { Tracer } from '@opentelemetry/api'
import type {
  Address,
  Hash, Promisable,
} from '@xylabs/sdk-js'
import {
  assertEx, exists,
  toAddress,
} from '@xylabs/sdk-js'
import type { ArchivistInstance } from '@xyo-network/archivist-model'
import { asAttachableArchivistInstance } from '@xyo-network/archivist-model'
import { BoundWitnessSchema } from '@xyo-network/boundwitness-model'
import { asDivinerInstance } from '@xyo-network/diviner-model'
import type { ModuleIdentifier } from '@xyo-network/module-model'
import type { NodeInstance } from '@xyo-network/node-model'
import type {
  Payload, WithHashMeta, WithStorageMeta,
} from '@xyo-network/payload-model'
import type {
  BlockRate,
  ChainId,
  Count,
  SignedHydratedBlockWithHashMeta,
  SignedHydratedTransactionWithHashMeta,
  SingleTimeConfig,
  StepIdentity, StepIdentityString,
  StepIndex,
  TimeDurations,
  XL1BlockNumber, XL1BlockRange, XL1RangeMultipliers,
} from '@xyo-network/xl1-protocol'
import {
  asSignedHydratedBlockWithHashMeta, asXL1BlockRange,
  isTransactionBoundWitnessWithStorageMeta, XYO_NETWORK_STAKING_ADDRESS,
  XYO_ZERO_ADDRESS,
} from '@xyo-network/xl1-protocol'
import type {
  AccountBalanceViewer,
  BlockViewer, ChainQualifiedConfig, ChainStoreRead, CreatableProviderParams, ForkHistory,
  MempoolViewer, NetworkStakeStepRewardsByPositionViewer, NetworkStakeViewer, PayloadMapRead, Position,
  StakedChainContextRead,
  StakeViewer,
  StepViewer,
  TimeSyncViewer,
  XyoViewer,
} from '@xyo-network/xl1-protocol-sdk'
import {
  AbstractCreatableProvider,
  AccountBalanceViewerMoniker,
  allStakersForStep,
  blockRangeSteps,
  BlockViewerMoniker,
  creatableProvider,
  externalBlockRangeFromStep,
  externalBlockRangeFromXL1BlockRange,
  findMostRecentBlock, hydrateBlock, HydratedCache,
  MempoolViewerMoniker,
  networkStakeStepRewardPositionWeight,
  NetworkStakeStepRewardsByPositionViewerMoniker,
  NetworkStakeViewerMoniker,
  readPayloadMapFromStore, StakeViewerMoniker, stepRewardTotal, StepViewerMoniker,
  timeBudget, TimeSyncViewerMoniker, toStepIdentityString, tryHydrateTransaction,
  weightedStakeForRangeByPosition,
  withContextCacheResponse,
  XyoViewerMoniker,
} from '@xyo-network/xl1-protocol-sdk'

export interface NodeXyoViewerParams extends CreatableProviderParams {
  initRewardsCache?: boolean
  node: NodeInstance
  rewardMultipliers?: XL1RangeMultipliers
}

@creatableProvider()
export class NodeXyoViewer extends AbstractCreatableProvider<NodeXyoViewerParams> implements XyoViewer {
  static readonly defaultMoniker = XyoViewerMoniker

  static readonly dependencies = [
    AccountBalanceViewerMoniker,
    BlockViewerMoniker,
    MempoolViewerMoniker,
    NetworkStakeViewerMoniker,
    NetworkStakeStepRewardsByPositionViewerMoniker,
    StakeViewerMoniker,
    StepViewerMoniker,
    TimeSyncViewerMoniker,
  ]

  static readonly monikers = [XyoViewerMoniker]
  moniker = NodeXyoViewer.defaultMoniker

  protected _tracer: Tracer | undefined
  protected readonly finalizedArchivistPath: ModuleIdentifier = 'XYOChain:Chain:Finalized'

  private _accountBalanceViewer?: AccountBalanceViewer
  private _blockViewer?: BlockViewer
  private _finalizedArchivist?: ArchivistInstance
  private _mempoolViewer?: MempoolViewer
  private _networkStakeViewer?: NetworkStakeViewer
  private _networkStepRewardsByPositionViewer?: NetworkStakeStepRewardsByPositionViewer
  private _rewardMultipliers?: XL1RangeMultipliers
  private _signedHydratedBlockCache?: HydratedCache<SignedHydratedBlockWithHashMeta>
  private _signedHydratedTransactionCache?: HydratedCache<SignedHydratedTransactionWithHashMeta>
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

  get step() {
    return this._stepViewer!
  }

  get time() {
    return this._timeSyncViewer!
  }

  protected get initRewardsCache() {
    return this.params.initRewardsCache ?? true
  }

  protected get networkStepRewardsByPositionViewer() {
    return this._networkStepRewardsByPositionViewer!
  }

  protected get node() {
    return this.params.node
  }

  protected get rewardMultipliers() {
    this._rewardMultipliers = this._rewardMultipliers ?? this.params.rewardMultipliers ?? {}
    return this._rewardMultipliers
  }

  protected get stake() {
    return this._stakeViewer!
  }

  static override async paramsHandler(params: Partial<NodeXyoViewerParams>): Promise<NodeXyoViewerParams> {
    return {
      ...await super.paramsHandler(params),
      node: assertEx(params.node, () => 'NodeXyoViewer requires a node'),
    } satisfies NodeXyoViewerParams
  }

  async accountBalance(address: Address, config: ChainQualifiedConfig = {}) {
    return await this.account.balance.accountBalance(address, config)
  }

  async accountBalanceHistory(address: Address, config: ChainQualifiedConfig = {}) {
    return await this.account.balance.accountBalanceHistory(address, config)
  }

  async blockByHash(hash: Hash) {
    return await this.block.blockByHash(hash)
  }

  async blockByNumber(blockNumber: XL1BlockNumber) {
    return await this.block.blockByNumber(blockNumber)
  }

  async blocksByHash(hash: Hash, limit: number = 10) {
    return await this.block.blocksByHash(hash, limit)
  }

  async blocksByNumber(blockNumber: XL1BlockNumber, limit: number = 10) {
    return await this.block.blocksByNumber(blockNumber, limit)
  }

  async chainId(): Promise<ChainId>
  async chainId(blockNumber: XL1BlockNumber): Promise<ChainId>
  async chainId(blockNumber: 'latest'): Promise<ChainId>
  async chainId(blockNumber: XL1BlockNumber | 'latest' = 'latest'): Promise<ChainId> {
    return await this.spanAsync('chainIdAtBlock', async () => {
      const block = assertEx(
        blockNumber === 'latest' ? await this.currentBlock() : await this.blockByNumber(blockNumber),
        () => `Could not find block for chainId at block ${blockNumber}`,
      )
      return block[0].chain
    }, { timeBudgetLimit: 200 })
  }

  override async createHandler() {
    await super.createHandler()
    this._accountBalanceViewer = await this.locator.getInstance<AccountBalanceViewer>(AccountBalanceViewerMoniker)
    this._blockViewer = await this.locator.getInstance<BlockViewer>(BlockViewerMoniker)
    this._mempoolViewer = await this.locator.getInstance<MempoolViewer>(MempoolViewerMoniker)
    this._networkStakeViewer = await this.locator.getInstance<NetworkStakeViewer>(NetworkStakeViewerMoniker)
    this._networkStepRewardsByPositionViewer
      = await this.locator.getInstance<NetworkStakeStepRewardsByPositionViewer>(NetworkStakeStepRewardsByPositionViewerMoniker)
    this._stakeViewer = await this.locator.getInstance<StakeViewer>(StakeViewerMoniker)
    this._stepViewer = await this.locator.getInstance<StepViewer>(StepViewerMoniker)
    this._timeSyncViewer = await this.locator.getInstance<TimeSyncViewer>(TimeSyncViewerMoniker)
  }

  async currentBlock() {
    return await this.block.currentBlock()
  }

  async currentBlockHash() {
    return await this.block.currentBlockHash()
  }

  async currentBlockNumber() {
    return await this.block.currentBlockNumber()
  }

  forkHistory(): Promisable<ForkHistory> {
    throw new Error('Method [forkHistory] not implemented.')
  }

  networkStakeStepRewardAddressHistory(_address: Address): Promise<Record<Address, bigint>> {
    throw new Error('Method [networkStakeStepRewardAddressHistory] not implemented.')
  }

  networkStakeStepRewardAddressReward(_context: StepIdentity, _address: Address): Promise<Record<Address, bigint>> {
    throw new Error('Method [networkStakeStepRewardAddressReward] not implemented.')
  }

  networkStakeStepRewardAddressShare(_context: StepIdentity, _address: Address): Promise<[bigint, bigint]> {
    throw new Error('Method [networkStakeStepRewardAddressShare] not implemented.')
  }

  networkStakeStepRewardClaimedByAddress(_address: Address): Promise<bigint> {
    throw new Error('Method [networkStakeStepRewardClaimedByAddress] not implemented.')
  }

  async networkStakeStepRewardForPosition(position: number, range: XL1BlockRange): Promise<[bigint, bigint]> {
    return await timeBudget('networkStakeStepRewardForPosition', this.logger, async () => {
      const externalRange = await externalBlockRangeFromXL1BlockRange(this.context, this.block, range)
      const positionCount = await this.stake.stakeEvents.positionCount(externalRange)
      if (positionCount === 0) {
        return [0n, 0n]
      }
      const steps = blockRangeSteps(range, [3, 4, 5, 6, 7])
      const rewards = await Promise.all(steps.map(step => this.networkStakeStepRewardForStepForPosition(step, position)))
      const positionReward = rewards.reduce((a, b) => a + b[0], 0n)
      const totalReward = rewards.reduce((a, b) => a + b[1], 0n)
      return [positionReward, totalReward]
    }, 100)
  }

  async networkStakeStepRewardForStep(stepContext: StepIdentity): Promise<bigint> {
    return await stepRewardTotal(await this.getStakedChainContext(), stepContext, this.rewardMultipliers)
  }

  async networkStakeStepRewardForStepForPosition(stepIdentity: StepIdentity, position: number): Promise<[bigint, bigint]> {
    const stepIdentityString = toStepIdentityString(stepIdentity)
    const cacheKey = `${stepIdentityString}|${position}`
    const stakedChainContext = await this.getStakedChainContext()
    return await withContextCacheResponse(stakedChainContext, 'NodeXyoViewer-networkStakeStepRewardForStepForPosition', cacheKey, async () => {
      const range = await externalBlockRangeFromStep(stakedChainContext, this.block, stepIdentity)
      const stake = await this.stakeById(position)
      const numerator = stake.staked === XYO_NETWORK_STAKING_ADDRESS
        ? await weightedStakeForRangeByPosition(stakedChainContext, this.block, range, XYO_NETWORK_STAKING_ADDRESS, position)
        : 0n

      const denominator = await this.stepWeightedDenominator(stepIdentity)
      const totalReward = await this.networkStakeStepRewardForStep(stepIdentity)
      const positionReward = denominator > 0n ? totalReward * numerator / denominator : 0n
      const result: [bigint, bigint] = [positionReward, totalReward]
      return result
    })
  }

  async networkStakeStepRewardPoolRewards(step: StepIdentity): Promise<Record<Address, bigint>> {
    const stakes = await this.stake.stakesByStaked(XYO_NETWORK_STAKING_ADDRESS)
    const rewards: [Address, [bigint, bigint]][] = []
    for (const stake of stakes) {
      rewards.push([stake.staker, (await this.networkStakeStepRewardForStepForPosition(
        step,
        stake.id,
      ))])
    }
    const result: Record<Address, bigint> = {}
    for (const [staker, reward] of rewards) {
      result[staker] = (result[staker] ?? 0n) + reward[0]
    }
    const filtered = Object.fromEntries(Object.entries(result).filter(([_, v]) => v > 0n))
    return filtered
  }

  networkStakeStepRewardPoolShares(_context: StepIdentity): Promise<Record<Address, bigint>> {
    throw new Error('Method [networkStakeStepRewardPoolShares] not implemented.')
  }

  async networkStakeStepRewardPositionWeight(stepContext: StepIdentity, position: number): Promise<bigint> {
    return await networkStakeStepRewardPositionWeight(await this.getStakedChainContext(), this.block, stepContext, position)
  }

  networkStakeStepRewardPotentialPositionLoss(_context: StepIdentity, _position: number): Promise<bigint> {
    throw new Error('Method [networkStakeStepRewardPotentialPositionLoss] not implemented.')
  }

  networkStakeStepRewardRandomizer(_context: StepIdentity): Promise<bigint> {
    throw new Error('Method [networkStakeStepRewardRandomizer] not implemented.')
  }

  async networkStakeStepRewardStakerCount(stepContext: StepIdentity): Promise<number> {
    return Object.keys(await allStakersForStep(
      await this.getStakedChainContext(),
      this.block,
      stepContext,
      XYO_NETWORK_STAKING_ADDRESS,
    )).length
  }

  networkStakeStepRewardUnclaimedByAddress(_address: Address): Promise<bigint> {
    throw new Error('Method [networkStakeStepRewardUnclaimedByAddress] not implemented.')
  }

  networkStakeStepRewardWeightForAddress(_context: StepIdentity, _address: Address): Promise<bigint> {
    throw new Error('Method [networkStakeStepRewardWeightForAddress] not implemented.')
  }

  async networkStakeStepRewardsForPosition(position: number, range: XL1BlockRange): Promise<Record<StepIdentityString, [bigint, bigint]>> {
    const steps = blockRangeSteps(range, [3, 4, 5, 6, 7, 8])
    const rewards = await Promise.all(steps.map(async (step) => {
      return [toStepIdentityString(step), await this.networkStakeStepRewardForStepForPosition(step, position)] as [StepIdentityString, [bigint, bigint]]
    }))
    const result: Record<StepIdentityString, [bigint, bigint]> = {}
    for (const [step, reward] of rewards) {
      result[step] = reward
    }
    const filtered = Object.fromEntries(Object.entries(result).filter(([_, v]) => v[0] > 0n))
    return filtered
  }

  async networkStakeStepRewardsForRange(range: XL1BlockRange): Promise<bigint> {
    return await timeBudget('networkStakeStepRewardsForRange', this.logger, async () => {
      const steps = blockRangeSteps(range, [3, 4, 5, 6, 7, 8])
      const rewards = await Promise.all(steps.map(async (step) => {
        return await this.networkStakeStepRewardForStep(step)
      }))
      return rewards.reduce((a, b) => a + b, 0n)
    }, 100)
  }

  async networkStakeStepRewardsForStepLevel(stepLevel: number, range: XL1BlockRange): Promise<bigint> {
    const steps = blockRangeSteps(range, [stepLevel])
    const rewards = await Promise.all(steps.map(async (step) => {
      return await this.networkStakeStepRewardForStep(step)
    }))
    return rewards.reduce((a, b) => a + b, 0n)
  }

  payloadByHash(_hash: Hash): Promisable<WithHashMeta<Payload> | null> {
    throw new Error('Method [payloadByHash] not implemented.')
  }

  payloadsByHash(_hashes: Hash[]): Promisable<WithHashMeta<Payload>[]> {
    throw new Error('Method [payloadsByHash] not implemented.')
  }

  async rate(range: XL1BlockRange, timeUnit?: keyof TimeDurations): Promise<BlockRate> {
    return await this.block.rate(range, timeUnit)
  }

  async stakeById(id: number): Promise<Position> {
    return await this.stake.stakeById(id)
  }

  async stakeByStaker(staker: Address, slot: number): Promise<Position> {
    return await this.stake.stakeByStaker(staker, slot)
  }

  async stakedByStaker(staker: Address): Promise<Address[]> {
    const result: Set<Address> = new Set()
    let slot = 0
    while (true) {
      try {
        const ethStake = await this.stake.stakeByStaker(staker, slot)
        result.add(toAddress(ethStake.staked))
        slot++
      } catch {
        break
      }
    }
    return [...result]
  }

  async stakesByStaked(staked: Address): Promise<Position[]> {
    return await this.stake.stakesByStaked(staked)
  }

  async stakesByStaker(staker: Address): Promise<Position[]> {
    return await this.stake.stakesByStaker(staker)
  }

  async stepSizeRate(start: XL1BlockNumber, stepSizeIndex: StepIndex, count?: Count, timeUnit?: keyof TimeDurations): Promise<BlockRate> {
    return await this.block.stepSizeRate(start, stepSizeIndex, count, timeUnit)
  }

  async timeDurationRate(
    timeConfig: SingleTimeConfig,
    startBlock: XL1BlockNumber,
    timeUnit?: keyof TimeDurations,
    toleranceMs?: number,
    maxAttempts?: number,
  ): Promise<BlockRate> {
    return await this.block.timeDurationRate(timeConfig, startBlock, timeUnit, toleranceMs, maxAttempts)
  }

  async transactionByBlockHashAndIndex(blockHash: Hash, transactionIndex: number = 0): Promise<SignedHydratedTransactionWithHashMeta | null> {
    return await this.spanAsync('transactionByBlockHashAndIndex', async () => {
      assertEx(transactionIndex >= 0, () => 'transactionIndex must be greater than or equal to 0')
      try {
        const block = await this.blockByHash(blockHash)
        if (!block) return null
        const blockBoundWitnessIndexes = block[0].payload_schemas.map((schema, index) => schema === BoundWitnessSchema ? index : undefined).filter(exists)
        const blockBoundWitnessHashes = new Set(blockBoundWitnessIndexes.map(index => block[0].payload_hashes[index]))
        const blockBoundWitnesses = block[1].filter(payload => blockBoundWitnessHashes.has(payload._hash) || blockBoundWitnessHashes.has(payload._dataHash))
        const blockTransactionBoundWitnesses = blockBoundWitnesses.filter(isTransactionBoundWitnessWithStorageMeta)
        const transaction = blockTransactionBoundWitnesses.at(transactionIndex)
        if (!transaction) return null
        return await this.transactionByHash(transaction._hash)
      } catch {
        return null
      }
    }, { timeBudgetLimit: 200 })
  }

  async transactionByBlockNumberAndIndex(blockNumber: XL1BlockNumber, transactionIndex: number = 0): Promise<SignedHydratedTransactionWithHashMeta | null> {
    return await this.spanAsync('transactionByBlockNumberAndIndex', async () => {
      try {
        const block = await this.blockByNumber(blockNumber)
        if (!block) return null
        return await this.transactionByBlockHashAndIndex(block[0]._hash, transactionIndex)
      } catch {
        return null
      }
    }, { timeBudgetLimit: 200 })
  }

  async transactionByHash(transactionHash: Hash): Promise<SignedHydratedTransactionWithHashMeta | null> {
    return await this.spanAsync('transactionByHash', async () => {
      try {
        const cache = await this.getHydratedTransactionCache()
        const hydratedTransaction = await cache.get(transactionHash)
        return hydratedTransaction ?? null
      } catch {
        return null
      }
    }, { timeBudgetLimit: 200 })
  }

  protected getArchivist = async (identifier: ModuleIdentifier) => {
    const archivist = await this.node.resolve(identifier)
    return assertEx(asAttachableArchivistInstance(archivist), () => `Could not resolve ${identifier} to an archivist instance`)
  }

  protected async getCurrentHead() {
    const chainArchivist = await this.getFinalizedArchivist()
    return await findMostRecentBlock(chainArchivist)
  }

  protected getDiviner = async (identifier: ModuleIdentifier) => {
    const diviner = await this.node.resolve(identifier)
    return assertEx(asDivinerInstance(diviner), () => `Could not resolve ${identifier} to a diviner instance`)
  }

  protected getFinalizedArchivist = async (): Promise<ArchivistInstance> => {
    if (this._finalizedArchivist) return this._finalizedArchivist
    const resolved = await this.getArchivist(this.finalizedArchivistPath)
    this._finalizedArchivist = resolved
    return assertEx(this._finalizedArchivist, () => `Could not resolve finalized archivist at ${this.finalizedArchivistPath}`)
  }

  protected getFinalizedPayloadMap = async (): Promise<PayloadMapRead<WithStorageMeta<Payload>>> => {
    const archivist = this.getFinalizedArchivist()
    return readPayloadMapFromStore<WithStorageMeta<Payload>>(await archivist)
  }

  protected async getHydratedBlockCache(): Promise<HydratedCache<SignedHydratedBlockWithHashMeta>> {
    if (this._signedHydratedBlockCache) return this._signedHydratedBlockCache
    const chainMap = await this.getFinalizedPayloadMap()
    this._signedHydratedBlockCache = new HydratedCache<SignedHydratedBlockWithHashMeta>(chainMap, async (
      { chainMap }: ChainStoreRead,
      hash: Hash,
      maxDepth?: number,
      minDepth?: number,
    ) => {
      const result = await hydrateBlock({ chainMap }, hash, maxDepth, minDepth)
      return asSignedHydratedBlockWithHashMeta(result, true)
    }, 200)
    return this._signedHydratedBlockCache
  }

  protected async getHydratedTransactionCache(): Promise<HydratedCache<SignedHydratedTransactionWithHashMeta>> {
    if (this._signedHydratedTransactionCache) return this._signedHydratedTransactionCache
    const chainMap = await this.getFinalizedPayloadMap()
    this._signedHydratedTransactionCache = new HydratedCache<SignedHydratedTransactionWithHashMeta>(chainMap, tryHydrateTransaction, 200)
    return this._signedHydratedTransactionCache
  }

  protected async getStakedChainContext() {
    const stake = this.stake
    const store = { chainMap: await this.getFinalizedPayloadMap() } satisfies StakedChainContextRead['store']
    return {
      caches: this.context.caches,
      singletons: this.context.singletons,
      head: function (): Promisable<[Hash, number]> {
        throw new Error('Function not implemented.')
      },
      store,
      chainId: await this.chainId(),
      stake,
    } satisfies StakedChainContextRead
  }

  protected override async startHandler() {
    try {
      const currentBlockNumber = await this.currentBlockNumber()
      // initialize functions that have slow initial call
      await this.accountBalance(XYO_ZERO_ADDRESS)
      if (this.initRewardsCache) {
        const externalRange = await externalBlockRangeFromXL1BlockRange(
          await this.getStakedChainContext(),
          this.block,
          asXL1BlockRange([0, currentBlockNumber], { name: 'startHandler' }),
        )
        const positionCount = await this.stake.stakeEvents.positionCount(externalRange)
        this.logger?.log(`NodeXyoViewer: Precomputing networkStakeStepRewardForPosition up to position ${positionCount - 1}`)
        for (let position = 0; position < positionCount; position++) {
          await this.networkStakeStepRewardForPosition(position, asXL1BlockRange([0, currentBlockNumber], { name: 'startHandler' }))
        }
        this.logger?.log(`NodeXyoViewer: Precomputed networkStakeStepRewardForPosition up to position ${positionCount - 1}`)
      }
    } catch (ex) {
      this.logger?.error(`NodeXyoViewer: Error during startHandler initialization: ${(ex as Error).message}`)
      this.logger?.error((ex as Error).stack ?? '<No Stack>')
      throw ex
    }
  }

  protected async stepWeightedDenominator(stepIdentity: StepIdentity, staked?: Address): Promise<bigint> {
    const cacheKey = toStepIdentityString(stepIdentity)
    const stakedChainContext = await this.getStakedChainContext()
    return await withContextCacheResponse(stakedChainContext, 'NodeXyoViewer-networkStakeStepRewardForStepForPosition-denominator', cacheKey, async () => {
      const range = await externalBlockRangeFromStep(stakedChainContext, this.block, stepIdentity)
      return await weightedStakeForRangeByPosition(stakedChainContext, this.block, range, staked)
    })
  }
}
