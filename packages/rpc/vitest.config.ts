import { config } from 'dotenv'
import { defineConfig } from 'vitest/config'

config({ quiet: true })

export default defineConfig({
  test: {
    globals: true,
    testTimeout: 100_000,
  },
})
