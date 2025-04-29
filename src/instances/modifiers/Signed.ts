import type { SignatureInstance } from '../Signature.ts'

export interface SignedInstance {
  signatureCount: number
  signatures: SignatureInstance[]

  signature(index: number): SignatureInstance | undefined
}
