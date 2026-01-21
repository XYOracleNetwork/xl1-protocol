import { z } from 'zod'

export const NoArgsZod = z.array(z.any()).length(0).optional()
