import { AddressZod } from '@xylabs/sdk-js'
import { z } from 'zod'

import { StepIdentityZod } from '../Step/index.ts'
import { BlockRangeZod } from './BlockRange/index.ts'

export const RewardsRangeOptionsZod = z.object({
  positions: z.array(z.number()).optional(),
  range: BlockRangeZod.optional(),
  steps: z.array(StepIdentityZod).optional(),
  stakers: z.array(AddressZod).optional(),
})
