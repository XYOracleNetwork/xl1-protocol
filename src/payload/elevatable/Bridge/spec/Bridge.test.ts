import { toAddress, toHex } from '@xylabs/hex'
import {
  describe, expect, it,
} from 'vitest'

import type { Chain } from '../../../../model.ts'
import { AttoXL1ConvertFactor } from '../../../../xl1/index.ts'
import type { BridgeIntentFields } from '../BridgeIntent.ts'
import type { BridgeObservationFields } from '../BridgeObservation.ts'

describe('Bridge', () => {
  const srcAmount = toHex(18n * AttoXL1ConvertFactor.xl1) // 18 XL1 in AttoXL1
  const destAmount = srcAmount // 1:1 for test

  const xl1ChainId: Chain = toHex('dd381fbb392c85160d8b0453e446757b12384046')
  const ethChainId = toHex('0x01')

  const xl1Sender = toAddress('1111111111111111111111111111111111111111')
  const ethReceiver = toAddress('0x2222222222222222222222222222222222222222')

  const bridgeableTokenContract = toHex('0x3333333333333333333333333333333333333333')

  const nonce = 'd5eeff33-d5bc-4aca-9ecb-3406c02a5dc4'

  const ethTxConfirmationHash = toHex('0x4444444444444444444444444444444444444444444444444444444444444444') // Some Eth tx hash

  describe('Bridge to ETH', () => {
    it('BridgeIntent', () => {
      const intent: BridgeIntentFields = {
        dest: ethChainId, // To Ethereum
        destAddress: ethReceiver,
        destAmount,
        destToken: bridgeableTokenContract,
        nonce,
        src: xl1ChainId, // From XL1
        srcAddress: xl1Sender, // From XL1 sender
        srcAmount,
        srcToken: xl1ChainId, // In XL1
      }
      expect(intent).toMatchSnapshot()
    })
    it('BridgeObservation', () => {
      const observation: BridgeObservationFields = {
        dest: ethChainId, // To Ethereum
        destAddress: ethReceiver,
        destAmount,
        destToken: bridgeableTokenContract,
        destConfirmation: ethTxConfirmationHash,
        src: xl1ChainId, // From XL1
        srcAddress: xl1Sender, // From XL1 sender
        srcAmount,
        srcToken: xl1ChainId, // In XL1
      }
      expect(observation).toMatchSnapshot()
    })
  })
})
