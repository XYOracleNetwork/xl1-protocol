import type { Address } from '@xylabs/sdk-js'
import { hexToBigInt, toAddress } from '@xylabs/sdk-js'
import type { Transfer } from '@xyo-network/xl1-protocol'

export function mergeTransfers(transfers: Transfer[]): Record<Address, Record<Address, bigint>> {
  const result: Record<Address, Record<Address, bigint>> = {}
  for (const transfer of transfers) {
    result[transfer.from] = result[transfer.from] ?? {}
    for (const [to, value] of Object.entries(transfer.transfers)) {
      const typedTo = toAddress(to)
      result[transfer.from][typedTo] = (result[transfer.from][typedTo] ?? 0n) + (hexToBigInt(value))
    }
  }
  return result
}
