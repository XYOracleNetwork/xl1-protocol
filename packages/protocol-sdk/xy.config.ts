import type { XyTsupConfig } from '@xylabs/ts-scripts-yarn3'
const config: XyTsupConfig = {
  compile: {
    entryMode: 'custom',
    browser: {},
    neutral: { src: { entry: ['index.ts', 'test/index.ts', 'config/getFileConfig.ts'] } },
    node: {},
  },
}

export default config
