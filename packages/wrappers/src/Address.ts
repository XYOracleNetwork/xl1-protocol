import type { Address, Promisable } from '@xylabs/sdk-js'
import { isAddress } from '@xylabs/sdk-js'
import type { AddressInstance } from '@xyo-network/xl1-protocol-sdk'

import { BaseWrapper } from './Base.ts'

export class AddressWrapper extends BaseWrapper<Address> implements AddressInstance {
  get address(): Address {
    return this.value
  }

  static override validateValue(address: unknown): Promisable<Error[]> {
    return isAddress(address) ? [] : [new Error('Invalid address')]
  }

  override async validate(): Promise<Error[]> {
    return await AddressWrapper.validateValue(this.address)
  }
}
