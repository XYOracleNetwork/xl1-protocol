import type { Address } from '@xylabs/sdk-js'
import {
  AccountBalanceHistoryItem,
  AccountBalanceViewer, AccountBalanceViewerMoniker, type AttoXL1,
  ChainQualifiedConfig,
} from '@xyo-network/xl1-protocol'
import { creatableProvider } from '@xyo-network/xl1-protocol-sdk'

import { JsonRpcAccountBalanceViewerMethods } from './JsonRpcAccountBalanceViewerMethods.ts'

@creatableProvider()
export class JsonRpcAccountBalanceViewer extends JsonRpcAccountBalanceViewerMethods implements AccountBalanceViewer {
  static readonly defaultMoniker = AccountBalanceViewerMoniker
  static readonly dependencies = []
  static readonly monikers = [AccountBalanceViewerMoniker]

  async accountBalance(address: Address, config: ChainQualifiedConfig = {}): Promise<AttoXL1> {
    const result = await this.accountBalances([address], config)
    return result[address]
  }

  async accountBalanceHistories(address: Address[], config: ChainQualifiedConfig = {}): Promise<Record<Address, AccountBalanceHistoryItem[]>> {
    const [result] = await this.qualifiedAccountBalanceHistories(address, config)
    return result
  }

  async accountBalanceHistory(address: Address, config: ChainQualifiedConfig = {}): Promise<AccountBalanceHistoryItem[]> {
    const result = await this.accountBalanceHistories([address], config)
    return result[address]
  }

  async accountBalances(address: Address[], config: ChainQualifiedConfig = {}): Promise<Record<Address, AttoXL1>> {
    const [result] = await this.qualifiedAccountBalances(address, config)
    return result
  }
}
