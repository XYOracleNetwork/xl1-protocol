import type { Promisable } from '@xylabs/promise'
import type { Payload, WithHashStorageMeta } from '@xyo-network/payload-model'

import type { HydratedBlock } from '../../block/index.ts'
import type { InBlockPayloadValidationError } from './error.ts'

export type InBlockPayloadValidationFunction = (
  payload: WithHashStorageMeta<Payload>, block: HydratedBlock
) => Promisable<InBlockPayloadValidationError[]>
