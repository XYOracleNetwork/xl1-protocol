import { deepMerge } from '@xylabs/sdk-js'
import { globalRegistry, z } from 'zod'

import { ApiConfigZod } from './Api.ts'
import type { BaseConfig } from './Base.ts'
import { BaseConfigZod } from './Base.ts'
import { BridgeConfigZod } from './Bridge.ts'
import { MempoolConfigZod } from './Mempool.ts'
import { ProducerConfigZod } from './Producer.ts'
import { RewardRedemptionConfigZod } from './RewardRedemption.ts'

export const ActorConfigsZod = z.object({
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

export const ActorsConfigZod = z.object({ actors: ActorConfigsZod.default(ActorConfigsZod.parse({})) }).describe(
  'Config Object that holds the configuration for all actors, where each actor can have its own specific configuration that overrides the base configuration when the actor is running',
)

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
