import type { Address } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { CompletedStep } from '../model.ts'
import type { ServiceInterface } from './Service.ts'

export interface NetworkStakeService extends ServiceInterface {
  stepStakeForAddress: (address: Address, step: CompletedStep) => Promisable<bigint>
}
