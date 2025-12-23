import { ManifestWrapper } from '@xyo-network/manifest-wrapper'
import { ModuleFactoryLocator } from '@xyo-network/module-factory-locator'
import { HDWallet } from '@xyo-network/wallet'

import { NetworkNodeManifest } from '../../manifest/index.ts'

export const getNetworkNode = async () => {
  const wrapper = new ManifestWrapper(NetworkNodeManifest, await HDWallet.random(), new ModuleFactoryLocator())
  const [node] = await wrapper.loadNodes()
  return node
}
