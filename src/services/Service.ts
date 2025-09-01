import type { Hash } from '@xylabs/hex'

export interface ServiceInterface {
  sync(head: Hash): Promise<void>
}
