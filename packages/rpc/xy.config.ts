import type { XyTsupConfig } from '@xylabs/ts-scripts-yarn3'
const config: XyTsupConfig = {
  compile: {
    entryMode: 'custom',
    browser: {},
    node: { src: { entry: ['index-node.ts'] } },
    neutral: { src: { entry: ['index.ts'] } },
  },
}

export default config
