import {
  zodAsFactory, zodIsFactory, zodToFactory,
} from '@xylabs/zod'
import type { z } from 'zod'

import { ActorConfigZod } from '../config/index.ts'
import { BaseConfigContextZod } from '../model/index.ts'

export const ActorConfigContext = BaseConfigContextZod.extend({ config: ActorConfigZod })

export type ActorConfigContext = z.infer<typeof ActorConfigContext>

export const isActorConfigContext = zodIsFactory(ActorConfigContext)
export const asActorConfigContext = zodAsFactory(ActorConfigContext, 'asActorConfigContext')
export const toActorConfigContext = zodToFactory(ActorConfigContext, 'toActorConfigContext')
