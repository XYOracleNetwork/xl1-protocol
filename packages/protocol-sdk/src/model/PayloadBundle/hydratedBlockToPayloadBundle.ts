import type { Hash } from '@xylabs/sdk-js'
import { type PayloadBundle, PayloadBundleSchema } from '@xyo-network/sdk-js'
import { PayloadBuilder } from '@xyo-network/sdk-js'
import type { SignedHydratedBlockWithHashMeta } from '@xyo-network/xl1-protocol'

import { flattenHydratedBlock } from '../../block/index.ts'

export const hydratedBlockToPayloadBundle = (transaction: SignedHydratedBlockWithHashMeta): PayloadBundle => {
  const root = transaction[0]._hash
  return bundle(root, transaction)
}

const bundle = (root: Hash, transaction: SignedHydratedBlockWithHashMeta) => {
  const payloads = flattenHydratedBlock(transaction).flatMap(p => PayloadBuilder.omitStorageMeta(p))
  return new PayloadBuilder<PayloadBundle>({ schema: PayloadBundleSchema })
    .fields({ payloads, root })
    .build()
}
