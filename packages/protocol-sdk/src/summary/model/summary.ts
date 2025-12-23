import type { Payload } from '@xyo-network/payload-model'
import type { Semaphore } from 'async-mutex'

import type { MapType, MapTypeRead } from '../../map/index.ts'
import type {
  BaseContext, ChainContext, ChainContextRead,
} from '../../model/index.ts'
import type { BalancesStepSummary } from './BalancesStepSummary.ts'
import type { SchemasStepSummary } from './SchemasStepSummary.ts'
import type { TransfersStepSummary } from './TransfersSummary.ts'

export interface ChainSummaryContextBase<TPayload extends Payload,
  T extends (MapTypeRead<string, TPayload>)> extends BaseContext {
  stepSemaphores: Semaphore[]
  summaryMap: T
}

export interface ChainSummaryContextRead<T extends Payload> extends ChainSummaryContextBase<T, MapTypeRead<string, T>>, ChainContextRead {}

export interface ChainSummaryContextWrite<T extends Payload> extends ChainSummaryContextBase<T, MapType<string, T>>, ChainContext {}

export type ChainSummaryContext<T extends Payload> = ChainSummaryContextRead<T> & ChainSummaryContextWrite<T>

export interface BalanceStepSummaryContextRead extends ChainSummaryContextRead<BalancesStepSummary> {}

export interface BalanceStepSummaryContext extends ChainSummaryContext<BalancesStepSummary> {}

export interface TransfersStepSummaryContextRead extends ChainSummaryContextRead<TransfersStepSummary> {}

export interface TransfersStepSummaryContext extends ChainSummaryContext<TransfersStepSummary> {}

export interface SchemasStepSummaryContextRead extends ChainSummaryContextRead<SchemasStepSummary> {}

export interface SchemasStepSummaryContext extends ChainSummaryContext<SchemasStepSummary> {}
