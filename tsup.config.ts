import { TsconfigPathsPlugin } from '@esbuild-plugins/tsconfig-paths'
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  sourcemap: true,
  esbuildPlugins: [TsconfigPathsPlugin({ tsconfig: './tsconfig.json' })],
})
