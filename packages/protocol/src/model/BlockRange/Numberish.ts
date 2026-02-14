import { z } from 'zod'

import { NumberishZod } from '../../BlockNumber/index.ts'

export const NumberishRangeZod = z.tuple([NumberishZod, NumberishZod])
