import z from 'zod'

import { ActorConfigZod } from './Actor.ts'
import { BaseConfigZod } from './Base.ts'

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

export const ActorsConfigZod = z.array(ActorConfigZod.loose()).describe('Actor-specific configurations that override the base configuration when the actor is running').default([])

export type ActorsConfig = z.infer<typeof ActorsConfigZod>

export const ConfigZod = BaseConfigZod.extend(z.object({ actors: ActorsConfigZod })
  .describe('Actor-specific configurations that override the base configuration when the actor is running').shape)

export type Config = z.infer<typeof ConfigZod>
export type ActorName = keyof ActorsConfig

export function resolveConfig(
  config: DeepPartial<Config>,
) {
  const parsedConfig = ConfigZod.parse(config)
  const { actors, ...rootConfig } = parsedConfig
  parsedConfig.actors = actors.map((actorConfig) => {
    return ActorConfigZod.loose().parse({ ...rootConfig, ...actorConfig })
  })
  return parsedConfig
}
