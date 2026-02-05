import type { Hash } from '@xylabs/sdk-js'
import type {
  MempoolRunnerMethods, SignedHydratedBlock, SignedHydratedTransaction,
} from '@xyo-network/xl1-protocol'
import { MempoolRunnerMoniker } from '@xyo-network/xl1-protocol'

import { MempoolRunnerRpcSchemas } from '../../../types/index.ts'
import { AbstractJsonRpcRunner } from '../JsonRpcRunner.ts'

export class JsonRpcMempoolRunnerMethods extends AbstractJsonRpcRunner<typeof MempoolRunnerRpcSchemas> implements MempoolRunnerMethods {
  readonly moniker = MempoolRunnerMoniker
  async submitBlocks(blocks: SignedHydratedBlock[]): Promise<Hash[]> {
    const result = await this.transport.sendRequest(
      'mempoolRunner_submitBlocks',
      [blocks],
    )
    return result
  }

  async submitTransactions(transactions: SignedHydratedTransaction[]): Promise<Hash[]> {
    const result = await this.transport.sendRequest(
      'mempoolRunner_submitTransactions',
      [transactions],
    )
    return result
  }

  protected schemas() {
    return MempoolRunnerRpcSchemas
  }
}
