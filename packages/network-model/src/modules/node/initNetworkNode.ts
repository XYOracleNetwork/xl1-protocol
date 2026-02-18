import type { AttachableNodeInstance } from '@xyo-network/node-model'
import type { WalletInstance } from '@xyo-network/wallet-model'

import type { NetworkBootstrap } from '../../models/index.ts'
import { getNetworkNode } from './getNetworkNode.ts'
import { getNetworkNodes } from './getNetworkNodes.ts'

export const initNetworkNode = async (activeNetwork: NetworkBootstrap, wallet: WalletInstance): Promise<AttachableNodeInstance> => {
  const networkNodeMap = getNetworkNodes()
  if (networkNodeMap.has(activeNetwork.url)) return networkNodeMap.get(activeNetwork.url)!

  const activeNetworkNode = await getNetworkNode(wallet)
  networkNodeMap.set(activeNetwork.url, activeNetworkNode)

  return activeNetworkNode
}
