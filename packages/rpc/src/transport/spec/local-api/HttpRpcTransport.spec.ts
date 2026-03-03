import {
  describe, expect, it,
} from 'vitest'

import { XyoViewerRpcSchemas } from '../../../index-node.ts'
import { HttpRpcTransport } from '../../HttpRpcTransport.ts'

describe('HttpRpcTransport', () => {
  it('should send a request and receive a response [sequence]', async () => {
    const sut = new HttpRpcTransport('http://localhost:8080/rpc', XyoViewerRpcSchemas, true)
    const result = await sut.sendRequest('xyoViewer_currentBlock')
    expect(result).toBeDefined()
  })
})
