import { XyoViewer, XyoViewerMoniker } from '@xyo-network/xl1-protocol'
import {
  DataLakeRunnerMoniker, type DataLakeViewer, DataLakeViewerMoniker,
  type XyoConnection, XyoConnectionMoniker, type XyoNetwork, XyoRunnerMoniker,
} from '@xyo-network/xl1-protocol'
import {
  AbstractCreatableProvider, creatableProvider,
  CreatableProviderParams,
} from '@xyo-network/xl1-protocol-sdk'

export interface SimpleXyoConnectionViewerParams extends CreatableProviderParams {

}

@creatableProvider()
export class SimpleXyoConnectionViewer<TParams extends SimpleXyoConnectionViewerParams = SimpleXyoConnectionViewerParams> extends
  AbstractCreatableProvider<TParams> implements XyoConnection {
  static readonly defaultMoniker = XyoConnectionMoniker
  static readonly dependencies = [XyoRunnerMoniker, XyoViewerMoniker, DataLakeRunnerMoniker, DataLakeViewerMoniker]
  static readonly monikers = [XyoConnectionMoniker]
  moniker = SimpleXyoConnectionViewer.defaultMoniker

  protected _network?: XyoNetwork
  protected _storage?: DataLakeViewer
  protected _viewer?: XyoViewer

  get network(): XyoNetwork | undefined {
    return this._network
  }

  get storage(): DataLakeViewer | undefined {
    return this._storage
  }

  get viewer(): XyoViewer | undefined {
    return this._viewer
  }

  override async createHandler() {
    await super.createHandler()
    this._viewer = await this.locator.getInstance<XyoViewer>(XyoViewerMoniker)
    const dataLakeViewer = await this.locator.tryGetInstance<DataLakeViewer>(DataLakeViewerMoniker)
    this._storage = dataLakeViewer
  }
}
