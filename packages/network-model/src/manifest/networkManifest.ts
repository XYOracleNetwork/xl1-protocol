import type { PackageManifestPayload } from '@xyo-network/sdk-js'

import node from './network.json' with { type: 'json' }

/**
 * Root Node Manifest
 */
export const NetworkNodeManifest = node as unknown as PackageManifestPayload
