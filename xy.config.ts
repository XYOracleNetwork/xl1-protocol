import type { XyTsupConfig } from '@xylabs/ts-scripts-yarn3'
const config: XyTsupConfig = {
  compile: {
    browser: {},
    neutral: { src: { entry: ['src/index.ts', 'src/provider/v2/index.ts'] } },
    node: {},
  },
}

export default config
