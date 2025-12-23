import { asXL1BlockNumber } from '@xyo-network/xl1-protocol'
import {
  describe, expect, it,
} from 'vitest'

import { completedStepRewardAddress } from '../completedStepRewardAddress.ts'

describe('completedStepRewardAddress', () => {
  it('should get index [single entry - step size]', () => {
    const address = completedStepRewardAddress({ block: asXL1BlockNumber(2311, true), step: 2311 })
    expect (address).toBe('93d321ab2e01ce14bbe601d3c49b330d250c5ab1')
  })

  it('should get index [single entry - step ordinal]', () => {
    const address = completedStepRewardAddress({ block: asXL1BlockNumber(2311, true), step: 3 })
    expect (address).toBe('93d321ab2e01ce14bbe601d3c49b330d250c5ab1')
  })

  it('should get index [single entry - step size]', () => {
    const address = completedStepRewardAddress({ block: asXL1BlockNumber(2311 * 2, true), step: 2311 })
    expect (address).toBe('04c602f975a00794efd01e5fe07266cc1945f321')
  })

  it('should get index [single entry - step ordinal]', () => {
    const address = completedStepRewardAddress({ block: asXL1BlockNumber(2311 * 2, true), step: 3 })
    expect (address).toBe('04c602f975a00794efd01e5fe07266cc1945f321')
  })
})
