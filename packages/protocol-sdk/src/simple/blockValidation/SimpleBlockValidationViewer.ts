import {
  assertEx, exists, Promisable,
} from '@xylabs/sdk-js'
import {
  asXL1BlockRange,
  ChainId,
  type SignedHydratedBlockWithHashMeta,
  XL1BlockNumber,
} from '@xyo-network/xl1-protocol'

import type { CreatableProviderParams } from '../../CreatableProvider/index.ts'
import { AbstractCreatableProvider, creatableProvider } from '../../CreatableProvider/index.ts'
import type {
  AccountBalanceViewer,
  BlockValidationConfig,
  BlockValidationQualification,
  BlockValidationViewer,
  ChainContractViewer,
} from '../../model/index.ts'
import {
  AccountBalanceViewerMoniker,
  BlockValidationViewerMoniker, BlockViewer, BlockViewerMoniker,
  ChainContractViewerMoniker, isChainQualifiedHeadConfig,
} from '../../model/index.ts'
import { findUncles, getWindowedChain } from '../../primitives/index.ts'
import type {
  HydratedBlockStateValidationFunction, HydratedBlockValidationError, HydratedBlockValidationFunction,
} from '../../validation/index.ts'

export interface SimpleBlockValidationViewerParams extends CreatableProviderParams {
  maxUncleWindowSize: number
  protocol?: HydratedBlockValidationFunction
  state?: HydratedBlockStateValidationFunction
}

@creatableProvider()
export class SimpleBlockValidationViewer extends AbstractCreatableProvider<SimpleBlockValidationViewerParams> implements BlockValidationViewer {
  static readonly defaultMoniker = BlockValidationViewerMoniker
  static readonly dependencies = [AccountBalanceViewerMoniker, BlockViewerMoniker, ChainContractViewerMoniker]
  static readonly monikers = [BlockValidationViewerMoniker]
  moniker = SimpleBlockValidationViewer.defaultMoniker

  private _accountBalanceViewer!: AccountBalanceViewer
  private _blockViewer!: BlockViewer
  private _chainContractViewer!: ChainContractViewer
  private _uncleWindowedChainCache: SignedHydratedBlockWithHashMeta[] | null = null

  protected get blockViewer() {
    return this._blockViewer
  }

  protected get chainContractViewer() {
    return this._chainContractViewer
  }

  protected get maxUncleWindowSize() {
    return this.params.maxUncleWindowSize
  }

  static override async paramsHandler(params: Partial<SimpleBlockValidationViewerParams>): Promise<SimpleBlockValidationViewerParams> {
    return {
      ...await super.paramsHandler(params),
      protocol: params.protocol,
      state: params.state,
      maxUncleWindowSize: params.maxUncleWindowSize ?? 100,
    } satisfies SimpleBlockValidationViewerParams
  }

  override async createHandler() {
    await super.createHandler()
    this._accountBalanceViewer = await this.locator.getInstance<AccountBalanceViewer>(AccountBalanceViewerMoniker)
    this._blockViewer = await this.locator.getInstance<BlockViewer>(BlockViewerMoniker)
    this._chainContractViewer = await this.locator.getInstance<ChainContractViewer>(ChainContractViewerMoniker)
  }

  async qualifiedValidateBlock(
    block: SignedHydratedBlockWithHashMeta,
    config?: BlockValidationConfig,
  ): Promise<[HydratedBlockValidationError[], BlockValidationQualification]> {
    return (await this.qualifiedValidateBlocks([block], config))
  }

  async qualifiedValidateBlocks(
    blocks: SignedHydratedBlockWithHashMeta[],
    config?: BlockValidationConfig,
  ): Promise<[HydratedBlockValidationError[], BlockValidationQualification]> {
    const { value, state } = config ?? {
      shape: true, links: true, state: true, head: undefined,
    }

    const head = isChainQualifiedHeadConfig(config)
      ? assertEx(
          (await this.blockViewer.blockByHash(config.head))?.[0],
          () => `Specified a head that is not in the chain [${config.head}]`,
        )
      : undefined

    const headBlock = head ?? (await this.blockViewer.currentBlock())[0]

    const validateProtocol = value ? this.doValidateProtocol.bind(this) : undefined
    const validateState = state ? this.doValidateState.bind(this) : undefined

    const chainIdAtBlockNumber = (blockNumber: XL1BlockNumber) => this.chainContractViewer.chainIdAtBlockNumber(blockNumber)

    return [(await Promise.all([
      validateProtocol?.(blocks, chainIdAtBlockNumber), validateState?.(blocks, chainIdAtBlockNumber),
    ].filter(exists))).flat(), { head: headBlock._hash, range: asXL1BlockRange([0, headBlock.block], true) }]
  }

  async validateBlock(block: SignedHydratedBlockWithHashMeta, config?: BlockValidationConfig): Promise<HydratedBlockValidationError[]> {
    return (await this.validateBlocks([block], config))
  }

  async validateBlocks(blocks: SignedHydratedBlockWithHashMeta[], config?: BlockValidationConfig): Promise<HydratedBlockValidationError[]> {
    return (await this.qualifiedValidateBlocks(blocks, config))[0]
  }

  private async doValidateProtocol(
    blocks: SignedHydratedBlockWithHashMeta[],
    chainIdAtBlockNumber: (blockNumber: XL1BlockNumber) => Promisable<ChainId>,
  ): Promise<HydratedBlockValidationError[]> {
    return (await Promise.all(blocks.map(async (block) => {
      return await this.params.protocol!(
        block,
        chainIdAtBlockNumber,
      )
    }))).flat()
  }

  private async doValidateState(
    blocks: SignedHydratedBlockWithHashMeta[],
    chainIdAtBlockNumber: (blockNumber: XL1BlockNumber) => Promisable<ChainId>,
  ): Promise<HydratedBlockValidationError[]> {
    const windowedUncleChain = await this.updateWindowedChainCache()

    const uncles = findUncles(this.context, windowedUncleChain, blocks)

    if (uncles.length !== 1) {
      this.logger?.warn(JSON.stringify({ uncles, blocks }, null, 2))
      this.logger?.warn(JSON.stringify(windowedUncleChain, null, 2))
      throw new Error(`No uncles or greater than one uncle found in block validation, which is not supported [${uncles.length}, ${blocks.length}]`)
    }
    return (await Promise.all(uncles[0].map(async (block) => {
      return await this.params.state!(
        block,
        chainIdAtBlockNumber,
        { accountBalance: this._accountBalanceViewer },
      )
    }))).flat()
  }

  private async updateWindowedChainCache() {
    this._uncleWindowedChainCache = await getWindowedChain(this.context, this.blockViewer, this.maxUncleWindowSize, this._uncleWindowedChainCache ?? [])
    return [...this._uncleWindowedChainCache]
  }
}
