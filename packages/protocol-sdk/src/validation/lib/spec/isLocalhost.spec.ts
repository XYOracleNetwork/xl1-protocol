import {
  describe, expect, it,
} from 'vitest'

import { isLocalhost } from '../isLocalhost.ts'

describe('is.ts type guards', () => {
  describe('isLocalhost', () => {
    it('correctly identifies localhost strings', () => {
      expect(isLocalhost('localhost')).toBe(true)
      expect(isLocalhost('127.0.0.1')).toBe(true)
      expect(isLocalhost('::1')).toBe(true)
      expect(isLocalhost('example.localhost')).toBe(true)

      expect(isLocalhost('example.com')).toBe(false)
      expect(isLocalhost('')).toBe(false)
      expect(isLocalhost('local')).toBe(false)
    })
  })
})
