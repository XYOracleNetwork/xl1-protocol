import {
  zodAsFactory, zodIsFactory, zodToFactory,
} from '@xylabs/zod'
import { globalRegistry, z } from 'zod'

import { ActorConfigZod } from './Actor.ts'

export const HostActorConfigZod = ActorConfigZod.extend({
  host: z.string().default('localhost').register(globalRegistry, {
    default: 'localhost',
    description: 'Host for the Actor',
    title: 'host',
    type: 'string',
  }),
  port: z.coerce.number().default(8080).register(globalRegistry, {
    default: 8080,
    description: 'Port for the Actor',
    title: 'port',
    type: 'number',
  }),
})

export type HostActorConfig = z.infer<typeof HostActorConfigZod>

export const isHostActorConfig = zodIsFactory(HostActorConfigZod)
export const asHostActorConfig = zodAsFactory(HostActorConfigZod, 'asHostActorConfig')
export const toHostActorConfig = zodToFactory(HostActorConfigZod, 'toHostActorConfig')
