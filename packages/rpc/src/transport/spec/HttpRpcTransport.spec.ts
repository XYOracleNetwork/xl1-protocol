import {
  describe, expect, it,
} from 'vitest'

import { XyoViewerRpcSchemas } from '../../types/index.ts'
import { HttpRpcTransport } from '../HttpRpcTransport.ts'

describe.runIf(false)('HttpRpcTransport', () => {
  it('should send a request and receive a response', async () => {
    const sut = new HttpRpcTransport('http://localhost:8080', XyoViewerRpcSchemas, true)
    const result = await sut.sendRequest('xyoViewer_currentBlock')
    expect(result).toBeDefined()
  })
})
