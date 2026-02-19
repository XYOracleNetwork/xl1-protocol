import {
  type Address, type Hex, hexToBigInt,
} from '@xylabs/sdk-js'
import { span } from '@xylabs/sdk-js'
import type { Payload } from '@xyo-network/sdk-js'
import { isTransfer } from '@xyo-network/xl1-protocol'

// the net transfer amounts for the specified accounts only
export function netTransfersForPayloads(payloads: Payload[]): Record<Address, Record<Address, bigint>> {
  return span('netTransfersForPayloads', () => {
    const transfers: Record<Address, Record<Address, bigint>> = {}
    for (const payload of payloads) {
      if (isTransfer(payload)) {
        const { from } = payload
        transfers[from] = transfers[from] ?? {}
        for (let [to, amount] of Object.entries(payload.transfers) as [Address, Hex][]) {
          transfers[to] = transfers[to] ?? {}
          transfers[to][from] = (transfers[to][from] ?? 0n) + hexToBigInt(amount)
          transfers[from][to] = (transfers[from][to] ?? 0n) - hexToBigInt(amount)
        }
      }
    }
    return transfers
  })
}
