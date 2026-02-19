import type { Address } from '@xylabs/sdk-js'
import type {
  AccountInstance, Payload, Schema,
} from '@xyo-network/sdk-js'
import { Account } from '@xyo-network/sdk-js'
import type {
  AllowedBlockPayload, ChainId,
  SignedHydratedTransactionWithHashMeta,
  Transfer,
  XL1BlockNumber,
} from '@xyo-network/xl1-protocol'
import { asXL1BlockNumber, isAllowedBlockPayload } from '@xyo-network/xl1-protocol'

import { createTransferPayload } from '../createTransferPayload.ts'
import { buildTransaction } from './buildTransaction.ts'

export const buildRandomTransaction = async (
  chain: ChainId,
  payloads?: Payload[],
  account?: AccountInstance,
  nbf: XL1BlockNumber = asXL1BlockNumber(0, true),
  exp: XL1BlockNumber = asXL1BlockNumber(nbf + 1000, true),
  privatePayloadSchemas: Schema[] = [],
  receiverAddress?: Address,
): Promise<SignedHydratedTransactionWithHashMeta> => {
  const elevatedPayloads: AllowedBlockPayload[] = (payloads ?? []).filter(isAllowedBlockPayload)
  const additionalPayloads: Payload[] = (payloads ?? []).filter(payload => !isAllowedBlockPayload(payload))
  const sender = account ?? await Account.random()
  if (elevatedPayloads?.length === 0) {
    const receiver = receiverAddress ?? (await Account.random()).address
    const transferPayload: Transfer = createTransferPayload(sender.address, { [receiver]: 1n })
    elevatedPayloads.push(transferPayload)
  }
  const hydratedTransaction = await buildTransaction(chain, elevatedPayloads, additionalPayloads, sender, nbf, exp)
  // remove private payloads from hydrated
  return [hydratedTransaction[0], hydratedTransaction[1].filter(p => !privatePayloadSchemas.includes(p.schema))]
}
