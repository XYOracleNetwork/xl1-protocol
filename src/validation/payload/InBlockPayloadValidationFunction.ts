import type { Promisable } from '@xylabs/promise'
import type { Payload, WithHashMeta } from '@xyo-network/payload-model'

import type { HydratedBlockWithHashMeta } from '../../zod/index.ts'
import type { InBlockPayloadValidationError } from './error.ts'

export type InBlockPayloadValidationFunction = (
  payload: WithHashMeta<Payload>, block: HydratedBlockWithHashMeta,
) => Promisable<InBlockPayloadValidationError[]>
