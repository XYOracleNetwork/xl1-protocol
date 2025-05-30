import type { Promisable } from '@xylabs/promise'

import type { ChainsProvider } from './ChainsProvider.ts'
import type { DataLakesProvider } from './lake/index.ts'
import type { WalletProvider } from './WalletProvider.ts'

export interface XyoProvider {
  chains?: ChainsProvider
  dataLakes?: DataLakesProvider
  wallet(): Promisable<WalletProvider>
}
