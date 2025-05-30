import type { ListProvider } from './ListProvider.ts'
import type { ChainViewer } from './viewer/index.ts'

export interface ChainsProvider extends ListProvider<ChainViewer> {}
