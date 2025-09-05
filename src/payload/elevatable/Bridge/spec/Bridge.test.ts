import { toHex } from '@xylabs/hex'
import {
  describe, expect, it,
} from 'vitest'

import type { Chain } from '../../../../model.ts'
import { AttoXL1ConvertFactor } from '../../../../xl1/index.ts'
import type { BridgeIntentFields } from '../BridgeIntent.ts'

describe('Bridge', () => {
  const srcAmount = toHex(18n * AttoXL1ConvertFactor.xl1) // 18 XL1 in AttoXL1
  const destAmount = srcAmount // 1:1 for test

  const xl1ChainId: Chain = toHex('dd381fbb392c85160d8b0453e446757b12384046')
  const ethChainId = toHex('0x01')

  const xl1Sender = toHex('0xabc123')
  const ethReceiver = toHex('0xabc123')

  const bridgeableTokenContract = toHex('0xF5d1C979ce9D2CAf07c247771b195A2FBec8a9b4')

  const nonce = 'd5eeff33-d5bc-4aca-9ecb-3406c02a5dc4'

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
})
