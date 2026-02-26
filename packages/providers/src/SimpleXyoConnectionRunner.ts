import { XyoViewer, XyoViewerMoniker } from '@xyo-network/xl1-protocol'
import {
  type DataLakeRunner, DataLakeRunnerMoniker, type DataLakeViewer, DataLakeViewerMoniker,
  type XyoConnection, XyoConnectionMoniker, type XyoNetwork, type XyoRunner, XyoRunnerMoniker,
} from '@xyo-network/xl1-protocol'
import {
  AbstractCreatableProvider, creatableProvider,
  CreatableProviderParams,
} from '@xyo-network/xl1-protocol-sdk'

export interface SimpleXyoConnectionRunnerParams extends CreatableProviderParams {

}

@creatableProvider()
export class SimpleXyoConnectionRunner<TParams extends SimpleXyoConnectionRunnerParams = SimpleXyoConnectionRunnerParams> extends
  AbstractCreatableProvider<TParams> implements XyoConnection {
  static readonly defaultMoniker = XyoConnectionMoniker
  static readonly dependencies = [XyoRunnerMoniker, XyoViewerMoniker]
  static readonly monikers = [XyoConnectionMoniker]
  moniker = SimpleXyoConnectionRunner.defaultMoniker

  protected _network?: XyoNetwork
  protected _runner?: XyoRunner
  protected _storage?: DataLakeRunner | DataLakeViewer
  protected _viewer?: XyoViewer

  get network(): XyoNetwork | undefined {
    return this._network
  }

  get runner(): XyoRunner | undefined {
    return this._runner
  }

  get storage(): DataLakeRunner | DataLakeViewer | undefined {
    return this._storage
  }

  get viewer(): XyoViewer | undefined {
    return this._viewer
  }

  override async createHandler() {
    await super.createHandler()
    this._runner = await this.locator.getInstance<XyoRunner>(XyoRunnerMoniker)
    this._viewer = await this.locator.getInstance<XyoViewer>(XyoViewerMoniker)
    const dataLakeRunner = await this.locator.tryGetInstance<DataLakeRunner>(DataLakeRunnerMoniker)
    const dataLakeViewer = await this.locator.tryGetInstance<DataLakeViewer>(DataLakeViewerMoniker)
    this._storage = dataLakeRunner ?? dataLakeViewer
  }
}
