import type { Promisable } from '@xylabs/promise'

import type { ChainsProvider, ChainsViewer } from './ChainsProvider.ts'
import type { DataLakesProvider } from './lake/index.ts'
import type { WalletProvider } from './WalletProvider.ts'

export interface XyoViewer {
  chains?: ChainsViewer
  dataLakes?: DataLakesProvider
  wallet(): Promisable<WalletProvider>
}

export interface XyoProvider {
  chains?: ChainsProvider
  dataLakes?: DataLakesProvider
  wallet(): Promisable<WalletProvider>
}
