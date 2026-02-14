import { toAddress, toHex } from '@xylabs/sdk-js'
import {
  describe, expect, it,
} from 'vitest'

import type { ChainId } from '../../../../chain/index.ts'
import { AttoXL1ConvertFactor } from '../../../../xl1/index.ts'
import type { BridgeDestinationObservationFields } from '../BridgeDestinationObservation.ts'
import type { BridgeIntentFields } from '../BridgeIntent.ts'
import type { BridgeSourceObservationFields } from '../BridgeSourceObservation.ts'

describe('Bridge', () => {
  const srcAmount = toHex(100n * AttoXL1ConvertFactor.xl1) // 100 XL1 in AttoXL1
  const destAmount = srcAmount // 1:1 for test

  const xl1ChainId: ChainId = toHex('dd381fbb392c85160d8b0453e446757b12384046')
  const ethChainId = toHex('0x1')

  const xl1Address = toAddress('1111111111111111111111111111111111111111')
  const ethAddress = toAddress('0x2222222222222222222222222222222222222222')

  const bridgeableTokenContract = toHex('0x3333333333333333333333333333333333333333')

  const nonce = 'd5eeff33-d5bc-4aca-9ecb-3406c02a5dc4'

  const xl1TxHash = toHex('0x4444444444444444444444444444444444444444444444444444444444444444') // Some XL1 tx hash
  const ethTxHash = toHex('0x5555555555555555555555555555555555555555555555555555555555555555') // Some Eth tx hash

  describe('XL1 to ETH', () => {
    it('Sender issues BridgeIntent', () => {
      const intent: BridgeIntentFields = {
        // Source
        src: xl1ChainId, // From XL1
        srcAddress: xl1Address, // From XL1 sender
        srcAmount,
        srcToken: xl1ChainId, // In XL1

        // Destination
        dest: ethChainId, // To Ethereum
        destAddress: ethAddress,
        destAmount,
        destToken: bridgeableTokenContract,

        // Details
        nonce,
      }
      expect(intent).toMatchSnapshot()
    })
    it('BridgeObservation (XL1 Side)', () => {
      const observation: BridgeSourceObservationFields = {
        // Source
        src: xl1ChainId, // From XL1
        srcAddress: xl1Address, // From XL1 sender
        srcAmount,
        srcToken: xl1ChainId, // In XL1

        // Destination
        dest: ethChainId, // To Ethereum
        destAddress: ethAddress,
        destAmount,
        destToken: bridgeableTokenContract,

        // Observation
        srcConfirmation: xl1TxHash,
      }
      expect(observation).toMatchSnapshot()
    })
    it('BridgeObservation (ETH Side)', () => {
      const observation: BridgeDestinationObservationFields = {
        // Source
        src: xl1ChainId, // From XL1
        srcAddress: xl1Address, // From XL1 sender
        srcAmount,
        srcToken: xl1ChainId, // In XL1

        // Destination
        dest: ethChainId, // To Ethereum
        destAddress: ethAddress,
        destAmount,
        destToken: bridgeableTokenContract,

        // Observation
        destConfirmation: ethTxHash,
      }
      expect(observation).toMatchSnapshot()
    })
  })
  describe('ETH to XL1', () => {
    it('BridgeObservation (ETH Side)', () => {
      const observation: BridgeSourceObservationFields = {
        // Source
        src: ethChainId, // From Ethereum
        srcToken: bridgeableTokenContract, // In Ethereum
        srcAddress: ethAddress, // From Ethereum sender
        srcAmount,

        // Destination
        dest: xl1ChainId, // To XL1
        destToken: xl1ChainId, // In XL1
        destAddress: xl1Address, // To XL1 Address
        destAmount,

        // Observation
        srcConfirmation: ethTxHash,
      }
      expect(observation).toMatchSnapshot()
    })
    it('BridgeObservation (XL1 Side)', () => {
      const observation: BridgeDestinationObservationFields = {
        // Source
        src: ethChainId, // From Ethereum
        srcToken: bridgeableTokenContract, // In Ethereum
        srcAddress: ethAddress, // From Ethereum sender
        srcAmount,

        // Destination
        dest: xl1ChainId, // To XL1
        destToken: xl1ChainId, // In XL1
        destAddress: xl1Address, // To XL1 Address
        destAmount,

        // Observation
        destConfirmation: xl1TxHash,
      }
      expect(observation).toMatchSnapshot()
    })
  })
})
