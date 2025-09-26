import type { EventData } from '@xylabs/events'

import type { BlockBoundWitness } from '../../block/index.ts'

export type HeadEventArgs = { blocks: [BlockBoundWitness] }

export interface HeadEventData extends EventData {
  headUpdated: HeadEventArgs
}

export interface ChainIteratorServiceEventData extends HeadEventData { }

// /** @deprecated use ChainIteratorServiceEventData instead */
// export interface ChainIteratorEventData extends ChainIteratorServiceEventData { }
