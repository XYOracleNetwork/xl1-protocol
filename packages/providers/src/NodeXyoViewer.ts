import { assertEx } from '@xylabs/sdk-js'
import type { ArchivistInstance } from '@xyo-network/archivist-model'
import { asAttachableArchivistInstance } from '@xyo-network/archivist-model'
import type { ModuleIdentifier } from '@xyo-network/module-model'
import type { NodeInstance } from '@xyo-network/node-model'
import type { XyoViewer } from '@xyo-network/xl1-protocol'
import { creatableProvider } from '@xyo-network/xl1-protocol-sdk'

import { SimpleXyoViewer, SimpleXyoViewerParams } from './SimpleXyoViewer.ts'

export interface NodeXyoViewerParams extends SimpleXyoViewerParams {
  node: NodeInstance
}

@creatableProvider()
export class NodeXyoViewer extends SimpleXyoViewer<NodeXyoViewerParams> implements XyoViewer {
  protected static readonly finalizedArchivistPath: ModuleIdentifier = 'XYOChain:Chain:Finalized'

  protected get node() {
    return this.params.node
  }

  static override async paramsHandler(params: Partial<NodeXyoViewerParams>): Promise<NodeXyoViewerParams> {
    const node = assertEx(params.node, () => 'NodeXyoViewer requires a node')
    const finalizedArchivist = await this.getFinalizedArchivistFromNode(node)
    return {
      ...await super.paramsHandler({ ...params, finalizedArchivist }),
      node,
    } satisfies NodeXyoViewerParams
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
