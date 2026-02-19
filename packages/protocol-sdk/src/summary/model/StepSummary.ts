import type { EmptyObject, Hash } from '@xylabs/sdk-js'
import {
  asSchema, type Payload, type Schema,
} from '@xyo-network/sdk-js'

export const StepSummarySchema = asSchema('network.xyo.step.summary', true)
export type StepSummarySchema = typeof StepSummarySchema

export interface StepSummaryFields {
  hash: Hash // the stepHash - the hash of the last block in the step frame
  stepSize: number // the stepSize in blocks
}

export type StepSummary<TAdditionalFields extends EmptyObject | void = void,
  TSchema extends Schema | void = void> = Payload<TAdditionalFields extends void ? StepSummaryFields : TAdditionalFields & StepSummaryFields,
  TSchema extends void ? StepSummarySchema : TSchema>
