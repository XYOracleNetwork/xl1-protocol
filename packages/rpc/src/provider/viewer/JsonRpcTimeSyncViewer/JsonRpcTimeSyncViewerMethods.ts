import type {
  TimeDomain,
  TimePayload, TimeSyncViewerMethods,
} from '@xyo-network/xl1-protocol'
import { TimeSyncViewerMoniker } from '@xyo-network/xl1-protocol'

import { TimeSyncViewerRpcSchemas } from '../../../types/index.ts'
import { AbstractJsonRpcViewer } from '../JsonRpcViewer.ts'

export class JsonRpcTimeSyncViewerMethods extends AbstractJsonRpcViewer<TimeSyncViewerRpcSchemas>implements TimeSyncViewerMethods {
  readonly moniker = TimeSyncViewerMoniker

  async convertTime(fromDomain: TimeDomain, toDomain: TimeDomain, from: number): Promise<number> {
    return await this.transport.sendRequest('timeSyncViewer_convertTime', [fromDomain, toDomain, from])
  }

  async currentTime(domain: TimeDomain): Promise<[string, number]> {
    return await this.transport.sendRequest('timeSyncViewer_currentTime', [domain])
  }

  async currentTimeAndHash(domain: TimeDomain): Promise<[number, string | null]> {
    return await this.transport.sendRequest('timeSyncViewer_currentTimeAndHash', [domain])
  }

  async currentTimePayload(): Promise<TimePayload> {
    return await this.transport.sendRequest('timeSyncViewer_currentTimePayload', [])
  }

  protected schemas() {
    return TimeSyncViewerRpcSchemas
  }
}
