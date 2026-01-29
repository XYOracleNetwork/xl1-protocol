import {
  creatableProvider, MempoolPruneOptions, type MempoolRunner, MempoolRunnerMoniker,
} from '@xyo-network/xl1-protocol-sdk'

import { JsonRpcMempoolRunnerMethods } from './JsonRpcMempoolRunnerMethods.ts'

@creatableProvider()
export class JsonRpcMempoolRunner extends JsonRpcMempoolRunnerMethods implements MempoolRunner {
  static readonly defaultMoniker = MempoolRunnerMoniker
  static readonly dependencies = []
  static readonly monikers = [MempoolRunnerMoniker]

  prunePendingBlocks(options?: MempoolPruneOptions): Promise<[number, number]> {
    throw new Error('Method not implemented.')
  }

  prunePendingTransactions(options?: MempoolPruneOptions): Promise<[number, number]> {
    throw new Error('Method not implemented.')
  }
}
