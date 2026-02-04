import { assertEx } from '@xylabs/sdk-js'
import { PayloadBuilder } from '@xyo-network/payload-builder'
import {
  AccountBalanceViewer,
  AccountBalanceViewerMoniker,
  asXL1BlockRange,
  BlockViewer,
  BlockViewerMoniker,
  ChainContractViewer,
  ChainContractViewerMoniker,
  ChainId,
  HydratedTransactionStateValidationFunction,
  HydratedTransactionValidationError,
  HydratedTransactionValidationFunction,
  isChainQualifiedHeadConfig,
  isHydratedTransaction,
  SignedHydratedTransaction,
  type SignedHydratedTransactionWithHashMeta,
  TransactionValidationConfig,
  TransactionValidationQualification,
  TransactionValidationViewer,
  TransactionValidationViewerMoniker,
} from '@xyo-network/xl1-protocol'

import type { CreatableProviderParams } from '../../CreatableProvider/index.ts'
import { AbstractCreatableProvider, creatableProvider } from '../../CreatableProvider/index.ts'

export interface SimpleTransactionValidationViewerParams extends CreatableProviderParams {
  maxUncleWindowSize?: number
  protocol?: HydratedTransactionValidationFunction
  state?: HydratedTransactionStateValidationFunction
}

@creatableProvider()
export class SimpleTransactionValidationViewer extends
  AbstractCreatableProvider<SimpleTransactionValidationViewerParams> implements TransactionValidationViewer {
  static readonly defaultMoniker = TransactionValidationViewerMoniker
  static readonly dependencies = [AccountBalanceViewerMoniker, ChainContractViewerMoniker, BlockViewerMoniker]
  static readonly monikers = [TransactionValidationViewerMoniker]
  moniker = SimpleTransactionValidationViewer.defaultMoniker

  private _accountBalanceViewer!: AccountBalanceViewer
  private _blockViewer!: BlockViewer
  private _chainContractViewer!: ChainContractViewer

  protected get blockViewer() {
    return this._blockViewer
  }

  protected get chainContractViewer() {
    return this._chainContractViewer
  }

  protected get maxUncleWindowSize() {
    return this.params.maxUncleWindowSize!
  }

  static override async paramsHandler(params: Partial<SimpleTransactionValidationViewerParams>): Promise<SimpleTransactionValidationViewerParams> {
    return {
      ...await super.paramsHandler(params),
      protocol: params.protocol,
      state: params.state,
      maxUncleWindowSize: params.maxUncleWindowSize ?? 100,
    } satisfies SimpleTransactionValidationViewerParams
  }

  override async createHandler() {
    await super.createHandler()
    this._accountBalanceViewer = await this.locator.getInstance<AccountBalanceViewer>(AccountBalanceViewerMoniker)
    this._chainContractViewer = await this.locator.getInstance<ChainContractViewer>(ChainContractViewerMoniker)
    this._blockViewer = await this.locator.getInstance<BlockViewer>(BlockViewerMoniker)
  }

  async qualifiedValidateTransaction(
    block: SignedHydratedTransactionWithHashMeta,
    config?: TransactionValidationConfig,
  ): Promise<[HydratedTransactionValidationError[] | SignedHydratedTransactionWithHashMeta, TransactionValidationQualification]> {
    const result = (await this.qualifiedValidateTransactions([block], config))
    return [result[0][0], result[1]]
  }

  async qualifiedValidateTransactions(
    transactions: SignedHydratedTransaction[],
    config?: TransactionValidationConfig,
  ): Promise<[(HydratedTransactionValidationError[] | SignedHydratedTransactionWithHashMeta)[], TransactionValidationQualification]> {
    const { value, state } = config ?? {
      shape: true, links: true, state: true, head: undefined,
    }

    const transactionsWithMeta = await Promise.all(transactions.map(b => Promise.all([PayloadBuilder.addHashMeta(b[0]), PayloadBuilder.addHashMeta(b[1])])))

    const head = isChainQualifiedHeadConfig(config)
      ? assertEx(
          (await this.blockViewer.blockByHash(config.head))?.[0],
          () => `Specified a head that is not in the chain [${config.head}]`,
        )
      : undefined

    const headBlock = head ?? (await this.blockViewer.currentBlock())[0]

    const validateProtocol = value ? this.doValidateProtocol.bind(this) : undefined
    const validateState = state ? this.doValidateState.bind(this) : undefined

    const chainId = headBlock.chain

    const qualification = { head: headBlock._hash, range: asXL1BlockRange([0, headBlock.block], true) }
    const [protocolResults, stateResults] = await Promise.all([
      validateProtocol?.(transactionsWithMeta, chainId), validateState?.(transactionsWithMeta, chainId),
    ])
    const blockResults = transactionsWithMeta.map((r, i) => {
      const errors = []
      if (protocolResults && !isHydratedTransaction(protocolResults[i])) {
        errors.push(...(protocolResults[i]))
      }
      if (stateResults && !isHydratedTransaction(stateResults[i])) {
        errors.push(...(stateResults[i]))
      }
      return errors.length === 0 ? r : errors
    })
    return [blockResults, qualification]
  }

  qualifiedValidateUncle(
    _transactions: SignedHydratedTransaction[],
    _config?: TransactionValidationConfig,
  ): Promise<[(HydratedTransactionValidationError[] | SignedHydratedTransactionWithHashMeta)[], TransactionValidationQualification]> {
    throw new Error('Method not implemented.')
  }

  async validateTransaction(
    block: SignedHydratedTransaction,
    config?: TransactionValidationConfig,
  ): Promise<HydratedTransactionValidationError[] | SignedHydratedTransactionWithHashMeta> {
    return (await this.validateTransactions([block], config))[0]
  }

  async validateTransactions(
    transactions: SignedHydratedTransaction[],
    config?: TransactionValidationConfig,
  ): Promise<(HydratedTransactionValidationError[] | SignedHydratedTransactionWithHashMeta)[]> {
    return (await this.qualifiedValidateTransactions(transactions, config))[0]
  }

  private async doValidateProtocol(
    transactions: SignedHydratedTransactionWithHashMeta[],
    chainId: ChainId,
  ): Promise<(SignedHydratedTransactionWithHashMeta | HydratedTransactionValidationError[])[]> {
    return (await Promise.all(transactions.map(async (tx) => {
      const errors = await this.params.protocol!(
        { ...this.context, chainId },
        tx,
      )
      return (errors.length === 0) ? tx : errors
    })))
  }

  private async doValidateState(
    transactions: SignedHydratedTransactionWithHashMeta[],
    chainId: ChainId,
  ): Promise<(SignedHydratedTransactionWithHashMeta | HydratedTransactionValidationError[])[]> {
    return (await Promise.all(transactions.map(async (tx) => {
      const errors = await this.params.state!(
        {
          ...this.context, chainId, accountBalanceViewer: this._accountBalanceViewer, blockViewer: this.blockViewer,
        },
        tx,
      )
      return (errors.length === 0) ? tx : errors
    })))
  }
}
