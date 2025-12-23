import {
  creatableProvider, type StakeTotalsViewer, StakeTotalsViewerMoniker,
} from '@xyo-network/xl1-protocol-sdk'

import { JsonRpcStakeTotalsViewerMethods } from './JsonRpcStakeTotalsViewerMethods.ts'

@creatableProvider()
export class JsonRpcStakeTotalsViewer extends JsonRpcStakeTotalsViewerMethods implements StakeTotalsViewer {
  static readonly defaultMoniker = StakeTotalsViewerMoniker
  static readonly dependencies = []
  static readonly monikers = [StakeTotalsViewerMoniker]
}
