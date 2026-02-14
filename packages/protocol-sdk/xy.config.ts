import type { XyTsupConfig } from '@xylabs/ts-scripts-yarn3'
const config: XyTsupConfig = {
  compile: {
    entryMode: 'custom',
    browser: {},
    neutral: { src: { entry: ['index.ts', 'test/index.ts'] } },
    node: { src: { entry: ['index-node.ts', 'test/index.ts'] } },
  },
}

export default config
