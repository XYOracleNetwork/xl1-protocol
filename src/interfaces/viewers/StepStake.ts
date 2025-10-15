import type { Address } from '@xylabs/hex'
import type { Promisable } from '@xylabs/promise'

import type { StepIdentity } from '../../model/index.ts'

export interface StepStakeViewInterface {
  // this is the prorated stake for all addresses in the step
  stepStake: (step: StepIdentity) => Promisable<Record<Address, bigint>>

  // this is the prorated stake for a specific address in the step
  stepStakeForAddress: (address: Address, step: StepIdentity) => Promisable<bigint>
}

/* Prorated stake is the amount of stake that is allocated to a specific step
   based on the total stake and the number of steps. This is used to ensure
   that the stake is distributed fairly among all steps.

   The simplest way to calculate it is to enumerate every XL1 block in the step add the current stake at that point to a counter.
   For example, if an Address had a stake of 100 for the entire time, then the prorated stake would be 100 * number of blocks in the step.
*/
