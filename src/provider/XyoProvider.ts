import type { Address } from '@xylabs/hex'
import type { Signed } from '@xyo-network/boundwitness-model'
import type { Payload } from '@xyo-network/payload-model'

import type {
  AllowedBlockPayload, TransactionBoundWitness, TransactionFeesBigInt,
} from '../protocol/index.ts'
import type { XyoRunner } from './XyoRunner.ts'
import type { XyoSigner } from './XyoSigner.ts'
import type { XyoStorage } from './XyoStorage.ts'
import type { XyoViewer } from './XyoViewer.ts'
import type { XyoWallet } from './XyoWallet.ts'

export interface XyoProvider {
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
  storage?: XyoStorage
  viewer?: XyoViewer
  wallet?: XyoWallet
}
