import type { StepIdentity, StepIdentityString } from '@xyo-network/xl1-protocol'

export function toStepIdentityString({ block, step }: StepIdentity): StepIdentityString {
  return `${block}|${step}` as StepIdentityString
}
