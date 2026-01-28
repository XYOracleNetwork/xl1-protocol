import { AsObjectFactory } from '@xylabs/sdk-js'
import type { Payload } from '@xyo-network/payload-model'
import { asSchema, isPayloadOfZodType } from '@xyo-network/payload-model'
import type { z } from 'zod'

import { StepIdentityZod } from '../model/index.ts'

export const StepIdentitySchema = asSchema('network.xyo.chain.step.identity', true)
export type StepIdentitySchema = typeof StepIdentitySchema

export type StepIdentityFields = z.infer<typeof StepIdentityZod>

/**
 * A Step Identity Payload
 */
export type StepIdentityPayload = Payload<StepIdentityFields, StepIdentitySchema>

export const isStepIdentityPayload = isPayloadOfZodType<StepIdentityPayload>(StepIdentityZod, StepIdentitySchema)

export const asStepIdentityPayload = AsObjectFactory.create(isStepIdentityPayload)
