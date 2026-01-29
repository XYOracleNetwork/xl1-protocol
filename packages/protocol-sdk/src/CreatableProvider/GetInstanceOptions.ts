import type { Labels } from '@xylabs/sdk-js'

export interface GetInstanceOptions {
  start?: boolean
}

export interface ProviderFactoryGetInstanceOptions extends GetInstanceOptions {
  labels?: Labels
}
