import type { ListProvider } from './ListProvider.ts'
import type { WalletProvider } from './WalletProvider.ts'

export interface WalletsProvider extends ListProvider<WalletProvider> {}
