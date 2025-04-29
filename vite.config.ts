import { config } from 'dotenv'
import { defineConfig } from 'vite'
import topLevelAwait from 'vite-plugin-top-level-await'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TopLevelAwaitPlugin = topLevelAwait as any

config()

const parsedPort = Number.parseInt(process.env.PORT ?? '')
const port = Number.isNaN(parsedPort) ? 3000 : parsedPort

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  build: { target: 'esnext' },
  // @bitauth/libauth does not have top level awaits that SB does not like
  optimizeDeps: { exclude: ['@bitauth/libauth'] },
  plugins: [{
    ...TopLevelAwaitPlugin({
      // The export name of top-level await promise for each chunk module
      promiseExportName: '__tla',
      // The function to generate import names of top-level await promise in each chunk module
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      promiseImportName: (i: any) => `__tla_${i}`,
    }),
    apply: 'serve',
  }],
  server: { port, sourcemapIgnoreList: () => true },
})
