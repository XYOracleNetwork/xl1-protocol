import {
  type Address, type Hex, hexToBigInt, toAddress,
} from '@xylabs/sdk-js'
import { span } from '@xylabs/sdk-js'
import type { Payload } from '@xyo-network/sdk-js'
import { isTransfer } from '@xyo-network/xl1-protocol'

export const netBalancesForPayloads = (payloads: Payload[]) => {
  return span('netBalancesForPayloads', () => {
    const balances: Record<Address, bigint> = {}
    for (const payload of payloads) {
      if (isTransfer(payload)) {
        const { from } = payload
        for (let [address, amount] of Object.entries(payload.transfers) as [Address, Hex][]) {
          balances[toAddress(address)] = (balances[toAddress(address)] ?? 0n) + hexToBigInt(amount)
          balances[toAddress(from)] = (balances[toAddress(from)] ?? 0n) - hexToBigInt(amount)
        }
      }
    }
    return balances
  })
}
