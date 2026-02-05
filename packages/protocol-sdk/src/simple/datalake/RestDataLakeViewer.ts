import {
  DataLakeViewer,
  DataLakeViewerMoniker,
} from '@xyo-network/xl1-protocol'

import { creatableProvider } from '../../CreatableProvider/index.ts'
import { AbstractRestDataLake, AbstractRestDataLakeParams } from './AbstractRestDataLake.ts'

export interface RestDataLakeViewerParams extends
  AbstractRestDataLakeParams {
}

@creatableProvider()
export class RestDataLakeViewer<TParams extends RestDataLakeViewerParams = RestDataLakeViewerParams>
  extends AbstractRestDataLake<TParams> implements DataLakeViewer {
  static readonly defaultMoniker = DataLakeViewerMoniker
  static readonly dependencies = []
  static readonly monikers = [DataLakeViewerMoniker]
  moniker = RestDataLakeViewer.defaultMoniker
}
