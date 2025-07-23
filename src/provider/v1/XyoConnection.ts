import type { Address } from '@xylabs/hex'
import type { Signed } from '@xyo-network/boundwitness-model'
import type { Payload } from '@xyo-network/payload-model'

import type { AllowedBlockPayload } from '../../block/index.ts'
import type { TransactionBoundWitness, TransactionFeesBigInt } from '../../transaction/index.ts'
import type { TransactionSubmitter } from './TransactionSubmitter.ts'
import type { XyoDataLakeProvider, XyoDataLakeViewer } from './XyoDataLake.ts'
import type { XyoNetwork } from './XyoNetwork.ts'
import type { XyoRunner } from './XyoRunner.ts'
import type { XyoSigner } from './XyoSigner.ts'
import type { XyoViewer } from './XyoViewer.ts'
// eslint-disable-next-line sonarjs/deprecation
import type { XyoWallet } from './XyoWallet.ts'

export interface XyoConnectionConfig {
  name: string
}

export interface XyoRpcConnectionConfig extends XyoConnectionConfig {
  dataLakeEndpoint: string
  networkEndpoint: string
}

export interface XyoConnectionProviderDeprecated {
  /** @deprecated  - use submitTransaction instead */
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

export interface XyoConnectionProvider extends Partial<TransactionSubmitter>, XyoConnectionProviderDeprecated {
  network?: XyoNetwork
  runner?: XyoRunner
  signer?: XyoSigner
  storage?: XyoDataLakeProvider | XyoDataLakeViewer
  viewer?: XyoViewer
}

/** @deprecated use XyoConnectionProvider */
export interface XyoProvider extends XyoConnectionProvider {}
