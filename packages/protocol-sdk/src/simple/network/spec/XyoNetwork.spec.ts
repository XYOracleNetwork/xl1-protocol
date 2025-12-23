import type { NetworkId } from '@xyo-network/xl1-protocol'
import { NetworkStatusSchema } from '@xyo-network/xl1-protocol'
import axios from 'axios'
import type { Mocked } from 'vitest'
import {
  beforeEach, describe, expect, it, vitest,
} from 'vitest'

import {
  errorStatus, StatusNetworks, unknownStatus,
} from '../lib/index.ts'
import { SimpleXyoNetwork } from '../SimpleXyoNetwork.ts'

vitest.mock('axios')
const mockedAxios = axios as Mocked<typeof axios>

describe('SimpleXyoNetwork', () => {
  const mockNetworkStatus = {
    description: 'Mock Network Status',
    schema: NetworkStatusSchema,
    state: 'active',
  }

  const networks = Object.values(StatusNetworks)

  beforeEach(() => {
    vitest.clearAllMocks()
  })

  for (const { id, statusUrl } of networks) {
    it(`should fetch the ${id} status successfully`, async () => {
      mockedAxios.get.mockResolvedValueOnce({ data: mockNetworkStatus })

      const network = new SimpleXyoNetwork(id)
      const status = await network.status()

      expect(mockedAxios.get).toHaveBeenCalledWith(statusUrl)
      expect(status).toEqual(mockNetworkStatus)
    })

    it(`should return unknownStatus for invalid response data on ${id}`, async () => {
      mockedAxios.get.mockResolvedValueOnce({ data: { invalid: 'data' }, status: 200 })

      const network = new SimpleXyoNetwork(id)
      const status = await network.status()

      expect(mockedAxios.get).toHaveBeenCalledWith(statusUrl)
      expect(status).toEqual(unknownStatus)
    })

    it(`should return errorStatus for non-200 response on ${id}`, async () => {
      mockedAxios.get.mockResolvedValueOnce({ data: {}, status: 500 })

      const network = new SimpleXyoNetwork(id)
      const status = await network.status()

      expect(mockedAxios.get).toHaveBeenCalledWith(statusUrl)
      expect(status).toEqual(errorStatus)
    })

    it(`should return errorStatus for network errors on ${id}`, async () => {
      mockedAxios.get.mockRejectedValueOnce(new Error('Network error'))

      const network = new SimpleXyoNetwork(id)
      const status = await network.status()

      expect(mockedAxios.get).toHaveBeenCalledWith(statusUrl)
      expect(status).toEqual(errorStatus)
    })
  }

  it('should throw an error for unknown network ID', async () => {
    const network = new SimpleXyoNetwork('invalid' as unknown as NetworkId)

    await expect(network.status()).rejects.toThrow('Unknown status network ID: invalid')
  })
})
