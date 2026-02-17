import type { CreatableStatusReporter } from '@xylabs/sdk-js'
import {
  zodAsFactory, zodIsFactory, zodToFactory,
} from '@xylabs/zod'
import { z } from 'zod'

import { ActorConfigZod } from '../config/index.ts'
import { BaseConfigContextZod } from '../model/index.ts'

const StatusReporterInstanceZod = z.custom<CreatableStatusReporter>(val => val && typeof val === 'object' && 'report' in val)

export const ActorConfigContext = BaseConfigContextZod.extend({ config: ActorConfigZod, statusReporter: StatusReporterInstanceZod.optional() })

export type ActorConfigContext = z.infer<typeof ActorConfigContext>

export const isActorConfigContext = zodIsFactory(ActorConfigContext)
export const asActorConfigContext = zodAsFactory(ActorConfigContext, 'asActorConfigContext')
export const toActorConfigContext = zodToFactory(ActorConfigContext, 'toActorConfigContext')
