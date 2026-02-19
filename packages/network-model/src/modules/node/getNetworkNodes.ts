import type { AttachableNodeInstance } from '@xyo-network/sdk-js'

const networkNodeMap = new Map<string, AttachableNodeInstance>()

export const getNetworkNodes = () => {
  return networkNodeMap
}
