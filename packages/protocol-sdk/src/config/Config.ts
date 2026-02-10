import { deepMerge } from '@xylabs/sdk-js'
import { globalRegistry, z } from 'zod'

import {
  ApiConfigZod, BridgeConfigZod, MempoolConfigZod, ProducerConfigZod, RewardRedemptionConfigZod,
} from './actors/index.ts'
import type { BaseConfig } from './Base.ts'
import { BaseConfigZod } from './Base.ts'

export const ActorsConfigZod = z.object({
  api: ApiConfigZod.default(ApiConfigZod.parse({})).register(globalRegistry, {
    description: 'Configuration for the api Actor',
    type: 'object',
  }),
  bridge: BridgeConfigZod.default(BridgeConfigZod.parse({})).register(globalRegistry, {
    description: 'Configuration for the bridge Actor',
    type: 'object',
  }),
  mempool: MempoolConfigZod.default(MempoolConfigZod.parse({})).register(globalRegistry, {
    description: 'Configuration for the mempool Actor',
    type: 'object',
  }),
  producer: ProducerConfigZod.default(ProducerConfigZod.parse({})).register(globalRegistry, {
    description: 'Configuration for the producer Actor',
    type: 'object',
  }),
  rewardRedemption: RewardRedemptionConfigZod.default(RewardRedemptionConfigZod.parse({})).register(globalRegistry, {
    description: 'Configuration for the rewardRedemption Actor',
    type: 'object',
  }),
}).describe('Actor-specific configurations that override the base configuration when the actor is running').default({
  api: ApiConfigZod.parse({}),
  bridge: BridgeConfigZod.parse({}),
  mempool: MempoolConfigZod.parse({}),
  producer: ProducerConfigZod.parse({}),
  rewardRedemption: RewardRedemptionConfigZod.parse({}),
})

export type ActorsConfig = z.infer<typeof ActorsConfigZod>

export const ConfigZod = BaseConfigZod.extend(z.object({ actors: ActorsConfigZod.default(ActorsConfigZod.parse({})) })
  .describe('Actor-specific configurations that override the base configuration when the actor is running').shape)

export type Config = z.infer<typeof ConfigZod>
export type ActorName = keyof ActorsConfig

export function resolveConfig<T extends ActorName>(
  config: Config,
  actor: ActorName,
) {
  const parsedConfig = ConfigZod.parse(config)
  if (parsedConfig.actors?.[actor] === undefined) {
    return BaseConfigZod.parse(config) as BaseConfig & Partial<ActorsConfig[T]>
  }
  return deepMerge(BaseConfigZod.parse(config), parsedConfig.actors[actor]) as ActorsConfig[T]
}

/** @deprecated Use ConfigZod.parse({}) instead */
export const getDefaultConfig = (): Config => ConfigZod.parse({})
