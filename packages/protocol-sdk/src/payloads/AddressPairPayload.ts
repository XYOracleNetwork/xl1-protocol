import type { Address } from '@xylabs/sdk-js'
import { AsObjectFactory } from '@xylabs/sdk-js'
import { isPayloadOfSchemaType, type Payload } from '@xyo-network/payload-model'

export const AddressPairSchema = 'network.xyo.address.pair' as const
export type AddressPairSchema = typeof AddressPairSchema

export interface AddressFields {
  addresses: [Address, Address]
}

export type AddressPairPayload = Payload<AddressFields, AddressPairSchema>

/**
 * Identity function for determining if an object is an AddressPairPayload
 */
export const isAddressPairPayload = isPayloadOfSchemaType<AddressPairPayload>(AddressPairSchema)
export const asAddressPairPayload = AsObjectFactory.create(isAddressPairPayload)
export const asOptionalAddressPairPayload = AsObjectFactory.createOptional(isAddressPairPayload)
