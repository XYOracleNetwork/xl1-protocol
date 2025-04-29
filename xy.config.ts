import type { XyTsupConfig } from '@xylabs/ts-scripts-yarn3'
const config: XyTsupConfig = {
  compile: {
    browser: {},
    neutral: { src: { entry: ['src/index.ts', 'src/cli/index.ts'] } },
    node: { src: { entry: ['src/index.ts', 'src/cli/index.ts'] } },
  },
}

export default config
