import { AsObjectFactory } from '@xylabs/object'
import type { Payload } from '@xyo-network/payload-model'
import { isPayloadOfZodType } from '@xyo-network/payload-model'
import type { z } from 'zod'

import { StepIdentityZod } from '../model/index.ts'

export const StepIdentitySchema = 'network.xyo.chain.step.identity' as const
export type StepIdentitySchema = typeof StepIdentitySchema

export type StepIdentityFields = z.infer<typeof StepIdentityZod>

/**
 * A Step Identity Payload
 */
export type StepIdentityPayload = Payload<StepIdentityFields, StepIdentitySchema>

export const isStepIdentityPayload = isPayloadOfZodType<StepIdentityPayload>(StepIdentityZod, StepIdentitySchema)

export const asStepIdentityPayload = AsObjectFactory.create(isStepIdentityPayload)
