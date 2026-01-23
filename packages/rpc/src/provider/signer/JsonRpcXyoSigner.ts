import { type XyoSigner, XyoSignerMoniker } from '@xyo-network/xl1-protocol-sdk'

import { JsonRpcXyoSignerMethods } from './JsonRpcXyoSignerMethods.ts'

export class JsonRpcXyoSigner extends JsonRpcXyoSignerMethods implements XyoSigner {
  static readonly defaultMoniker = XyoSignerMoniker
  static readonly dependencies = []
  static readonly monikers = [XyoSignerMoniker]
}
