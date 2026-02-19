import type { Hash } from '@xylabs/sdk-js'
import type { Payload } from '@xyo-network/sdk-js'

import type {
  MapType, MapTypeRead, MapTypeWrite,
} from '../map/index.ts'

export type PayloadMapWrite<T extends Payload = Payload> = MapTypeWrite<Hash, T>
export type PayloadMapRead<T extends Payload = Payload> = MapTypeRead<Hash, T>
export type PayloadMap<T extends Payload = Payload> = MapType<Hash, T>
