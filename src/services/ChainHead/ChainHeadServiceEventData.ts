import type { EventData } from '@xylabs/events'
import type { Hash } from '@xylabs/hex'

export interface ChainHeadServiceEventArgs { hash: Hash }

export interface ChainHeadServiceEventData extends EventData {
  headUpdated: ChainHeadServiceEventArgs
}
