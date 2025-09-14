import type { Address, Hash } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { AttoXL1 } from '../xl1/index.ts'
import type { ServiceInterface } from './Service.ts'

export interface AccountTransfersProvider {
  transfer(head: Hash, from: Address, to: Address): Promisable<AttoXL1>
  transfers(head: Hash, addresses: Address[]): Promisable<Partial<Record<Address, AttoXL1>>>
}

export interface AccountTransfersService extends AccountTransfersProvider, ServiceInterface {}
