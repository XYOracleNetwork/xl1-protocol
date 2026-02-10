import { AddressZod, asAddress } from '@xylabs/sdk-js'
import { globalRegistry, z } from 'zod'

import { MnemonicStringZod } from '../../validation/index.ts'
import { BaseConfigZod } from '../Base.ts'

export const ProducerConfigZod = BaseConfigZod.extend(z.object({
  allowlist: z.preprocess((val) => {
    if (typeof val === 'string') {
      return val.split(',').map(s => asAddress(s.trim()))
    }
    return val
  }, z.array(AddressZod).optional().register(globalRegistry, {
    description: 'List of allowed producer addresses, if undefined anyone can participate',
    title: 'allowlist',
    type: 'array',
  })),

  disableIntentRedeclaration: z.boolean().optional().register(globalRegistry, {
    description: 'Should the producer skip redeclaring their intent to continue producing blocks',
    title: 'producer.disableIntentRedeclaration',
    type: 'boolean',
  }),
  // TODO: Port schema
  healthCheckPort: z.coerce.number().optional().register(globalRegistry, {
    description: 'Port for the Producer health checks',
    title: 'producer.healthCheckPort',
    type: 'number',
  }),
  heartbeatInterval: z.coerce.number().default(3_600_000).register(globalRegistry, {
    description: 'The number of milliseconds between heartbeats if no blocks are produced',
    title: 'producer.heartbeatInterval',
    type: 'number',
  }),
  // TODO: BigInt schema
  minStake: z.coerce.number().default(1).register(globalRegistry, {
    description: 'Minimum stake required to be a Producer',
    title: 'producer.minStake',
    type: 'number',
  }),
  mnemonic: MnemonicStringZod.optional().register(globalRegistry, {
    description: 'Mnemonic for the Producer wallet',
    title: 'producer.mnemonic',
    type: 'string',
  }),
  // TODO: Port schema
  port: z.coerce.number().default(8081).register(globalRegistry, {
    default: 8081,
    description: 'Port for the Producer',
    title: 'producer.port',
    type: 'number',
  }),
  // TODO: Address schema
  rewardAddress: z.string().optional().register(globalRegistry, {
    description: 'Address to receive block rewards',
    title: 'producer.rewardAddress',
    type: 'string',
  }),
}).shape)

export type ProducerConfig = z.infer<typeof ProducerConfigZod>
