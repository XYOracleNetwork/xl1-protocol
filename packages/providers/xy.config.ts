import type { XyTsupConfig } from '@xylabs/ts-scripts-yarn3'
const config: XyTsupConfig = {
  compile: {
    entryMode: 'custom',
    browser: { src: { entry: ['index.ts'] } },
    node: { src: { entry: ['index.ts'] } },
    neutral: { src: { entry: ['index.ts'] } },
  },
}

export default config
