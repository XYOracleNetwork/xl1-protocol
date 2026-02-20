import { type Hash, isNull } from '@xylabs/sdk-js'
import type {
  DataLakeViewer, SignedHydratedBlockWithHashMeta, SignedHydratedTransaction, XL1BlockNumber, XyoViewer,
} from '@xyo-network/xl1-protocol'
import { addDataLakePayloadsToBlock, addDataLakePayloadsToTransaction } from '@xyo-network/xl1-protocol'

import type { JsonRpcXyoViewer } from './JsonRpcXyoViewer.ts'

// Proxy is probably a better way to augment the viewer, but it won't work as a creatable provider.
// The viewer type needs to be a Creatable Provider that has the static factory methods, but the proxy
// needs to be an instance of the viewer type.
export function withDataLakeViewer(viewer: JsonRpcXyoViewer, dataLakeViewer: DataLakeViewer): XyoViewer {
  return new Proxy(viewer, {
    get: (target, prop, receiver) => {
      if (prop === 'blocksByHash') {
        return async (hash: Hash, limit?: number): Promise<SignedHydratedBlockWithHashMeta[]> => {
          const blocks = await target.blocksByHash(hash, limit)
          return await Promise.all(blocks.map(block => addDataLakePayloadsToBlock(block, dataLakeViewer)))
        }
      }
      if (prop === 'blocksByNumber') {
        return async (blockNumber: XL1BlockNumber, limit?: number): Promise<SignedHydratedBlockWithHashMeta[]> => {
          const blocks = await target.blocksByNumber(blockNumber, limit)
          return await Promise.all(blocks.map(block => addDataLakePayloadsToBlock(block, dataLakeViewer)))
        }
      }
      if (prop === 'transactionByHash') {
        return async (hash: Hash): Promise<SignedHydratedTransaction | null> => {
          const transaction = await target.transactionByHash(hash)
          return isNull(transaction) ? transaction : await addDataLakePayloadsToTransaction(transaction, dataLakeViewer)
        }
      }
      return Reflect.get(target, prop, receiver)
    },
  })
}
