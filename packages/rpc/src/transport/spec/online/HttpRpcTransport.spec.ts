import {
  describe, expect, it,
} from 'vitest'

import { XyoViewerRpcSchemas } from '../../../types/index.ts'
import { HttpRpcTransport } from '../../HttpRpcTransport.ts'

describe('HttpRpcTransport', () => {
  it('should send a request and receive a response [sequence]', async () => {
    const sut = new HttpRpcTransport('https://beta.api.chain.xyo.network/rpc', XyoViewerRpcSchemas, true)
    const result = await sut.sendRequest('xyoViewer_currentBlock')
    expect(result).toBeDefined()
  })
  it('should send a request and receive a response [main-net]', async () => {
    const sut = new HttpRpcTransport('https://api.chain.xyo.network/rpc', XyoViewerRpcSchemas, true)
    const result = await sut.sendRequest('xyoViewer_currentBlock')
    expect(result).toBeDefined()
  })
})
