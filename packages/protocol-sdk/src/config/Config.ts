import { deepMerge } from '@xylabs/sdk-js'
import { z } from 'zod'

import { ApiConfigZod } from './Api.ts'
import type { BaseConfig } from './Base.ts'
import { BaseConfigZod } from './Base.ts'
import { BridgeConfigZod } from './Bridge.ts'
import { MempoolConfigZod } from './Mempool.ts'
import { ProducerConfigZod } from './Producer.ts'
import { RewardRedemptionConfigZod } from './RewardRedemption.ts'

export const ActorsConfigZod = z.object({
  api: ApiConfigZod.default(ApiConfigZod.parse({})).describe('Configuration for the API node').optional(),
  bridge: BridgeConfigZod.default(BridgeConfigZod.parse({})).describe('Configuration for the Bridge node').optional(),
  mempool: MempoolConfigZod.default(MempoolConfigZod.parse({})).describe('Configuration for the mempool').optional(),
  producer: ProducerConfigZod.default(ProducerConfigZod.parse({})).describe('Configuration for the producer').optional(),
  rewardRedemption: RewardRedemptionConfigZod.default(RewardRedemptionConfigZod.parse({})).describe('Configuration for the rewards redemption API').optional(),
}).describe('Actor-specific configurations that override the base configuration when the actor is running')

export type ActorsConfig = z.infer<typeof ActorsConfigZod>

export const ConfigZod = BaseConfigZod.extend(z.object({
  actors: ActorsConfigZod.default({
    api: ApiConfigZod.parse({}),
    bridge: BridgeConfigZod.parse({}),
    mempool: MempoolConfigZod.parse({}),
    producer: ProducerConfigZod.parse({}),
    rewardRedemption: RewardRedemptionConfigZod.parse({}),
  }),
})
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
