import type { Address } from '@xylabs/hex'
import type { Signed } from '@xyo-network/boundwitness-model'
import type { Payload } from '@xyo-network/payload-model'

import type { AllowedBlockPayload } from '#block'
import type { TransactionBoundWitness, TransactionFeesBigInt } from '#transaction'

import type { XyoDataLakeProvider } from './XyoDataLake.ts'
import type { XyoNetwork } from './XyoNetwork.ts'
import type { XyoRunner } from './XyoRunner.ts'
import type { XyoSigner } from './XyoSigner.ts'
import type { XyoViewer } from './XyoViewer.ts'
import type { XyoWallet } from './XyoWallet.ts'

export interface XyoProvider {
  network?: XyoNetwork
  runner?: XyoRunner
  send?: (
    elevatedPayloads: AllowedBlockPayload[],
    additionalPayloads: Payload[],
    chain?: Address,
    nbf?: number,
    exp?: number,
    from?: Address,
    fees?: TransactionFeesBigInt,
  ) => Promise<Signed<TransactionBoundWitness>>
  signer?: XyoSigner
  storage?: XyoDataLakeProvider
  viewer?: XyoViewer
  wallet?: XyoWallet
}
