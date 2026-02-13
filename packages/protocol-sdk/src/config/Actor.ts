import {
  zodAsFactory, zodIsFactory, zodToFactory,
} from '@xylabs/zod'
import { globalRegistry, z } from 'zod'

import { BaseConfigContextZod } from '../CreatableProvider/index.ts'
import { MnemonicStringZod } from '../validation/index.ts'
import { BaseConfigZod } from './Base.ts'

export const ActorConfigZod = BaseConfigZod.extend({
  name: z.string(),
  mnemonic: MnemonicStringZod.optional().register(globalRegistry, {
    description: 'Mnemonic for the Actor wallet',
    title: 'mnemonic',
    type: 'string',
  }),
  healthCheckPort: z.coerce.number().optional().register(globalRegistry, {
    description: 'Port for the Producer health checks',
    title: 'producer.healthCheckPort',
    type: 'number',
  }),
})

export type ActorConfig = z.infer<typeof ActorConfigZod>

export const isActorConfig = zodIsFactory(ActorConfigZod)
export const asActorConfig = zodAsFactory(ActorConfigZod, 'asActorConfig')
export const toActorConfig = zodToFactory(ActorConfigZod, 'toActorConfig')

export const ActorConfigContext = BaseConfigContextZod.extend({ config: ActorConfigZod })

export type ActorConfigContext = z.infer<typeof ActorConfigContext>

export const isActorConfigContext = zodIsFactory(ActorConfigContext)
export const asActorConfigContext = zodAsFactory(ActorConfigContext, 'asActorConfigContext')
export const toActorConfigContext = zodToFactory(ActorConfigContext, 'toActorConfigContext')
