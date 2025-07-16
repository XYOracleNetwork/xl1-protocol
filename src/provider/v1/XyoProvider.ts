import type { Address } from '@xylabs/hex'
import type { Signed } from '@xyo-network/boundwitness-model'
import type { Payload } from '@xyo-network/payload-model'

import type { AllowedBlockPayload } from '../../block/index.ts'
import type { TransactionBoundWitness, TransactionFeesBigInt } from '../../transaction/index.ts'
import type { XyoDataLakeProvider } from './XyoDataLake.ts'
import type { XyoNetwork } from './XyoNetwork.ts'
import type { XyoRunner } from './XyoRunner.ts'
import type { XyoSigner } from './XyoSigner.ts'
import type { XyoViewer } from './XyoViewer.ts'
// eslint-disable-next-line sonarjs/deprecation
import type { XyoWallet } from './XyoWallet.ts'

export interface XyoProviderDeprecated {
  /** @deprecated  - use host.submit instead */
  send?: (
    elevatedPayloads: AllowedBlockPayload[],
    additionalPayloads: Payload[],
    chain?: Address,
    nbf?: number,
    exp?: number,
    from?: Address,
    fees?: TransactionFeesBigInt,
  ) => Promise<Signed<TransactionBoundWitness>>
  /** @deprecated  - use host instead */
  // eslint-disable-next-line sonarjs/deprecation
  wallet?: XyoWallet
}

export interface XyoProvider extends XyoProviderDeprecated {
  network?: XyoNetwork
  runner?: XyoRunner
  signer?: XyoSigner
  storage?: XyoDataLakeProvider
  viewer?: XyoViewer
}
