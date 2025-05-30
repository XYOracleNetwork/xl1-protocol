import type { ListProvider } from '../ListProvider.ts'
import type { DataLakeProvider } from './DataLakeProvider.ts'

export interface DataLakesProvider extends ListProvider<DataLakeProvider<unknown>> {}
