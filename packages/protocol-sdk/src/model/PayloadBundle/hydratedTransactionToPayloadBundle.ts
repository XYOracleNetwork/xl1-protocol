import type { Hash } from '@xylabs/sdk-js'
import { type PayloadBundle, PayloadBundleSchema } from '@xyo-network/payload-model'
import { PayloadBuilder } from '@xyo-network/sdk-js'
import type { SignedHydratedTransactionWithHashMeta } from '@xyo-network/xl1-protocol'

import { flattenHydratedTransaction } from '../../transaction/index.ts'

export const hydratedTransactionToPayloadBundle = (transaction: SignedHydratedTransactionWithHashMeta): PayloadBundle => {
  const root = transaction[0]._hash
  return bundle(root, transaction)
}

const bundle = (root: Hash, transaction: SignedHydratedTransactionWithHashMeta) => {
  const payloads = flattenHydratedTransaction(transaction).flatMap(p => PayloadBuilder.omitStorageMeta(p))
  return new PayloadBuilder<PayloadBundle>({ schema: PayloadBundleSchema })
    .fields({ payloads, root })
    .build()
}
