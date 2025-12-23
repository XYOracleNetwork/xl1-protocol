import type { XyoRunnerRpcMethodHandlers } from './XyoRunnerRpc.ts'
import type { XyoViewerRpcMethodHandlers } from './XyoViewerRpc.ts'

export type XyoProviderRpcMethodHandlers = Partial<XyoRunnerRpcMethodHandlers>
  & Partial<XyoViewerRpcMethodHandlers>
