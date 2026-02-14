import type { Provider, ProviderMoniker } from '../provider/index.ts'
import type { DataLakeProvider, DataLakeRunner } from './DataLake.ts'

export interface DataLakesProvider<
  TMoniker extends ProviderMoniker = ProviderMoniker,
  TDataLakeProvider extends DataLakeProvider = DataLakeProvider,
> extends DataLakesViewerMethods, Provider<TMoniker> {
  dataLakes: TDataLakeProvider[]

  addDataLake(dataLake: DataLakeRunner): number
  removeDataLake(index: number): void
}

export const DataLakesViewerMoniker = 'DataLakesViewer' as const
export type DataLakesViewerMoniker = typeof DataLakesViewerMoniker

export interface DataLakesViewerMethods {}

export interface DataLakesViewer extends DataLakesProvider<DataLakesRunnerMoniker, DataLakeRunner>, DataLakesRunnerMethods {}

export const DataLakesRunnerMoniker = 'DataLakesRunner' as const
export type DataLakesRunnerMoniker = typeof DataLakesRunnerMoniker

export interface DataLakesRunnerMethods extends DataLakesViewerMethods {}

export interface DataLakesRunner extends DataLakesProvider<DataLakesRunnerMoniker, DataLakeRunner>, DataLakesRunnerMethods {}
