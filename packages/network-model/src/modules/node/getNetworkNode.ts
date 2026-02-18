import { ManifestWrapper } from '@xyo-network/manifest-wrapper'
import { ModuleFactoryLocator } from '@xyo-network/module-factory-locator'
import type { WalletInstance } from '@xyo-network/wallet-model'

import { NetworkNodeManifest } from '../../manifest/index.ts'

export const getNetworkNode = async (wallet: WalletInstance) => {
  const wrapper = new ManifestWrapper(NetworkNodeManifest, wallet, new ModuleFactoryLocator())
  const [node] = await wrapper.loadNodes()
  return node
}
