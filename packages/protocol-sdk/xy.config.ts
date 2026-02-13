import type { XyTsupConfig } from '@xylabs/ts-scripts-yarn3'
const config: XyTsupConfig = {
  compile: {
    entryMode: 'custom',
    browser: {},
    neutral: { src: { entry: ['index-node.ts', 'index.ts', 'test/index.ts'] } },
    node: {},
  },
}

export default config
