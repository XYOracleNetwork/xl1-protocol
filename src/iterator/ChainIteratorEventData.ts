import type { EventData } from '@xylabs/events'

import type { BlockBoundWitness } from '#block'

export type HeadEventArgs = { blocks: [BlockBoundWitness] }

export interface HeadEventData extends EventData {
  headUpdated: HeadEventArgs
}

export interface ChainIteratorEventData extends HeadEventData { }
