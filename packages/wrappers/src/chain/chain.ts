import type { Address } from '@xylabs/sdk-js'

import type { BaseWrapperConfig } from '../Base.ts'
import { BaseWrapper } from '../Base.ts'

export class ChainWrapper extends BaseWrapper<Address, BaseWrapperConfig<Address>> {
  get id(): Address {
    return this.value
  }
}
