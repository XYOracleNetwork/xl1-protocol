import type { EmptyObject, Hash } from '@xylabs/sdk-js'
import type { Payload, Schema } from '@xyo-network/payload-model'

export const StepSummarySchema: Schema = 'network.xyo.step.summary'
export type StepSummarySchema = typeof StepSummarySchema

export interface StepSummaryFields {
  hash: Hash // the stepHash - the hash of the last block in the step frame
  stepSize: number // the stepSize in blocks
}

export type StepSummary<TAdditionalFields extends EmptyObject | void = void,
  TSchema extends Schema | void = void> = Payload<TAdditionalFields extends void ? StepSummaryFields : TAdditionalFields & StepSummaryFields,
  TSchema extends void ? StepSummarySchema : TSchema>
