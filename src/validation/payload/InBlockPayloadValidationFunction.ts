import type { Promisable } from '@xylabs/promise'
import type { Payload, WithHashStorageMeta } from '@xyo-network/payload-model'

import type { HydratedBlock } from '../../block/index.ts'

export type InBlockPayloadValidationFunction = (
  payload: WithHashStorageMeta<Payload>, block: HydratedBlock
) => Promisable<Error[]>
