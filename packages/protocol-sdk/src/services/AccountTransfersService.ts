import type {
  Address, Hash, Promisable,
} from '@xylabs/sdk-js'
import type { AttoXL1 } from '@xyo-network/xl1-protocol'

export interface AccountTransfersProvider {
  transfer(head: Hash, account: Address): Promisable<AttoXL1>
  transfers(head: Hash, accounts: Address[]): Promisable<Partial<Record<Address, AttoXL1>>>
}

export interface AccountTransfersService extends AccountTransfersProvider {}
