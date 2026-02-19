import type { Promisable } from '@xylabs/sdk-js'
import type { Payload, WithHashMeta } from '@xyo-network/sdk-js'

import type { HydratedBlockWithHashMeta } from '../../block/index.ts'
import type { BaseContext } from '../../model/index.ts'
import type { InBlockPayloadValidationError } from './error.ts'

export interface InBlockPayloadValidationFunctionContext extends BaseContext {

}

export type InBlockPayloadValidationFunction = (
  context: InBlockPayloadValidationFunctionContext,
  payload: WithHashMeta<Payload>, block: HydratedBlockWithHashMeta,
) => Promisable<InBlockPayloadValidationError[]>
