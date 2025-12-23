import type { Promisable } from '@xylabs/sdk-js'
import type { z } from 'zod'

import type { RpcSchemaMap } from '../types/index.ts'

export type TransportFactory = (schemas: RpcSchemaMap) => Promisable<RpcTransport<RpcSchemaMap>>

export interface RpcTransport<TSchemas extends RpcSchemaMap> {
  sendRequest<
    TMethod extends keyof TSchemas,
  >(
    method: TMethod,
    params?: z.input<TSchemas[TMethod]['params']['to']>
  ): Promise<z.output<TSchemas[TMethod]['result']['from']>>
}
