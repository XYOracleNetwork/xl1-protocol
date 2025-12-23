import type { CreatableParams } from '@xylabs/sdk-js'
import type { AccountInstance } from '@xyo-network/account-model'
import type { OpenTelemetryProviders } from '@xyo-network/xl1-protocol'

export interface BaseServiceParams extends CreatableParams, OpenTelemetryProviders {

}

export interface BaseAccountableServiceParams extends BaseServiceParams {
  account: AccountInstance
}
