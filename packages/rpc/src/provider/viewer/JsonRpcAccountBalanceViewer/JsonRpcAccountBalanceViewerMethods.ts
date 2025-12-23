import type { Address } from '@xylabs/sdk-js'
import { type AttoXL1 } from '@xyo-network/xl1-protocol'
import {
  type AccountBalanceHistoryItem, type AccountBalanceViewerMethods, AccountBalanceViewerMoniker,
  type ChainQualified, type ChainQualifiedConfig,
} from '@xyo-network/xl1-protocol-sdk'

import { AccountBalanceViewerRpcSchemas } from '../../../types/index.ts'
import { AbstractJsonRpcViewer } from '../JsonRpcViewer.ts'

export class JsonRpcAccountBalanceViewerMethods extends AbstractJsonRpcViewer<AccountBalanceViewerRpcSchemas> implements AccountBalanceViewerMethods {
  moniker = AccountBalanceViewerMoniker
  async qualifiedAccountBalanceHistories(
    addresses: Address[],
    config: ChainQualifiedConfig,
  ): Promise<ChainQualified<Record<Address, AccountBalanceHistoryItem[]>>> {
    return (await this.transport.sendRequest(
      'accountBalanceViewer_qualifiedAccountBalanceHistories',
      [addresses, config],
    )) as ChainQualified<Record<Address, AccountBalanceHistoryItem[]>>
  }

  async qualifiedAccountBalances(
    addresses: Address[],
    config: ChainQualifiedConfig,
  ) {
    return await this.transport.sendRequest(
      'accountBalanceViewer_qualifiedAccountBalances',
      [addresses, config],
    ) as ChainQualified<Record<Address, AttoXL1>>
  }

  protected schemas() {
    return AccountBalanceViewerRpcSchemas
  }
}
