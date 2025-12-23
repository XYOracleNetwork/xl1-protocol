import type { Address, Hash } from '@xylabs/sdk-js'
import {
  asHash,
  assertEx, exists, isDefined, spanRootAsync,
  ZERO_ADDRESS,
} from '@xylabs/sdk-js'
import type { WithHashMeta, WithStorageMeta } from '@xyo-network/payload-model'
import type {
  SignedBlockBoundWitnessWithHashMeta, Transfer, XL1BlockNumber, XL1BlockRange,
} from '@xyo-network/xl1-protocol'
import {
  asRange, asXL1BlockNumber, asXL1BlockRange, AttoXL1,
  StepSizes,
  TransferSchema,
} from '@xyo-network/xl1-protocol'

import { deepCalculateFramesFromRange } from '../../block/index.ts'
import type { CreatableProviderParams } from '../../CreatableProvider/index.ts'
import { AbstractCreatableProvider, creatableProvider } from '../../CreatableProvider/index.ts'
import {
  ChainQualification, type ChainQualified, isChainQualifiedHeadConfig, isChainQualifiedRangeConfig,
} from '../../model/index.ts'
import type {
  BalanceStepSummaryContext,
  TransfersStepSummary,
  TransfersStepSummaryContext,
} from '../../summary/index.ts'
import {
  balancesSummary,
  transfersStepSummaryFromRange,
} from '../../summary/index.ts'
import {
  AccountBalanceConfig,
  type AccountBalanceHistoryItem, type AccountBalanceViewer, AccountBalanceViewerMoniker,
  type BlockViewer,
  BlockViewerMoniker,
} from '../../viewers/index.ts'

export interface SimpleAccountBalanceViewerParams extends CreatableProviderParams {
  balanceSummaryContext: BalanceStepSummaryContext
  transfersSummaryContext: TransfersStepSummaryContext
}

@creatableProvider()
export class SimpleAccountBalanceViewer extends AbstractCreatableProvider<SimpleAccountBalanceViewerParams> implements AccountBalanceViewer {
  static readonly defaultMoniker = AccountBalanceViewerMoniker
  static readonly dependencies = [BlockViewerMoniker]
  static readonly monikers = [AccountBalanceViewerMoniker]
  moniker = SimpleAccountBalanceViewer.defaultMoniker

  private _blockViewer?: BlockViewer

  get balanceSummaryContext() {
    return this.params.balanceSummaryContext!
  }

  get blockViewer() {
    return this._blockViewer!
  }

  get transfersSummaryContext() {
    return this.params.transfersSummaryContext!
  }

  static override async paramsHandler(params: Partial<SimpleAccountBalanceViewerParams> = {}) {
    assertEx(params.transfersSummaryContext, () => 'transfersSummaryContext is required')
    assertEx(params.balanceSummaryContext, () => 'balanceSummaryContext is required')

    return await super.paramsHandler({ ...params })
  }

  async accountBalance(address: Address, config?: AccountBalanceConfig) {
    const balances = await this.accountBalances([address], config)
    return balances[address] ?? AttoXL1(0n)
  }

  async accountBalanceHistories(addresses: Address[], config: AccountBalanceConfig = {}) {
    return (await this.qualifiedAccountBalanceHistories(addresses, config))[0]
  }

  async accountBalanceHistory(address: Address, config?: AccountBalanceConfig) {
    const range = isChainQualifiedRangeConfig(config) ? config.range : undefined
    const startingRange = asXL1BlockRange(range ?? [0, await this.blockViewer.currentBlockNumber()], true)
    const blockNumbers = await this.distillTransferHistory(address, startingRange)
    const blocks = (await Promise.all(blockNumbers.map(async bn => await this.blockViewer.blockByNumber(bn)))).filter(exists)
    const result: AccountBalanceHistoryItem[] = []
    for (const block of blocks) {
      const transferIndexes = block[0].payload_schemas.map((schema, index) => schema === TransferSchema ? index : undefined).filter(exists)
      const transfers = transferIndexes.map((index) => {
        const hash = block[0].payload_hashes[index]
        return assertEx(
          block[1].find(p => p._hash === hash) as WithStorageMeta<Transfer>,
          () => `Error: Could not find Transfer with hash ${hash} in block ${block[0]._hash}`,
        )
      }).filter(exists).filter(t => ((t.from === address) || (isDefined(t.transfers[address]))))
      if (transfers.length === 0) {
        continue
      }
      const pairs: [SignedBlockBoundWitnessWithHashMeta, WithHashMeta<Transfer>][] = (transfers.map((transfer) => {
        return [block[0], transfer]
      }))
      result.push(...pairs.map(([block, transfer]) => [block,
        null,
        transfer] satisfies AccountBalanceHistoryItem))
    }
    return result
  }

  async accountBalances(address: Address[], config?: AccountBalanceConfig) {
    const [result] = (await this.qualifiedAccountBalances(address, config ?? {}))
    return result
  }

  override async createHandler() {
    await super.createHandler()
    this._blockViewer = await this.locator.getInstance(BlockViewerMoniker)
  }

  async qualifiedAccountBalanceHistories(
    addresses: Address[],
    config: AccountBalanceConfig,
  ) {
    const head = isChainQualifiedHeadConfig(config) ? config.head : await this.blockViewer.currentBlockHash()
    const range = isChainQualifiedRangeConfig(config)
      ? config.range
      : asXL1BlockRange([0,
          assertEx(
            await this.blockViewer.blockByHash(head),
            () => `Error: Could not find block with hash ${head}`,
          )[0].block])
    const qualifiedEntries = await Promise.all(addresses.map(async address => ([
      address,
      await this.qualifiedAccountBalanceHistory(address, range),
    ]))) satisfies [Address, ChainQualified<AccountBalanceHistoryItem[]>][]

    const entries = qualifiedEntries.map(([address, [history]]) => {
      return [address, history]
    })
    const qualifiedRange = qualifiedEntries[0][1][1].range
    const qualifiedHeadHash = qualifiedEntries[0][1][1].head

    // check for drift
    for (const [_, [__, { range, head }]] of qualifiedEntries) {
      assertEx(
        range[0] === qualifiedRange[0] && range[1] === qualifiedRange[1],
        () => 'Inconsistent ranges in qualifiedAccountBalanceHistories',
      )
      assertEx(
        head === qualifiedHeadHash,
        () => 'Inconsistent head hashes in qualifiedAccountBalanceHistories',
      )
    }

    return [Object.fromEntries(entries), { range: qualifiedRange, head: qualifiedHeadHash }] satisfies
      [Record<Address, AccountBalanceHistoryItem[]>, ChainQualification]
  }

  async qualifiedAccountBalances(
    address: Address[],
    config: AccountBalanceConfig,
  ): Promise<ChainQualified<Record<Address, AttoXL1>>> {
    return await spanRootAsync('qualifiedAccountsBalances', async () => {
      const qualifiedSummary = await balancesSummary(
        { ...this.balanceSummaryContext },
        config,
      )
      const result: Record<Address, AttoXL1> = {}
      for (const addr of address) {
        const summaryBalance = qualifiedSummary[0][addr] ?? 0n
        result[addr] = AttoXL1(summaryBalance < 0n ? 0n : summaryBalance)
      }
      return [result, qualifiedSummary[1]]
    })
  }

  override async startHandler() {
    await super.startHandler()
    await Promise.all([
      this.accountBalance(ZERO_ADDRESS),
      this.accountBalanceHistory(ZERO_ADDRESS),
    ])
  }

  private async distillTransferHistory(address: Address, range: XL1BlockRange, max: number = 50): Promise<XL1BlockNumber[]> {
    if ((range[1] - range[0]) <= StepSizes[0] || max <= 1) {
      return Array.from({ length: range[1] - range[0] + 1 }, (_, i) => range[1] - i).slice(0, max).map(n => asXL1BlockNumber(n, true))
    }
    const frames = deepCalculateFramesFromRange(asXL1BlockRange(range, true))
    const transferSummaryPairs = await Promise.all(frames.map(
      async (frame) => {
        return [frame, await transfersStepSummaryFromRange(this.transfersSummaryContext, frame)]
      },
    )) as [XL1BlockRange, WithStorageMeta<TransfersStepSummary>][]

    const filteredTransferSummaryPairs = transferSummaryPairs.filter(([_, summary]) => Object.keys(summary.transfers).includes(address))

    // sort it latest to earliest
    const sortedTransferSummaryPairs = filteredTransferSummaryPairs.toSorted((a, b) => {
      return b[0][1] - a[0][1]
    })

    const resultBlockNumbers: Set<XL1BlockNumber> = new Set()
    for (const [frame] of sortedTransferSummaryPairs) {
      if ((frame[1] - frame[0] + 1) > StepSizes[0]) {
        const values = await this.distillTransferHistory(address, asXL1BlockRange([frame[0], frame[1] - 1], true), max - resultBlockNumbers.size)
        for (const value of values) {
          resultBlockNumbers.add(value)
        }
        resultBlockNumbers.add(frame[1])
      } else {
        for (let i = frame[0]; i <= frame[1]; i++) {
          resultBlockNumbers.add(i)
        }
      }
      if (resultBlockNumbers.size >= max) {
        break
      }
    }
    return [...resultBlockNumbers].toSorted((a, b) => b - a).slice(0, max)
  }

  private async qualifiedAccountBalanceHistory(
    address: Address,
    headOrRange?: Hash | XL1BlockRange,
  ): Promise<ChainQualified<AccountBalanceHistoryItem[]>> {
    const range = asRange(headOrRange)
    const headHash = asHash(headOrRange)
    const [head] = assertEx(isDefined(headHash)
      ? (await this.blockViewer.blockByHash(headHash))
      : (await this.blockViewer.currentBlock()), () => 'Could not resolve head block')
    const startingRange = asXL1BlockRange(range ?? [0, head.block], true)
    const blockNumbers = await this.distillTransferHistory(address, startingRange)
    const blocks = (await Promise.all(blockNumbers.map(async bn => await this.blockViewer.blockByNumber(bn)))).filter(exists)
    const result: AccountBalanceHistoryItem[] = []
    for (const block of blocks) {
      const transferIndexes = block[0].payload_schemas.map((schema, index) => schema === TransferSchema ? index : undefined).filter(exists)
      const transfers = transferIndexes.map((index) => {
        const hash = block[0].payload_hashes[index]
        return assertEx(
          block[1].find(p => p._hash === hash) as WithStorageMeta<Transfer>,
          () => `Error: Could not find Transfer with hash ${hash} in block ${block[0]._hash}`,
        )
      }).filter(exists).filter(t => ((t.from === address) || (isDefined(t.transfers[address]))))
      if (transfers.length === 0) {
        continue
      }
      const pairs: [SignedBlockBoundWitnessWithHashMeta, WithHashMeta<Transfer>][] = (transfers.map((transfer) => {
        return [block[0], transfer]
      }))
      result.push(...pairs.map(([block, transfer]) => [block,
        null,
        transfer] satisfies AccountBalanceHistoryItem))
    }
    return [result, { range: startingRange, head: head._hash }]
  }
}
