import type { Address, Hex } from '@xylabs/hex'
import type { Signed } from '@xyo-network/boundwitness-model'
import type { Payload } from '@xyo-network/payload-model'

import type { AllowedBlockPayload } from '../block/index.ts'
import type { TransactionBoundWitness, TransactionFeesBigInt } from '../transaction/index.ts'
// eslint-disable-next-line sonarjs/deprecation
import type { TransactionSubmitter } from './TransactionSubmitter.ts'
import type { XyoDataLake, XyoDataLakeViewer } from './XyoDataLake.ts'
import type { XyoNetwork } from './XyoNetwork.ts'
import type { XyoRunner } from './XyoRunner.ts'
import type { XyoSigner } from './XyoSigner.ts'
import type { XyoViewer } from './XyoViewer.ts'
// eslint-disable-next-line sonarjs/deprecation
import type { XyoWallet } from './XyoWallet.ts'

/** @deprecated use XyoConnectionProvider instead */
// eslint-disable-next-line sonarjs/deprecation
export interface XyoConnectionProviderDeprecated extends TransactionSubmitter {

  /** @deprecated  - use from gateway instead */
  signer: XyoSigner

  /** @deprecated  - use host instead */
  // eslint-disable-next-line sonarjs/deprecation
  wallet: XyoWallet

  /** @deprecated  - use submitTransaction instead */
  send(
    elevatedPayloads: AllowedBlockPayload[],
    additionalPayloads: Payload[],
    chain?: Hex,
    nbf?: number,
    exp?: number,
    from?: Address,
    fees?: TransactionFeesBigInt,
  ): Promise<Signed<TransactionBoundWitness>>
}

// eslint-disable-next-line sonarjs/deprecation
export interface XyoConnection extends Partial<XyoConnectionProviderDeprecated> {
  network?: XyoNetwork
  runner?: XyoRunner
  storage?: XyoDataLake | XyoDataLakeViewer
  viewer?: XyoViewer
}

/** @deprecated use XyoConnectionProvider */
export interface XyoConnectionProvider extends XyoConnection {}

/** @deprecated use XyoConnectionProvider */
export interface XyoProvider extends XyoConnection {}
