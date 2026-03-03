import {
  assertEx, exists, Hash,
} from '@xylabs/sdk-js'
import { BoundWitnessSchema } from '@xyo-network/sdk-js'
import {
  asSignedHydratedTransactionWithHashMeta,
  asSignedTransactionBoundWitness,
  BlockViewer,
  BlockViewerMoniker,
  isTransactionBoundWitnessWithStorageMeta,
  SignedHydratedTransactionWithHashMeta, TransactionViewer, TransactionViewerMoniker,
  XL1BlockNumber,
} from '@xyo-network/xl1-protocol'

import {
  AbstractCreatableProvider, creatableProvider, CreatableProviderParams,
} from '../../CreatableProvider/index.ts'

export interface SimpleTransactionViewerParams extends CreatableProviderParams {

}

@creatableProvider()
export class SimpleTransactionViewer extends AbstractCreatableProvider<SimpleTransactionViewerParams> implements TransactionViewer {
  static readonly defaultMoniker = TransactionViewerMoniker
  static readonly dependencies = [BlockViewerMoniker]
  static readonly monikers = [TransactionViewerMoniker]
  moniker = SimpleTransactionViewer.defaultMoniker

  private _blockViewer!: BlockViewer

  protected get blockViewer() {
    return this._blockViewer
  }

  async byBlockHashAndIndex(blockHash: Hash, transactionIndex: number): Promise<SignedHydratedTransactionWithHashMeta | null> {
    return await this.spanAsync('byBlockHashAndIndex', async () => {
      assertEx(transactionIndex >= 0, () => 'transactionIndex must be greater than or equal to 0')
      try {
        const block = await this.blockViewer.blockByHash(blockHash)
        if (!block) return null
        const blockBoundWitnessIndexes = block[0].payload_schemas.map((schema, index) => schema === BoundWitnessSchema ? index : undefined).filter(exists)
        const blockBoundWitnessHashes = new Set(blockBoundWitnessIndexes.map(index => block[0].payload_hashes[index]))
        const blockBoundWitnesses = block[1].filter(payload => blockBoundWitnessHashes.has(payload._hash) || blockBoundWitnessHashes.has(payload._dataHash))
        const blockTransactionBoundWitnesses = blockBoundWitnesses.filter(isTransactionBoundWitnessWithStorageMeta)
        const transaction = blockTransactionBoundWitnesses.at(transactionIndex)
        if (!transaction) return null
        return await this.byHash(transaction._hash)
      } catch {
        return null
      }
    }, this.context)
  }

  async byBlockNumberAndIndex(blockNumber: XL1BlockNumber, transactionIndex: number): Promise<SignedHydratedTransactionWithHashMeta | null> {
    return await this.spanAsync('byBlockNumberAndIndex', async () => {
      try {
        const block = await this.blockViewer.blockByNumber(blockNumber)
        if (!block) return null
        return await this.byBlockHashAndIndex(block[0]._hash, transactionIndex)
      } catch {
        return null
      }
    }, this.context)
  }

  async byHash(transactionHash: Hash): Promise<SignedHydratedTransactionWithHashMeta | null> {
    return await this.spanAsync('byHash', async () => {
      try {
        const transaction = asSignedTransactionBoundWitness(await this.blockViewer.payloadByHash(transactionHash))
        if (transaction) {
          const payloads = await this.blockViewer.payloadsByHash(transaction.payload_hashes)
          return asSignedHydratedTransactionWithHashMeta([transaction, payloads]) ?? null
        }
        return null
      } catch {
        return null
      }
    }, this.context)
  }

  override async createHandler(): Promise<void> {
    await super.createHandler()
    this._blockViewer = await this.locator.getInstance<BlockViewer>(BlockViewerMoniker)
  }

  async transactionByBlockHashAndIndex(blockHash: Hash, transactionIndex: number = 0): Promise<SignedHydratedTransactionWithHashMeta | null> {
    return await this.byBlockHashAndIndex(blockHash, transactionIndex)
  }

  async transactionByBlockNumberAndIndex(blockNumber: XL1BlockNumber, transactionIndex: number = 0): Promise<SignedHydratedTransactionWithHashMeta | null> {
    return await this.byBlockNumberAndIndex(blockNumber, transactionIndex)
  }

  async transactionByHash(transactionHash: Hash): Promise<SignedHydratedTransactionWithHashMeta | null> {
    return await this.byHash(transactionHash)
  }
}
