import type { AttachableNodeInstance } from '@xyo-network/node-model'

const networkNodeMap = new Map<string, AttachableNodeInstance>()

export const getNetworkNodes = () => {
  return networkNodeMap
}
