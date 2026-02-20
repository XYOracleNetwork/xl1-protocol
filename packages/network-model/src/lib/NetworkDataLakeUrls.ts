import type { GatewayName } from '@xyo-network/xl1-sdk'
import {
  LocalNetwork, MainNetwork, SequenceNetwork,
} from '@xyo-network/xl1-sdk'

// Map of network Ids to their corresponding Data Lake URLs
// This lives here for now but could be moved to a protocol package if we want to share more broadly.
export const NetworkDataLakeUrls = {
  [MainNetwork.id]: 'https://api.archivist.xyo.network/dataLake',
  [SequenceNetwork.id]: 'https://beta.api.archivist.xyo.network/dataLake',
  [LocalNetwork.id]: 'http://localhost:8080/dataLake',
} as const satisfies Record<GatewayName, string>
