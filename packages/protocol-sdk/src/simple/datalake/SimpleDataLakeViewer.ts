import type { Hash } from '@xylabs/sdk-js'
import {
  DataLakeData,
  DataLakeViewer,
  DataLakeViewerMoniker, MapTypeRead,
} from '@xyo-network/xl1-protocol'

import { creatableProvider } from '../../CreatableProvider/index.ts'
import { AbstractSimpleDataLake, AbstractSimpleDataLakeParams } from './AbstractSimpleDataLake.ts'

export interface SimpleDataLakeViewerParams<TMap extends MapTypeRead<Hash, DataLakeData> = MapTypeRead<Hash, DataLakeData>> extends
  AbstractSimpleDataLakeParams<TMap> {
}

@creatableProvider()
export class SimpleDataLakeViewer<TParams extends SimpleDataLakeViewerParams = SimpleDataLakeViewerParams>
  extends AbstractSimpleDataLake<TParams> implements DataLakeViewer {
  static readonly defaultMoniker = DataLakeViewerMoniker
  static readonly dependencies = []
  static readonly monikers = [DataLakeViewerMoniker]
  moniker = SimpleDataLakeViewer.defaultMoniker
}
