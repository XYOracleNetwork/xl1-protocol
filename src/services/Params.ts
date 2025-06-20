import type { CreatableParams } from '@xylabs/creatable'
import type { EmptyObject } from '@xylabs/object'
import type { AccountInstance } from '@xyo-network/account-model'

import type { OpenTelemetryProviders } from '../OpenTelemetryProviders.ts'

export type BaseServiceParams<TAdditionalParams extends EmptyObject = EmptyObject> = CreatableParams<TAdditionalParams & OpenTelemetryProviders>

export type BaseAccountableServiceParams = BaseServiceParams<{
  account: AccountInstance
}>
