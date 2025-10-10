import type {
  Address, Hash, Hex,
} from '@xylabs/hex'

export type ChainId = Address

/** @deprecated use ChainId instead */
export type Chain = ChainId | Hex

export type CompletedStep = [
  /* Hash of the block whose previous hash is the last item in the step */
  Hash,
  /* Step number [index into StepSizes] */
  number,
]
