import { StepSizes } from '@xyo-network/xl1-protocol'
import {
  describe, expect, it,
} from 'vitest'

import { stepTransferIndex } from '../stepTransferIndex.ts'

describe('getStepTransferIndex', () => {
  it('should get index [single entry]', { timeout: 120_000 }, () => {
    const index = stepTransferIndex(StepSizes[3], 3)
    expect (index[0]).toBe(0)
    expect (index[1]).toBe(1)
  })
  it('should get index [double entry]', { timeout: 120_000 }, () => {
    const index3 = stepTransferIndex(StepSizes[3] * StepSizes[4], 3)
    expect (index3[0]).toBe(0)
    expect (index3[1]).toBe(2)

    const index4 = stepTransferIndex(StepSizes[3] * StepSizes[4], 4)
    expect (index4[0]).toBe(1)
    expect (index4[1]).toBe(2)
  })
})
