import type { NetworkId } from '@xyo-network/xl1-protocol'

import {
  LocalNetworkIconString, MainNetworkIconString, SequenceNetworkIconString,
} from '../icons/index.ts'
import type { NetworkBootstrap } from '../models/index.ts'
import { NetworkBootstrapSchema } from '../models/index.ts'

export const MainNetwork: NetworkBootstrap = {
  description: 'Main Network for XYO Layer 1',
  icon: MainNetworkIconString,
  id: 'mainnet' as NetworkId,
  name: 'Mainnet',
  schema: NetworkBootstrapSchema,
  symbol: 'XL1',
  url: 'https://api.chain.xyo.network',
  explorerUrl: 'https://explore.xyo.network',
}

export const SequenceNetwork: NetworkBootstrap = {
  description: 'Test Network for XYO Layer 1',
  icon: SequenceNetworkIconString,
  id: 'sequence' as NetworkId,
  name: 'Sequence',
  schema: NetworkBootstrapSchema,
  symbol: 'XL1',
  url: 'https://beta.api.chain.xyo.network',
  explorerUrl: 'https://beta.explore.xyo.network',
}

export const LocalNetwork: NetworkBootstrap = {
  description: 'Local Node',
  icon: LocalNetworkIconString,
  id: 'local' as NetworkId,
  name: 'Local',
  schema: NetworkBootstrapSchema,
  symbol: 'XL1',
  url: 'http://localhost:8080',
  explorerUrl: 'http://localhost:3000',
}

export const DefaultNetworks: NetworkBootstrap[] = [MainNetwork, SequenceNetwork, LocalNetwork]
