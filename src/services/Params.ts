import type { BaseParams } from '@xylabs/base'
import type { EmptyObject } from '@xylabs/object'
import type { AccountInstance } from '@xyo-network/account-model'

import type { OpenTelemetryProviders } from '../OpenTelemetryProviders.ts'

export type BaseServiceParams<TAdditionalParams extends EmptyObject = EmptyObject> = BaseParams<TAdditionalParams & OpenTelemetryProviders>

export type BaseAccountableServiceParams = BaseServiceParams<{
  account: AccountInstance
}>
