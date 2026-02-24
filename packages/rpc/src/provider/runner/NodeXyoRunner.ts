import type { Hash } from '@xylabs/sdk-js'
import { assertEx } from '@xylabs/sdk-js'
import type {
  ArchivistInstance, ModuleIdentifier, NodeInstance,
} from '@xyo-network/sdk-js'
import { asArchivistInstance } from '@xyo-network/sdk-js'
import {
  MempoolRunner,
  type SignedHydratedTransaction, XyoRunner, XyoRunnerMoniker,
} from '@xyo-network/xl1-protocol'
import type { CreatableProviderParams, SimpleMempoolViewerParams } from '@xyo-network/xl1-protocol-sdk'
import {
  AbstractCreatableProvider, creatableProvider, SimpleMempoolRunner,
} from '@xyo-network/xl1-protocol-sdk'

export interface NodeXyoRunnerParams extends CreatableProviderParams {
  node: NodeInstance
  pendingBlocksArchivistPath?: ModuleIdentifier
  pendingTransactionsArchivistPath?: ModuleIdentifier
}

@creatableProvider()
export class NodeXyoRunner extends AbstractCreatableProvider<NodeXyoRunnerParams> implements XyoRunner {
  static readonly defaultMoniker = XyoRunnerMoniker
  static readonly dependencies = []
  static readonly monikers = [XyoRunnerMoniker]
  moniker = NodeXyoRunner.defaultMoniker

  private _mempoolRunner?: MempoolRunner
  private _pendingBlocksArchivist?: ArchivistInstance
  private _pendingTransactionsArchivist?: ArchivistInstance

  get mempool() {
    return this._mempoolRunner!
  }

  protected get node() {
    return this.params.node
  }

  protected get pendingBlocksArchivist() {
    return this._pendingBlocksArchivist!
  }

  protected get pendingBlocksArchivistPath() {
    return this.params.pendingBlocksArchivistPath ?? 'XYOChain:Pending:Blocks'
  }

  protected get pendingTransactionsArchivist() {
    return this._pendingTransactionsArchivist!
  }

  protected get pendingTransactionsArchivistPath() {
    return this.params.pendingTransactionsArchivistPath ?? 'XYOChain:Pending:Transactions'
  }

  async broadcastTransaction(transaction: SignedHydratedTransaction): Promise<Hash> {
    const [txHash] = await this.mempool.submitTransactions([transaction])
    return txHash
  }

  protected getArchivist = async (identifier: ModuleIdentifier) => {
    const archivist = await this.node.resolve(identifier)
    return assertEx(asArchivistInstance(archivist), () => `Could not resolve ${identifier} to an archivist instance`)
  }

  protected override async startHandler(): Promise<void> {
    await super.startHandler()
    this._pendingTransactionsArchivist = assertEx(
      await this.getArchivist(this.pendingTransactionsArchivistPath),
      () => `Could not resolve pending archivist at ${this.pendingTransactionsArchivistPath}`,
    )
    this._pendingBlocksArchivist = assertEx(
      await this.getArchivist(this.pendingBlocksArchivistPath),
      () => `Could not resolve pending archivist at ${this.pendingBlocksArchivistPath}`,
    )
    this._mempoolRunner = assertEx(await SimpleMempoolRunner.create({
      context: this.context,
      pendingTransactionsArchivist: this.pendingTransactionsArchivist,
      pendingBlocksArchivist: this.pendingBlocksArchivist,
    } satisfies SimpleMempoolViewerParams), () => 'Failed to create SimpleMempoolRunner')
  }
}
