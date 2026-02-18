import {
  zodAsFactory, zodIsFactory, zodToFactory,
} from '@xylabs/sdk-js'
import type { z } from 'zod'

import { HostActorConfigZod } from '../config/index.ts'
import { BaseConfigContextZod } from '../model/index.ts'

export const HostActorConfigContext = BaseConfigContextZod.extend({ config: HostActorConfigZod })

export type HostActorConfigContext = z.infer<typeof HostActorConfigContext>

export const isHostActorConfigContext = zodIsFactory(HostActorConfigContext)
export const asHostActorConfigContext = zodAsFactory(HostActorConfigContext, 'asHostActorConfigContext')
export const toHostActorConfigContext = zodToFactory(HostActorConfigContext, 'toHostActorConfigContext')
