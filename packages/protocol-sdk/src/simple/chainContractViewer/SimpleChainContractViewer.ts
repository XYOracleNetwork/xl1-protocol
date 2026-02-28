import {
  type Address, assertEx,
  type Hash,
} from '@xylabs/sdk-js'
import {
  ChainContractViewer, ChainContractViewerMoniker, ChainId, FinalizationViewer, FinalizationViewerMoniker, XL1BlockNumber,
} from '@xyo-network/xl1-protocol'

import { withContextCacheResponse } from '../../ChainContextHelpers.ts'
import {
  AbstractCreatableProvider, creatableProvider, CreatableProviderParams,
} from '../../CreatableProvider/index.ts'

export interface SimpleChainContractViewerParams extends CreatableProviderParams {
  forkedAtBlockNumber?: XL1BlockNumber
  forkedAtHash?: Hash
  forkedChainContractViewer?: ChainContractViewer
  forkedChainId?: ChainId
  minWithdrawalBlocks: number
  rewardsContract: Address
  stakingTokenAddress: Address
}

/**
 * A class that represents a chain stake as backed by an EVM smart contract
 */
@creatableProvider()
export class SimpleChainContractViewer extends AbstractCreatableProvider<SimpleChainContractViewerParams> implements ChainContractViewer {
  static readonly defaultMoniker = ChainContractViewerMoniker
  static readonly dependencies = [FinalizationViewerMoniker]
  static readonly monikers = [ChainContractViewerMoniker]
  override moniker = SimpleChainContractViewer.defaultMoniker

  protected _finalizationViewer!: FinalizationViewer

  protected get finalizationViewer() {
    return this._finalizationViewer
  }

  chainId() {
    return this.finalizationViewer.chainId()
  }

  async chainIdAtBlockNumber(blockNumber: XL1BlockNumber) {
    return await withContextCacheResponse(this.context, 'chainIdAtBlockNumber', `${blockNumber}`, async () => {
      let chainId = this.chainId()
      // eslint-disable-next-line unicorn/no-this-assignment, @typescript-eslint/no-this-alias
      let contractViewer: ChainContractViewer = this
      let forkedAtBlockNumber = await contractViewer.forkedAtBlockNumber()
      while (forkedAtBlockNumber !== null && blockNumber <= forkedAtBlockNumber) {
        contractViewer = assertEx(await contractViewer.forkedChainContractViewer())
        forkedAtBlockNumber = await contractViewer.forkedAtBlockNumber()
        chainId = await contractViewer.chainId()
      }
      return chainId
    })
  }

  override async createHandler() {
    this._finalizationViewer = await this.locator.getInstance(FinalizationViewerMoniker)
    return await super.createHandler()
  }

  forkedAtBlockNumber() {
    return this.params.forkedAtBlockNumber ?? null
  }

  forkedAtHash() {
    return this.params.forkedAtHash ?? null
  }

  forkedChainContractViewer() {
    return this.params.forkedChainContractViewer ?? null
  }

  forkedChainId() {
    return this.params.forkedChainId ?? null
  }

  minWithdrawalBlocks() {
    return this.params.minWithdrawalBlocks
  }

  rewardsContract() {
    return this.params.rewardsContract
  }

  stakingTokenAddress() {
    return this.params.stakingTokenAddress
  }
}
