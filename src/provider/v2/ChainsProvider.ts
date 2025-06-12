import type { ChainProvider, ChainViewer } from './Chain/index.ts'
import type { ListProvider } from './ListProvider.ts'

export interface ChainsViewer extends ListProvider<ChainViewer> {}

export interface ChainsProvider extends ListProvider<ChainProvider> {}
