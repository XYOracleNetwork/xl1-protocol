import { AddressZod } from '@xylabs/sdk-js'
import { z } from 'zod'

import { BlockRangeZod, StepIdentityZod } from '../model/index.ts'

export const RewardsRangeOptionsZod = z.object({
  positions: z.array(z.number()).optional(),
  range: BlockRangeZod.optional(),
  steps: z.array(StepIdentityZod).optional(),
  stakers: z.array(AddressZod).optional(),
})
