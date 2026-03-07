import {
  asSchema, type BoundWitness, type Payload, type WithHashMeta,
} from '@xyo-network/sdk-js'
import type { HydratedBoundWitnessWithHashMeta } from '@xyo-network/xl1-protocol'
import {
  describe, expect, it,
} from 'vitest'

import { BoundWitnessReferencesValidator } from '../BoundWitnessReferences.ts'

const validHash1 = 'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2'
const validHash2 = 'b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2'

function makeBw(payload_hashes: string[], payload_schemas: string[]): BoundWitness & WithHashMeta<BoundWitness> {
  return {
    _dataHash: validHash2,
    _hash: validHash1,
    _sequence: 'a1b2c3d4',
    $signatures: [],
    addresses: [],
    payload_hashes,
    payload_schemas,
    previous_hashes: [],
    schema: 'network.xyo.boundwitness',
  } as unknown as BoundWitness & WithHashMeta<BoundWitness>
}

function makePayload(schema: string, _hash: string, _dataHash?: string): WithHashMeta<Payload> {
  return {
    _dataHash, _hash, schema,
  } as WithHashMeta<Payload>
}

describe('BoundWitnessReferencesValidator', () => {
  describe('with valid payloads', () => {
    it('should return no errors when all payloads match', () => {
      const payload = makePayload('network.xyo.test', validHash1)
      const bw = makeBw([validHash1], ['network.xyo.test'])
      const input: HydratedBoundWitnessWithHashMeta = [bw, [payload]]
      const validator = BoundWitnessReferencesValidator()
      const errors = validator(input)
      expect(errors).toEqual([])
    })

    it('should return no errors with allowed schemas restriction when schema is in allowed list', () => {
      const payload = makePayload('network.xyo.test', validHash1)
      const bw = makeBw([validHash1], ['network.xyo.test'])
      const input: HydratedBoundWitnessWithHashMeta = [bw, [payload]]
      const validator = BoundWitnessReferencesValidator([asSchema('network.xyo.test', true)])
      const errors = validator(input)
      expect(errors).toEqual([])
    })
  })

  describe('with mismatched schema', () => {
    it('should return a mismatched schema error', async () => {
      const payload = makePayload('network.xyo.actual', validHash1)
      const bw = makeBw([validHash1], ['network.xyo.declared'])
      const input: HydratedBoundWitnessWithHashMeta = [bw, [payload]]
      const validator = BoundWitnessReferencesValidator()
      const errors = await validator(input)
      expect(errors.length).toBeGreaterThan(0)
      expect(errors.some(e => e.message === 'mismatched schema')).toBe(true)
    })
  })

  describe('with disallowed schema', () => {
    it('should return a disallowed schema error when schema is not in allowed list', async () => {
      const payload = makePayload('network.xyo.test', validHash1)
      const bw = makeBw([validHash1], ['network.xyo.test'])
      const input: HydratedBoundWitnessWithHashMeta = [bw, [payload]]
      const validator = BoundWitnessReferencesValidator([asSchema('network.xyo.other', true)])
      const errors = await validator(input)
      expect(errors.length).toBeGreaterThan(0)
      expect(errors.some(e => e.message.includes('disallowed schema'))).toBe(true)
    })
  })

  describe('with invalid payload (not isAnyPayload)', () => {
    it('should return an invalid payload error', async () => {
      // A payload missing schema fails isAnyPayload
      const badPayload = { _hash: validHash1 } as unknown as WithHashMeta<Payload>
      const bw = makeBw([validHash1], ['network.xyo.test'])
      const input: HydratedBoundWitnessWithHashMeta = [bw, [badPayload]]
      const validator = BoundWitnessReferencesValidator()
      const errors = await validator(input)
      expect(errors.length).toBeGreaterThan(0)
      expect(errors.some(e => e.message === 'invalid payload')).toBe(true)
    })
  })

  describe('with payload length mismatch', () => {
    it('should return unable to locate payloads error when getPayloadsFromPayloadArray returns more than payload_hashes.length', async () => {
      // Use a fake payload_hashes whose .map() returns one element but .length is 0
      // so getPayloadsFromPayloadArray returns [undefined] (length 1) while bw.payload_hashes.length is 0
      const fakePayloadHashes = Object.assign(
        [validHash1],
        {
          map: () => [undefined as unknown as WithHashMeta<Payload>],
          length: 0,
        },
      )
      const bw = {
        ...makeBw([], []),
        payload_hashes: fakePayloadHashes as unknown as string[],
      }
      const input = [bw, []] as unknown as HydratedBoundWitnessWithHashMeta
      const validator = BoundWitnessReferencesValidator()
      const errors = await validator(input)
      expect(errors.length).toBeGreaterThan(0)
      expect(errors.some(e => e.message === 'unable to locate payloads')).toBe(true)
    })
  })

  describe('with payload matched by _dataHash (not _hash)', () => {
    it('should handle payload whose _hash differs but _dataHash matches', async () => {
      // payload._hash doesn't match bw.payload_hashes, but _dataHash does
      const payload = {
        schema: 'network.xyo.test', _hash: 'different', _dataHash: validHash1,
      } as unknown as WithHashMeta<Payload>
      const bw = makeBw([validHash1], ['network.xyo.test'])
      const input: HydratedBoundWitnessWithHashMeta = [bw, [payload]]
      const validator = BoundWitnessReferencesValidator()
      const errors = await validator(input)
      // payload is found via _dataHash; _hash index is -1 but _dataHash index is 0
      expect(errors).toEqual([])
    })
  })

  describe('with bw._hash undefined in error conditions', () => {
    it('should use ZERO_HASH when bw._hash is undefined on length mismatch', async () => {
      const fakePayloadHashes = Object.assign(
        [validHash1],
        {
          map: () => [undefined as unknown as WithHashMeta<Payload>],
          length: 0,
        },
      )
      const bw = {
        ...makeBw([], []),
        _hash: undefined as unknown as string,
        payload_hashes: fakePayloadHashes as unknown as string[],
      }
      const input = [bw, []] as unknown as HydratedBoundWitnessWithHashMeta
      const validator = BoundWitnessReferencesValidator()
      const errors = await validator(input)
      expect(errors.some(e => e.message === 'unable to locate payloads')).toBe(true)
    })

    it('should use ZERO_HASH when bw._hash is undefined on schema mismatch', async () => {
      const payload = makePayload('network.xyo.actual', validHash1)
      const bw = { ...makeBw([validHash1], ['network.xyo.declared']), _hash: undefined as unknown as string }
      const input = [bw, [payload]] as unknown as HydratedBoundWitnessWithHashMeta
      const validator = BoundWitnessReferencesValidator()
      const errors = await validator(input)
      expect(errors.some(e => e.message === 'mismatched schema')).toBe(true)
    })

    it('should use ZERO_HASH when bw._hash is undefined on payloadIndex === -1', async () => {
      let getCount = 0
      const shapeshifter = {
        get _hash() {
          return getCount++ < 1 ? validHash1 : validHash2
        },
        _dataHash: undefined,
        schema: 'network.xyo.test',
      } as unknown as WithHashMeta<Payload>
      const bw = { ...makeBw([validHash1], ['network.xyo.test']), _hash: undefined as unknown as string }
      const input = [bw, [shapeshifter]] as unknown as HydratedBoundWitnessWithHashMeta
      const validator = BoundWitnessReferencesValidator()
      const errors = await validator(input)
      expect(errors.some(e => e.message === 'payload hash not found')).toBe(true)
    })

    it('should use ZERO_HASH when bw._hash is undefined on disallowed schema', async () => {
      const payload = makePayload('network.xyo.test', validHash1)
      const bw = { ...makeBw([validHash1], ['network.xyo.test']), _hash: undefined as unknown as string }
      const input = [bw, [payload]] as unknown as HydratedBoundWitnessWithHashMeta
      const validator = BoundWitnessReferencesValidator([asSchema('network.xyo.other', true)])
      const errors = await validator(input)
      expect(errors.some(e => e.message.includes('disallowed schema'))).toBe(true)
    })
  })

  describe('with shapeshifting payload (_hash changes between find and indexOf)', () => {
    it('should return payload hash not found error', async () => {
      // Payload is found during find() because _hash returns 'abc' (matches bw.payload_hashes[0])
      // But during indexOf(), _hash returns 'xyz' (not found) → payloadIndex === -1
      let getCount = 0
      const shapeShifter = {
        get _hash() {
          return getCount++ < 1 ? validHash1 : validHash2
        },
        _dataHash: undefined,
        schema: 'network.xyo.test',
      } as unknown as WithHashMeta<Payload>

      const bw = makeBw([validHash1], ['network.xyo.test'])
      const input: HydratedBoundWitnessWithHashMeta = [bw, [shapeShifter]]
      const validator = BoundWitnessReferencesValidator()
      const errors = await validator(input)
      expect(errors.length).toBeGreaterThan(0)
      expect(errors.some(e => e.message === 'payload hash not found')).toBe(true)
    })
  })

  describe('with catch block triggered', () => {
    it('should return a validation excepted error when bw throws on payload_hashes access', async () => {
      // Throw on payload_hashes (inside try) but allow _hash (in catch handler)
      const throwingBw = new Proxy({} as BoundWitness, {
        get(_target, key) {
          if (key === '_hash') return
          throw new Error('bw access failed')
        },
      })
      const input = [throwingBw, []] as unknown as HydratedBoundWitnessWithHashMeta
      const validator = BoundWitnessReferencesValidator()
      const errors = await validator(input)
      expect(errors.length).toBe(1)
      expect(errors[0].message).toContain('validation excepted')
    })
  })
})
