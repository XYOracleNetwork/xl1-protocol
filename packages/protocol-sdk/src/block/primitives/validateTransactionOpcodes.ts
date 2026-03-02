import {
  assertEx, isHash, toSafeJsonString,
} from '@xylabs/sdk-js'
import {
  type Payload, PayloadBuilder, type WithStorageMeta,
} from '@xyo-network/sdk-js'
import type { HydratedTransaction } from '@xyo-network/xl1-protocol'
import { isExecutable } from '@xyo-network/xl1-protocol'

export async function validateTransactionsOpcodes(txs: HydratedTransaction[]) {
  const txElevatedPayloads: WithStorageMeta<Payload>[] = []
  for (const [txBw, txPayloads] of txs) {
    if (isExecutable(txBw)) {
      const operations = txBw.script.map(op => op.split('|'))
      for (let [opCode, ...args] of operations) {
        switch (opCode) {
          case 'elevate': {
            const [hash, ...rest] = args
            const txPayloadsWithStorageMeta = await PayloadBuilder.addStorageMeta(txPayloads)
            assertEx(rest.length === 0, () => `Invalid elevate operation ${opCode} ${args} - Too many Arguments`)
            if (isHash(hash)) {
              assertEx(
                txBw.payload_hashes.includes(hash),
                () => `Invalid elevate operation ${opCode} ${args} - Hash not in payload hashes => ${toSafeJsonString(txBw, 20)}`,
              )
              const txPayload = assertEx(
                txPayloadsWithStorageMeta.find(p => p._hash === hash),
                () => `Invalid elevate operation ${opCode} ${args} - Payload not found`,
              )
              txElevatedPayloads.push(txPayload)
            } else {
              throw new Error(`Invalid elevate operation ${opCode} ${args} - Invalid hash`)
            }
            break
          }
          default: {
            throw new Error(`Invalid opCode ${opCode}`)
          }
        }
      }
    }
  }
  return txElevatedPayloads
}
