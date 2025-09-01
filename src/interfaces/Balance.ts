import type { Hash } from 'node:crypto'

import type { Address } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { Transfer } from '../payload/index.ts'

export interface BalanceInterface {
  accountBalance(address: Address | bigint): Promisable<bigint>
  accountBalanceHistory(address: Address): Promisable<[Hash /* block */, Hash /* transaction */, Transfer][]>
}
