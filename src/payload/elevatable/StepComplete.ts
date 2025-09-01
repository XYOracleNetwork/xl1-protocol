import type { Hash } from '@xylabs/hex'
import { AsObjectFactory } from '@xylabs/object'
import type { Payload } from '@xyo-network/payload-model'
import { isPayloadOfSchemaType } from '@xyo-network/payload-model'

import type { FromFields } from './Executable.ts'

export const StepCompleteSchema = 'network.xyo.chain.step.complete' as const
export type StepCompleteSchema = typeof StepCompleteSchema

/* This records the completion of a step in the network - needed for network staking rewards */
/* We will only write these for steps that are eligible for rewards  Step 3 (2311) */

export interface StepCompleteFields extends FromFields {
  block: number /* The block number on the XL1 network */
  hash: Hash /* The Step Hash */
  size: number /* The size of the step */
  stakeBlock: number /* The block number on ethereum or other staking system */
}

// if this payload is included in a boundwitness, it needs to be available for inspection to be included in block
export type StepComplete = Payload<StepCompleteFields, StepCompleteSchema>

export const isStepComplete = isPayloadOfSchemaType<StepComplete>(StepCompleteSchema)

export const asStepComplete = AsObjectFactory.create(isStepComplete)
