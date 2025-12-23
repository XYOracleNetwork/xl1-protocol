import type { Address, Promisable } from '@xylabs/sdk-js'
import type { XL1AmountInstance } from '@xyo-network/xl1-protocol'

import type {
  BlockWindowInstance, BlockWindowStateInstance, ValidatableInstance,
} from './modifiers/index.ts'

export interface AddressInstance extends ValidatableInstance {
  address: Address
}

export interface AddressStateInstance extends AddressInstance, BlockWindowStateInstance {
  balance(): Promisable<[XL1AmountInstance, BlockWindowInstance]>
}
