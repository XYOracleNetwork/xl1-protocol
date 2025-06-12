import type { ListProvider } from '../ListProvider.ts'
import type { DataLakeProvider } from './DataLakeProvider.ts'
import type { DataLakeViewer } from './DataLakeViewer.ts'

export interface DataLakesViewer<TDataLakeViewer extends DataLakeViewer = DataLakeViewer> extends ListProvider<TDataLakeViewer> {}

export interface DataLakesProvider<TDataLakeProvider extends DataLakeProvider = DataLakeProvider> extends ListProvider<TDataLakeProvider> {}
