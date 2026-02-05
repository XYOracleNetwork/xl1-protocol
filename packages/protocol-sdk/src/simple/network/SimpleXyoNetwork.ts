import { isUndefined } from '@xylabs/sdk-js'
import type {
  GatewayName,
  NetworkStatus, XyoNetwork,
} from '@xyo-network/xl1-protocol'
import { isNetworkStatus } from '@xyo-network/xl1-protocol'
import axios from 'axios'

import {
  errorStatus, StatusNetworks, unknownStatus,
} from './lib/index.ts'

export class SimpleXyoNetwork implements XyoNetwork {
  protected readonly _networkId: GatewayName

  constructor(networkId: GatewayName) {
    this._networkId = networkId
  }

  async status(): Promise<NetworkStatus> {
    const statusNetwork = StatusNetworks[this._networkId]
    if (isUndefined(statusNetwork)) {
      throw new Error(`Unknown status network ID: ${this._networkId}`)
    }

    return await this.makeRequest(statusNetwork.statusUrl)
  }

  private async makeRequest(url: string): Promise<NetworkStatus> {
    try {
      const response = await axios.get(url)
      if (isNetworkStatus(response.data)) {
        return response.data
      } else {
        if (response.status === 200) {
          console.error('Unknown network status response:', response.data)

          return unknownStatus
        }
        return errorStatus
      }
    } catch (error) {
      console.error('Error fetching network status:', error)
      return errorStatus
    }
  }
}
