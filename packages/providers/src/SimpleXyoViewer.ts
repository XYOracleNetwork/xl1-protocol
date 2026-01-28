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
import { BoundWitnessSchema } from '@xyo-network/boundwitness-model'
import type {
  Payload, WithHashMeta, WithStorageMeta,
} from '@xyo-network/payload-model'
import type {
  AttoXL1,
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
  asAttoXL1,
  asSignedHydratedBlockWithHashMeta, asXL1BlockRange,
  isTransactionBoundWitnessWithStorageMeta, XYO_NETWORK_STAKING_ADDRESS,
  XYO_ZERO_ADDRESS,
} from '@xyo-network/xl1-protocol'
import type {
  AccountBalanceViewer,
  BlockViewer, ChainContractViewer, ChainQualifiedConfig, ChainStoreRead, CreatableProviderParams, ForkHistory,
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
  ChainContractViewerMoniker,
  creatableProvider,
  externalBlockRangeFromStep,
  externalBlockRangeFromXL1BlockRange,
  findMostRecentBlock, hydrateBlock, HydratedCache,
  MempoolViewerMoniker,
  networkStakeStepRewardPositionWeight,
  NetworkStakeStepRewardsByPositionViewerMoniker,
  NetworkStakeViewerMoniker,
  readPayloadMapFromStore, StakeViewerMoniker, stepRewardTotal, StepViewerMoniker,
  TimeSyncViewerMoniker, toStepIdentityString, tryHydrateTransaction,
  weightedStakeForRangeByPosition,
  withContextCacheResponse,
  XyoViewerMoniker,
} from '@xyo-network/xl1-protocol-sdk'

export interface SimpleXyoViewerParams extends CreatableProviderParams {
  chainId: ChainId
  finalizedArchivist: ArchivistInstance
  initRewardsCache?: boolean
  rewardMultipliers?: XL1RangeMultipliers
}

@creatableProvider()
export class SimpleXyoViewer<TParams extends SimpleXyoViewerParams = SimpleXyoViewerParams> extends AbstractCreatableProvider<TParams> implements XyoViewer {
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
  moniker = SimpleXyoViewer.defaultMoniker

  protected _tracer: Tracer | undefined

  private _accountBalanceViewer?: AccountBalanceViewer
  private _blockViewer?: BlockViewer
  private _chainContractViewer?: ChainContractViewer
  private _finalizedPayloadMap!: PayloadMapRead<WithStorageMeta<Payload>>
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

  get chainContractViewer() {
    return this._chainContractViewer!
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

  protected get finalizedArchivist() {
    return this.params.finalizedArchivist
  }

  protected get initRewardsCache() {
    return this.params.initRewardsCache ?? true
  }

  protected get networkStepRewardsByPositionViewer() {
    return this._networkStepRewardsByPositionViewer!
  }

  protected get rewardMultipliers() {
    this._rewardMultipliers = this._rewardMultipliers ?? this.params.rewardMultipliers ?? {}
    return this._rewardMultipliers
  }

  static override async paramsHandler(params: Partial<SimpleXyoViewerParams>): Promise<SimpleXyoViewerParams> {
    return {
      ...await super.paramsHandler(params),
      finalizedArchivist: assertEx(params.finalizedArchivist, () => 'SimpleXyoViewer requires a finalizedArchivist'),
      chainId: assertEx(params.chainId, () => 'SimpleXyoViewer requires a chainId'),
    } satisfies SimpleXyoViewerParams
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
    return await this.spanAsync('SimpleXyoViewer:chainId', async () => {
      const chainId = assertEx(
        blockNumber === 'latest' ? await this.chainContractViewer.chainId() : await this.chainContractViewer.chainIdAtBlockNumber(blockNumber),
        () => `Could not find block for chainId at block ${blockNumber}`,
      )
      return chainId
    }, this.context)
  }

  override async createHandler() {
    await super.createHandler()
    this._finalizedPayloadMap = readPayloadMapFromStore<WithStorageMeta<Payload>>(this.params.finalizedArchivist)
    this._accountBalanceViewer = await this.locator.getInstance<AccountBalanceViewer>(AccountBalanceViewerMoniker)
    this._blockViewer = await this.locator.getInstance<BlockViewer>(BlockViewerMoniker)
    this._chainContractViewer = await this.locator.getInstance<ChainContractViewer>(ChainContractViewerMoniker)
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

  networkStakeStepRewardAddressHistory(_address: Address): Promise<Record<Address, AttoXL1>> {
    throw new Error('Method [networkStakeStepRewardAddressHistory] not implemented.')
  }

  networkStakeStepRewardAddressReward(_context: StepIdentity, _address: Address): Promise<Record<Address, AttoXL1>> {
    throw new Error('Method [networkStakeStepRewardAddressReward] not implemented.')
  }

  networkStakeStepRewardAddressShare(_context: StepIdentity, _address: Address): Promise<[bigint, bigint]> {
    throw new Error('Method [networkStakeStepRewardAddressShare] not implemented.')
  }

  networkStakeStepRewardClaimedByAddress(_address: Address): Promise<AttoXL1> {
    throw new Error('Method [networkStakeStepRewardClaimedByAddress] not implemented.')
  }

  async networkStakeStepRewardForPosition(position: number, range: XL1BlockRange): Promise<[AttoXL1, AttoXL1]> {
    const cacheKey = `${position}|${range[0]}-${range[1]}`
    return await withContextCacheResponse(this.context, 'SimpleXyoViewer:networkStakeStepRewardForPosition', cacheKey, async () => {
      const externalRange = await externalBlockRangeFromXL1BlockRange(this.context, this.block, range)
      const positionCount = await this.stake.stakeEvents.positionCount(externalRange)
      if (positionCount === 0) {
        return [asAttoXL1(0n), asAttoXL1(0n)]
      }
      const steps = blockRangeSteps(range, [3, 4, 5, 6, 7])
      const rewards = await Promise.all(steps.map(step => this.networkStakeStepRewardForStepForPosition(step, position)))
      const positionReward = asAttoXL1(rewards.reduce((a, b) => a + b[0], 0n))
      const totalReward = asAttoXL1(rewards.reduce((a, b) => a + b[1], 0n))
      return [positionReward, totalReward]
    })
  }

  async networkStakeStepRewardForStep(stepContext: StepIdentity): Promise<AttoXL1> {
    return await stepRewardTotal(await this.getStakedChainContext(), stepContext, this.rewardMultipliers)
  }

  async networkStakeStepRewardForStepForPosition(stepIdentity: StepIdentity, position: number): Promise<[AttoXL1, AttoXL1]> {
    const stepIdentityString = toStepIdentityString(stepIdentity)
    const cacheKey = `${stepIdentityString}|${position}`
    const stakedChainContext = await this.getStakedChainContext()
    return await withContextCacheResponse(stakedChainContext, 'SimpleXyoViewer:networkStakeStepRewardForStepForPosition', cacheKey, async () => {
      const range = await externalBlockRangeFromStep(stakedChainContext, this.block, stepIdentity)
      const stake = await this.stakeById(position)
      const numerator = stake.staked === XYO_NETWORK_STAKING_ADDRESS
        ? await weightedStakeForRangeByPosition(stakedChainContext, this.block, range, XYO_NETWORK_STAKING_ADDRESS, position)
        : 0n

      const denominator = await this.stepWeightedDenominator(stepIdentity)
      const totalReward = await this.networkStakeStepRewardForStep(stepIdentity)
      const positionReward = asAttoXL1(denominator > 0n ? totalReward * numerator / denominator : 0n)
      const result: [AttoXL1, AttoXL1] = [positionReward, totalReward]
      return result
    })
  }

  async networkStakeStepRewardPoolRewards(step: StepIdentity): Promise<Record<Address, AttoXL1>> {
    const stakes = await this.stake.stakesByStaked(XYO_NETWORK_STAKING_ADDRESS)
    const rewards: [Address, [AttoXL1, AttoXL1]][] = []
    for (const stake of stakes) {
      rewards.push([stake.staker, (await this.networkStakeStepRewardForStepForPosition(
        step,
        stake.id,
      ))])
    }
    const result: Record<Address, AttoXL1> = {}
    for (const [staker, reward] of rewards) {
      result[staker] = asAttoXL1((result[staker] ?? 0n) + reward[0])
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

  networkStakeStepRewardPotentialPositionLoss(_context: StepIdentity, _position: number): Promise<AttoXL1> {
    throw new Error('Method [networkStakeStepRewardPotentialPositionLoss] not implemented.')
  }

  networkStakeStepRewardRandomizer(_context: StepIdentity): Promise<AttoXL1> {
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

  networkStakeStepRewardUnclaimedByAddress(_address: Address): Promise<AttoXL1> {
    throw new Error('Method [networkStakeStepRewardUnclaimedByAddress] not implemented.')
  }

  networkStakeStepRewardWeightForAddress(_context: StepIdentity, _address: Address): Promise<AttoXL1> {
    throw new Error('Method [networkStakeStepRewardWeightForAddress] not implemented.')
  }

  async networkStakeStepRewardsForPosition(position: number, range: XL1BlockRange): Promise<Record<StepIdentityString, [AttoXL1, AttoXL1]>> {
    const steps = blockRangeSteps(range, [3, 4, 5, 6, 7, 8])
    const rewards = await Promise.all(steps.map(async (step) => {
      return [toStepIdentityString(step), await this.networkStakeStepRewardForStepForPosition(step, position)] as [StepIdentityString, [AttoXL1, AttoXL1]]
    }))
    const result: Record<StepIdentityString, [AttoXL1, AttoXL1]> = {}
    for (const [step, reward] of rewards) {
      result[step] = reward
    }
    const filtered = Object.fromEntries(Object.entries(result).filter(([_, v]) => v[0] > 0n))
    return filtered
  }

  async networkStakeStepRewardsForRange(range: XL1BlockRange): Promise<AttoXL1> {
    return await this.spanAsync('networkStakeStepRewardsForRange', async () => {
      const steps = blockRangeSteps(range, [3, 4, 5, 6, 7, 8])
      const rewards = await Promise.all(steps.map(async (step) => {
        return await this.networkStakeStepRewardForStep(step)
      }))
      return asAttoXL1(rewards.reduce((a, b) => a + b, 0n))
    }, this.context)
  }

  async networkStakeStepRewardsForStepLevel(stepLevel: number, range: XL1BlockRange): Promise<AttoXL1> {
    const steps = blockRangeSteps(range, [stepLevel])
    const rewards = await Promise.all(steps.map(async (step) => {
      return await this.networkStakeStepRewardForStep(step)
    }))
    return asAttoXL1(rewards.reduce((a, b) => a + b, 0n))
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
    }, this.context)
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
    }, this.context)
  }

  async transactionByHash(transactionHash: Hash): Promise<SignedHydratedTransactionWithHashMeta | null> {
    return await this.spanAsync('transactionByHash', async () => {
      try {
        const cache = this.getHydratedTransactionCache()
        const hydratedTransaction = await cache.get(transactionHash)
        return hydratedTransaction ?? null
      } catch {
        return null
      }
    }, this.context)
  }

  protected async getCurrentHead() {
    const chainArchivist = this.finalizedArchivist
    const result = assertEx(await findMostRecentBlock(chainArchivist), () => 'No blocks found in finalizedArchivist')
    assertEx(result.chain === this.params.chainId, () => `Chain ID mismatch in finalizedArchivist [${result.chain} should be ${this.params.chainId}]`)
    return result
  }

  protected getHydratedBlockCache(): HydratedCache<SignedHydratedBlockWithHashMeta> {
    if (this._signedHydratedBlockCache) return this._signedHydratedBlockCache
    const chainMap = this._finalizedPayloadMap
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

  protected getHydratedTransactionCache(): HydratedCache<SignedHydratedTransactionWithHashMeta> {
    if (this._signedHydratedTransactionCache) return this._signedHydratedTransactionCache
    const chainMap = this._finalizedPayloadMap
    this._signedHydratedTransactionCache = new HydratedCache<SignedHydratedTransactionWithHashMeta>(chainMap, tryHydrateTransaction, 200)
    return this._signedHydratedTransactionCache
  }

  protected async getStakedChainContext() {
    const stake = this.stake
    const store = { chainMap: this._finalizedPayloadMap } satisfies StakedChainContextRead['store']
    const head = assertEx(await this.getCurrentHead(), () => 'No current head')
    return {
      caches: this.context.caches,
      singletons: this.context.singletons,
      head: () => { return [head._hash, head.block] },
      store,
      chainId: await this.chainId(),
      stake,
      timeBudgetLimit: this.context.timeBudgetLimit,
    } satisfies StakedChainContextRead
  }

  protected override async startHandler() {
    try {
      const currentBlockNumber = await this.currentBlockNumber()
      // initialize functions that have slow initial call
      await this.account.balance.accountBalance(XYO_ZERO_ADDRESS)
      if (this.initRewardsCache) {
        const externalRange = await externalBlockRangeFromXL1BlockRange(
          await this.getStakedChainContext(),
          this.block,
          asXL1BlockRange([0, currentBlockNumber], { name: 'startHandler' }),
        )
        const positionCount = await this.stake.stakeEvents.positionCount(externalRange)
        this.logger?.log(`SimpleXyoViewer: Precomputing networkStakeStepRewardForPosition up to position ${positionCount - 1}`)
        const positions = Array.from(
          { length: positionCount },
          (_, i) => i,
        )
        while (positions.length > 0) {
          const batch = positions.splice(0, 10)
          await Promise.all(batch.map(async (_, position) => await this.networkStakeStepRewardForPosition(
            position,
            asXL1BlockRange([0, currentBlockNumber], { name: 'startHandler' }),
          )))
        }
        this.logger?.log(`SimpleXyoViewer: Precomputed networkStakeStepRewardForPosition up to position ${positionCount - 1}`)
      }
    } catch (ex) {
      this.logger?.error(`SimpleXyoViewer: Error during startHandler initialization: ${(ex as Error).message}`)
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
