import {
  beforeEach, describe, expect, it,
} from 'vitest'

import type { PermissionRequest } from '../../../model/index.ts'
import { SimpleXyoPermissions } from '../SimpleXyoPermissions.ts'
import { MemoryPermissionsStore } from '../store/index.ts'

describe('MemoryXyoPermissions', () => {
  const invoker = 'https://example.com'
  const parentCapability = 'xyoViewer_chainId'
  let memoryPermissions: SimpleXyoPermissions

  // Helper to build PermissionRequest
  const buildPermissionRequest = (cap: string, caveats: Record<string, unknown> = {}) =>
    ({ [cap]: caveats }) as PermissionRequest

  beforeEach(() => {
    memoryPermissions = new SimpleXyoPermissions(new MemoryPermissionsStore(invoker))
  })

  it('returns an empty list initially', async () => {
    const permissions = await memoryPermissions.getPermissions()
    expect(permissions).toEqual([])
  })

  it('adds and retrieves a permission', async () => {
    const req = buildPermissionRequest(parentCapability)
    const result = await memoryPermissions.requestPermissions([req])
    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBe(1)
    expect(result[0].parentCapability).toBe(parentCapability)
    expect(typeof result[0].date).toBe('number')

    const permissions = await memoryPermissions.getPermissions()
    expect(permissions.length).toBe(1)
    expect(permissions[0].parentCapability).toBe(parentCapability)
    expect(permissions[0].invoker).toBe(invoker)
    expect(typeof permissions[0].date).toBe('number')
  })

  it('replaces an existing permission with the same key', async () => {
    const req = buildPermissionRequest(parentCapability)
    await memoryPermissions.requestPermissions([req])
    const originalDate = (await memoryPermissions.getPermissions())[0].date

    await new Promise(r => setTimeout(r, 5)) // ensure timestamp difference
    await memoryPermissions.requestPermissions([req])
    const updatedDate = (await memoryPermissions.getPermissions())[0].date

    expect(updatedDate).toBeGreaterThan(originalDate!)
  })

  it('revokes a previously granted permission', async () => {
    const req = buildPermissionRequest(parentCapability)
    await memoryPermissions.requestPermissions([req])
    expect((await memoryPermissions.getPermissions()).length).toBe(1)

    const result = await memoryPermissions.revokePermissions(req)
    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBe(1)
    expect(result[0].parentCapability).toBe(parentCapability)

    const permissions = await memoryPermissions.getPermissions()
    expect(permissions).toEqual([])
  })

  it('revoking a non-existent permission does nothing and returns empty array', async () => {
    const req = buildPermissionRequest(parentCapability)
    const result = await memoryPermissions.revokePermissions(req)
    expect(result).toEqual([])
    expect(await memoryPermissions.getPermissions()).toEqual([])
  })

  it('can handle multiple permissions from different invokers', async () => {
    const memoryPermissionsA = new SimpleXyoPermissions(new MemoryPermissionsStore('https://a.com'))
    const memoryPermissionsB = new SimpleXyoPermissions(new MemoryPermissionsStore('https://b.com'))
    const reqA1 = buildPermissionRequest('xyo_1')
    const reqA2 = buildPermissionRequest('xyo_3')
    const reqB = buildPermissionRequest('xyo_2')

    await memoryPermissionsA.requestPermissions([reqA1, reqA2])
    await memoryPermissionsB.requestPermissions([reqB])

    const resultsA = await memoryPermissionsA.getPermissions()
    const resultsB = await memoryPermissionsB.getPermissions()

    expect(resultsA.length).toBe(2)
    expect(resultsB.length).toBe(1)
    expect(resultsA.map(p => p.parentCapability).toSorted((a, b) => a.localeCompare(b))).toEqual(['xyo_1', 'xyo_3'])
    expect(resultsB[0].parentCapability).toBe('xyo_2')
  })
})
