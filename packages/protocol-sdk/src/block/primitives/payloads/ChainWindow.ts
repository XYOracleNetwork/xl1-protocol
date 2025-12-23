import type { Hash } from '@xylabs/sdk-js'

export interface ChainWindow {
  depth: number // number of blocks the window covers, including the head
  head: Hash // the head of the chain
}
