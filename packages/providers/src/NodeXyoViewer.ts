import { assertEx } from '@xylabs/sdk-js'
import type {
  ArchivistInstance, ModuleIdentifier, NodeInstance,
} from '@xyo-network/sdk-js'
import { asAttachableArchivistInstance } from '@xyo-network/sdk-js'
import type { XyoViewer } from '@xyo-network/xl1-protocol'
import { creatableProvider } from '@xyo-network/xl1-protocol-sdk'

import { SimpleXyoViewer, SimpleXyoViewerParams } from './SimpleXyoViewer.ts'

/** @deprecated use SimpleXyoViewer instead */
export interface NodeXyoViewerParams extends SimpleXyoViewerParams {
  node: NodeInstance
}

@creatableProvider()
/** @deprecated use SimpleXyoViewer instead */
// eslint-disable-next-line @typescript-eslint/no-deprecated
export class NodeXyoViewer extends SimpleXyoViewer<NodeXyoViewerParams> implements XyoViewer {
  protected static readonly finalizedArchivistPath: ModuleIdentifier = 'XYOChain:Chain:Finalized'

  protected get node() {
    return this.params.node
  }

  protected static getArchivist = async (node: NodeInstance, identifier: ModuleIdentifier) => {
    const archivist = await node.resolve(identifier)
    return assertEx(asAttachableArchivistInstance(archivist), () => `Could not resolve ${identifier} to an archivist instance`)
  }

  protected static async getFinalizedArchivistFromNode(node: NodeInstance): Promise<ArchivistInstance> {
    const resolved = await this.getArchivist(node, this.finalizedArchivistPath)
    return assertEx(resolved, () => `Could not resolve finalized archivist at ${this.finalizedArchivistPath}`)
  }
}
