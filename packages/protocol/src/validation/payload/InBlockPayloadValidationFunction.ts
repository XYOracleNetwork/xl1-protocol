import type { Promisable } from '@xylabs/sdk-js'
import type { Payload, WithHashMeta } from '@xyo-network/payload-model'

import type { BaseContext, ChainId } from '../../model/index.ts'
import type { HydratedBlockWithHashMeta } from '../../zod/index.ts'
import type { InBlockPayloadValidationError } from './error.ts'

export interface InBlockPayloadValidationFunctionContext extends BaseContext {
  chainId: ChainId
}

export type InBlockPayloadValidationFunction = (
  context: InBlockPayloadValidationFunctionContext,
  payload: WithHashMeta<Payload>, block: HydratedBlockWithHashMeta,
) => Promisable<InBlockPayloadValidationError[]>
