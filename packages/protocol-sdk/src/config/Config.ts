import { deepMerge } from '@xylabs/sdk-js'
import z from 'zod'

import { BaseConfigZod } from './Base.ts'

export const ActorsConfigZod = z.array(BaseConfigZod.loose()).describe('Actor-specific configurations that override the base configuration when the actor is running').default([])

export type ActorsConfig = z.infer<typeof ActorsConfigZod>

export const ConfigZod = BaseConfigZod.extend(z.object({ actors: ActorsConfigZod })
  .describe('Actor-specific configurations that override the base configuration when the actor is running').shape)

export type Config = z.infer<typeof ConfigZod>
export type ActorName = keyof ActorsConfig

export function resolveConfig(
  config: Config,
) {
  const parsedConfig = ConfigZod.parse(config)
  const { actors, ...rootConfig } = parsedConfig
  parsedConfig.actors = actors.map((actorConfig) => {
    return BaseConfigZod.loose().parse(deepMerge(rootConfig, actorConfig))
  })
  return parsedConfig
}

/** @deprecated Use ConfigZod.parse({}) instead */
export const getDefaultConfig = (): Config => ConfigZod.parse({})
