import { AddressZod } from '@xylabs/sdk-js'
import { z } from 'zod'

import { BlockRangeZod } from './BlockRange/index.ts'
import { StepIdentityZod } from './StepIdentity.ts'

export const RewardsRangeOptionsZod = z.object({
  positions: z.array(z.number()).optional(),
  range: BlockRangeZod.optional(),
  steps: z.array(StepIdentityZod).optional(),
  stakers: z.array(AddressZod).optional(),
})
