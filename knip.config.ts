import type { KnipConfig } from 'knip'

const config: KnipConfig = {
  entry: [
    'src/index.ts',
  ],
  project: ['src/**/*.ts*'],
  typescript: {
    config: [
      'packages/rpc/tsconfig.json',
    ],
  },
}

export default config
