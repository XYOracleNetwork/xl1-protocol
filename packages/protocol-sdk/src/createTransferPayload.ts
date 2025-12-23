import type { Address, JsonObject } from '@xylabs/sdk-js'
import { toHex } from '@xylabs/sdk-js'
import { PayloadBuilder } from '@xyo-network/payload-builder'
import type { Transfer } from '@xyo-network/xl1-protocol'
import { TransferSchema } from '@xyo-network/xl1-protocol'

export function createTransferPayload(from: Address, transfers: Record<Address, bigint>, context?: JsonObject): Transfer {
  return new PayloadBuilder<Transfer>({ schema: TransferSchema })
    .fields({
      epoch: Date.now(),
      from,
      transfers: Object.fromEntries(Object.entries(transfers).map(([k, v]) => [k, toHex(v)])),
      context,
    }).build()
}
