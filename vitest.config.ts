import { config } from 'dotenv'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

config({ quiet: true })

export default defineConfig({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  plugins: [(tsconfigPaths as any)()],
  test: {
    globals: false,
    watch: false,
  },
})
