import type { Hash } from '@xylabs/sdk-js'
import {
  asSchema, type Payload, type WithHashMeta,
} from '@xyo-network/sdk-js'
import {
  describe, expect, it,
} from 'vitest'

import { allHashesPresent } from '../allHashesPresent.ts'

const makePayload = (hash: string): WithHashMeta<Payload> => ({
  schema: asSchema('test.payload', true),
  _hash: hash as Hash,
  _dataHash: hash as Hash,
})

describe('allHashesPresent', () => {
  it('should return true when all hashes are present', () => {
    const hashes = ['abc123', 'def456'] as Hash[]
    const payloads = [makePayload('abc123'), makePayload('def456')]
    expect(allHashesPresent(hashes, payloads)).toBe(true)
  })

  it('should return false when some hashes are missing', () => {
    const hashes = ['abc123', 'missing'] as Hash[]
    const payloads = [makePayload('abc123')]
    expect(allHashesPresent(hashes, payloads)).toBe(false)
  })

  it('should return true for empty hashes list', () => {
    expect(allHashesPresent([], [makePayload('abc123')])).toBe(true)
  })

  it('should return true for empty hashes and empty payloads', () => {
    expect(allHashesPresent([], [])).toBe(true)
  })

  it('should return false for non-empty hashes with empty payloads', () => {
    expect(allHashesPresent(['abc123'] as Hash[], [])).toBe(false)
  })

  it('should handle duplicate hashes in payloads', () => {
    const hashes = ['abc123'] as Hash[]
    const payloads = [makePayload('abc123'), makePayload('abc123')]
    expect(allHashesPresent(hashes, payloads)).toBe(true)
  })
})
