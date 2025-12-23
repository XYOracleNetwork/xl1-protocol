import type { Promisable } from '@xylabs/sdk-js'
import type { XL1AmountInstance } from '@xyo-network/xl1-protocol'
import type {
  AddressStateInstance,
  BlockWindowInstance,
} from '@xyo-network/xl1-protocol-sdk'

import { AddressWrapper } from './Address.ts'

export class AddressStateWrapper extends AddressWrapper implements AddressStateInstance {
  get blockWindow(): BlockWindowInstance {
    throw new Error('Method [blockWindow] not implemented.')
  }

  balance(): Promisable<[XL1AmountInstance, BlockWindowInstance]> {
    throw new Error('Method [balance] not implemented.')
  }
}
