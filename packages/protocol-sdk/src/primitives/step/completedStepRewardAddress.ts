import { type Address, toAddress } from '@xylabs/sdk-js'
import { type StepIdentity, StepSizes } from '@xyo-network/xl1-protocol'
import { keccak256 } from 'ethers'

export function completedStepRewardAddress({ block, step }: StepIdentity): Address {
  const resolvedStepSize = step < StepSizes.length ? StepSizes[step] : step
  const addressKey = new TextEncoder().encode(`${block}|${resolvedStepSize}`)
  return toAddress(keccak256(addressKey).slice(-40), { prefix: false })
}
