import type { CreatableParams } from '@xylabs/creatable'
import type { AccountInstance } from '@xyo-network/account-model'

import type { OpenTelemetryProviders } from '../OpenTelemetryProviders.ts'

export interface BaseServiceParams extends CreatableParams, OpenTelemetryProviders {

}

export interface BaseAccountableServiceParams extends BaseServiceParams {
  account: AccountInstance
}
