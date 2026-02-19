import type { WithHashMeta } from '@xyo-network/sdk-js'
import type { AllowedBlockPayload, HydratedTransactionWithHashMeta } from '@xyo-network/xl1-protocol'
import { isAllowedBlockPayload } from '@xyo-network/xl1-protocol'

const ELEVATE_OPCODE = 'elevate'

export function elevatedPayloads([tx, payloads]: HydratedTransactionWithHashMeta) {
  const opCodes = (tx.script ?? []).filter(operation => operation.startsWith(`${ELEVATE_OPCODE}|`))
  const elevatedPayloads: WithHashMeta<AllowedBlockPayload>[] = []
  for (const opCode of opCodes) {
    const [code, hash] = opCode.split('|')
    if (code === ELEVATE_OPCODE) {
      const elevatedPayload = payloads.find(payload => payload._hash === hash)
      if (isAllowedBlockPayload(elevatedPayload)) {
        elevatedPayloads.push(elevatedPayload)
      }
    }
  }
  if (opCodes.length === elevatedPayloads.length) {
    return elevatedPayloads
  }
  throw new Error('Not all elevated payloads could be found in the transaction payloads')
}
