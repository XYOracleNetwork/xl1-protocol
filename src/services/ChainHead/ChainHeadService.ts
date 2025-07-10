import type { EventEmitter } from '@xylabs/events'
import type { Hash } from '@xylabs/hex'

import type { Service } from '../Service.ts'
import type { ChainHeadServiceEventData } from './ChainHeadServiceEventData.ts'

export interface ChainHeadService extends Service {
  head(): Promise<Hash>
}

export interface EventingChainHeadService extends ChainHeadService, EventEmitter<ChainHeadServiceEventData> {}
