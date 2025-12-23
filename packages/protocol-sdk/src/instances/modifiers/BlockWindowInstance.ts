import type { Hash } from '@xylabs/sdk-js'

export interface BlockWindowInstance {
  count: number
  numberRange: [number, number]
  range: [Hash, Hash]
}
