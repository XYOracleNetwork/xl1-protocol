import { z } from 'zod'

import { ChainConfigZod } from './Chain.ts'
import { EvmConfigZod } from './Evm.ts'
import { LogConfigZod } from './Log.ts'
import { RemoteConfigZod } from './Remote.ts'
import { StorageConfigZod } from './storage/index.ts'
import { TelemetryConfigZod } from './Telemetry.ts'
import { ValidationConfigZod } from './Validation.ts'

export const BaseConfigZod = z.object({
  chain: ChainConfigZod.default(ChainConfigZod.parse({})).describe('Configuration for the chain'),
  evm: EvmConfigZod.default(EvmConfigZod.parse({})).describe('Configuration for EVM-backed services'),
  log: LogConfigZod.default(LogConfigZod.parse({})).describe('Configuration for logging'),
  remote: RemoteConfigZod.default(RemoteConfigZod.parse({})).describe('Configuration for remote services'),
  storage: StorageConfigZod.default(StorageConfigZod.parse({})).describe('Configuration for the storage'),
  telemetry: TelemetryConfigZod.default(TelemetryConfigZod.parse({})).describe('Configuration for telemetry'),
  validation: ValidationConfigZod.default(ValidationConfigZod.parse({})).describe('Configuration for validation'),
})

export type BaseConfig = z.infer<typeof BaseConfigZod>
