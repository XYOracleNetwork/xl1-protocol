import { type Address, toAddress } from '@xylabs/sdk-js'
import { isDefined } from '@xylabs/sdk-js'
import { keccak256 } from 'ethers'

export function derivedReceiveAddress(address: Address, scope?: string): Address {
  const addressKey = new TextEncoder().encode(isDefined(scope) ? `${scope}|${address}` : address)
  return toAddress(keccak256(addressKey).slice(-40), { prefix: false })
}
