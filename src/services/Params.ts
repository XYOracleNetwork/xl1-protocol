import type { BaseParams } from '@xylabs/base'
import type { EmptyObject } from '@xylabs/object'
import type { AccountInstance } from '@xyo-network/account-model'

import type { OpenTelemetryProviders } from '../OpenTelemetryProviders.ts'
import type { ServiceStatusReporter } from './Service.ts'

export type BaseServiceParams<TAdditionalParams extends EmptyObject = EmptyObject> = BaseParams<TAdditionalParams & OpenTelemetryProviders & {
  statusReporter?: ServiceStatusReporter
}>

export type BaseAccountableServiceParams = BaseServiceParams<{
  account: AccountInstance
}>
