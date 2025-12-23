import type { EventData } from '@xylabs/sdk-js'
import type { BlockBoundWitness } from '@xyo-network/xl1-protocol'

export type HeadEventArgs = { blocks: [BlockBoundWitness] }

export interface HeadEventData extends EventData {
  headUpdated: HeadEventArgs
}

export interface ChainIteratorServiceEventData extends HeadEventData { }

// /** @deprecated use ChainIteratorServiceEventData instead */
// export interface ChainIteratorEventData extends ChainIteratorServiceEventData { }
