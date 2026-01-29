import { HydratedBlock, HydratedTransaction } from '@xyo-network/xl1-protocol'
import {
  creatableProvider, type MempoolRunner, MempoolRunnerMoniker,
} from '@xyo-network/xl1-protocol-sdk'

import { JsonRpcMempoolRunnerMethods } from './JsonRpcMempoolRunnerMethods.ts'

@creatableProvider()
export class JsonRpcMempoolRunner extends JsonRpcMempoolRunnerMethods implements MempoolRunner {
  static readonly defaultMoniker = MempoolRunnerMoniker
  static readonly dependencies = []
  static readonly monikers = [MempoolRunnerMoniker]

  prunePendingBlocks(): Promise<HydratedBlock[]> {
    throw new Error('Method not implemented.')
  }

  prunePendingTransactions(): Promise<HydratedTransaction[]> {
    throw new Error('Method not implemented.')
  }
}
