import { assertEx, exists } from '@xylabs/sdk-js'
import {
  asXL1BlockRange,
  ChainId,
  type SignedHydratedBlockWithHashMeta,
} from '@xyo-network/xl1-protocol'

import type { CreatableProviderParams } from '../../CreatableProvider/index.ts'
import { AbstractCreatableProvider, creatableProvider } from '../../CreatableProvider/index.ts'
import { isChainQualifiedHeadConfig } from '../../model/index.ts'
import { findUncles, getWindowedChain } from '../../primitives/index.ts'
import type {
  HydratedBlockStateValidationFunction, HydratedBlockValidationError, HydratedBlockValidationFunction,
} from '../../validation/index.ts'
import type {
  AccountBalanceViewer,
  BlockValidationConfig,
  BlockValidationQualification,
  BlockValidationViewer,
} from '../../viewers/index.ts'
import {
  AccountBalanceViewerMoniker,
  BlockValidationViewerMoniker, BlockViewer, BlockViewerMoniker,
} from '../../viewers/index.ts'

export interface SimpleBlockValidationViewerParams extends CreatableProviderParams {
  maxUncleWindowSize: number
  protocol?: HydratedBlockValidationFunction
  state?: HydratedBlockStateValidationFunction
}

@creatableProvider()
export class SimpleBlockValidationViewer extends AbstractCreatableProvider<SimpleBlockValidationViewerParams> implements BlockValidationViewer {
  static readonly defaultMoniker = BlockValidationViewerMoniker
  static readonly dependencies = [AccountBalanceViewerMoniker, BlockViewerMoniker]
  static readonly monikers = [BlockValidationViewerMoniker]
  moniker = SimpleBlockValidationViewer.defaultMoniker

  private _accountBalanceViewer!: AccountBalanceViewer
  private _blockViewer!: BlockViewer
  private _uncleWindowedChainCache: SignedHydratedBlockWithHashMeta[] | null = null

  protected get blockViewer() {
    return this._blockViewer
  }

  protected get maxUncleWindowSize() {
    return this.params.maxUncleWindowSize
  }

  static override async paramsHandler(params: Partial<SimpleBlockValidationViewerParams>): Promise<SimpleBlockValidationViewerParams> {
    return {
      ...await super.paramsHandler(params),
      maxUncleWindowSize: params.maxUncleWindowSize ?? 100,
    } satisfies SimpleBlockValidationViewerParams
  }

  override async createHandler() {
    await super.createHandler()
    this._accountBalanceViewer = await this.locator.getInstance<AccountBalanceViewer>(AccountBalanceViewerMoniker)
    this._blockViewer = await this.locator.getInstance<BlockViewer>(BlockViewerMoniker)
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
    const chainId = headBlock.chain

    const validateProtocol = value ? this.doValidateProtocol.bind(this) : undefined
    const validateState = state ? this.doValidateState.bind(this) : undefined

    return [(await Promise.all([
      validateProtocol?.(blocks, chainId), validateState?.(blocks, chainId),
    ].filter(exists))).flat(), { head: headBlock._hash, range: asXL1BlockRange([0, headBlock.block], true) }]
  }

  async validateBlock(block: SignedHydratedBlockWithHashMeta, config?: BlockValidationConfig): Promise<HydratedBlockValidationError[]> {
    return (await this.validateBlocks([block], config))
  }

  async validateBlocks(blocks: SignedHydratedBlockWithHashMeta[], config?: BlockValidationConfig): Promise<HydratedBlockValidationError[]> {
    return (await this.qualifiedValidateBlocks(blocks, config))[0]
  }

  private async doValidateProtocol(blocks: SignedHydratedBlockWithHashMeta[], chainId: ChainId): Promise<HydratedBlockValidationError[]> {
    return (await Promise.all(blocks.map(async (block) => {
      return await this.params.protocol!(
        block,
        chainId,
      )
    }))).flat()
  }

  private async doValidateState(blocks: SignedHydratedBlockWithHashMeta[], chainId: ChainId): Promise<HydratedBlockValidationError[]> {
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
        chainId,
        { accountBalance: this._accountBalanceViewer },
      )
    }))).flat()
  }

  private async updateWindowedChainCache() {
    this._uncleWindowedChainCache = await getWindowedChain(this.blockViewer, this.maxUncleWindowSize, this._uncleWindowedChainCache ?? [])
    return [...this._uncleWindowedChainCache]
  }
}
