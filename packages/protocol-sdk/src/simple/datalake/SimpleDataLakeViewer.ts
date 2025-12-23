import type { Hash } from '@xylabs/sdk-js'

import { creatableProvider } from '../../CreatableProvider/index.ts'
import type { MapTypeRead } from '../../map/index.ts'
import {
  type DataLakeData,
  type DataLakeViewer,
  DataLakeViewerMoniker,
} from '../../provider/index.ts'
import { AbstractSimpleDataLake, AbstractSimpleDataLakeParams } from './AbstractSimpleDataLake.ts'

export interface DataLakeViewerParams<TMap extends MapTypeRead<Hash, DataLakeData> = MapTypeRead<Hash, DataLakeData>> extends
  AbstractSimpleDataLakeParams<TMap> {
}

@creatableProvider()
export class SimpleDataLakeViewer<TParams extends DataLakeViewerParams = DataLakeViewerParams>
  extends AbstractSimpleDataLake<TParams> implements DataLakeViewer {
  static readonly defaultMoniker = DataLakeViewerMoniker
  static readonly dependencies = []
  static readonly monikers = [DataLakeViewerMoniker]
  moniker = SimpleDataLakeViewer.defaultMoniker
}
