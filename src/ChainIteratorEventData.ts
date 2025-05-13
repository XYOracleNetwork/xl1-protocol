import type { EventData } from '@xylabs/events'

import type { BlockBoundWitness } from './protocol/index.ts'

export type HeadEventArgs = { blocks: [BlockBoundWitness] }

export interface HeadEventData extends EventData {
  headUpdated: HeadEventArgs
}

export interface ChainIteratorEventData extends HeadEventData { }
