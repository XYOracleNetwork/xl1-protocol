import { z } from 'zod'

import { ApiConfigZod } from './Api.ts'
import { BridgeConfigZod } from './Bridge.ts'
import { ChainConfigZod } from './Chain.ts'
import { EvmConfigZod } from './Evm.ts'
import { LogConfigZod } from './Log.ts'
import { MempoolConfigZod } from './Mempool.ts'
import { ProducerConfigZod } from './Producer.ts'
import { RewardRedemptionApiConfigZod } from './RewardRedemptionApi.ts'
import { ServicesConfigZod } from './Services.ts'
import { StorageConfigZod } from './storage/index.ts'
import { TelemetryConfigZod } from './Telemetry.ts'
import { ValidationConfigZod } from './Validation.ts'

export const Xl1CommonConfigSchema = z.object({ ...LogConfigZod.shape }).describe('XL1 common configuration options')

export const ConfigZod = z.object({
  ...Xl1CommonConfigSchema.shape,
  api: ApiConfigZod.default(ApiConfigZod.parse({})).describe('Configuration for the API node'),
  bridge: BridgeConfigZod.default(BridgeConfigZod.parse({})).describe('Configuration for the Bridge node'),
  chain: ChainConfigZod.default(ChainConfigZod.parse({})).describe('Configuration for the chain'),
  evm: EvmConfigZod.default(EvmConfigZod.parse({})).describe('Configuration for EVM-backed services'),
  mempool: MempoolConfigZod.default(MempoolConfigZod.parse({})).describe('Configuration for the mempool'),
  producer: ProducerConfigZod.default(ProducerConfigZod.parse({})).describe('Configuration for the producer'),
  rewardRedemptionApi: RewardRedemptionApiConfigZod.default(RewardRedemptionApiConfigZod.parse({})).describe('Configuration for the rewards redemption API'),
  services: ServicesConfigZod.default(ServicesConfigZod.parse({})).describe('Configuration for the global services'),
  storage: StorageConfigZod.default(StorageConfigZod.parse({})).describe('Configuration for the storage'),
  telemetry: TelemetryConfigZod.default(TelemetryConfigZod.parse({})).describe('Configuration for telemetry'),
  validation: ValidationConfigZod.default(ValidationConfigZod.parse({})).describe('Configuration for validation'),
})

export type Config = z.infer<typeof ConfigZod>

export const getDefaultConfig = (): Config => ConfigZod.parse({})
