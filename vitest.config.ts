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
    projects: [
      {
        test: {
          name: 'offline',
          include: ['src/**/spec/**/*.spec.ts', 'packages/**/src/**/spec/**/*.spec.ts'],
          exclude: [
            'src/**/spec/online/**/*.spec.ts',
            'packages/**/src/**/spec/online/**/*.spec.ts',
          ],
          setupFiles: ['test/setup/offline.ts'],
        },
      },
      {
        test: {
          name: 'online',
          include: ['src/**/spec/online/**/*.spec.ts', 'packages/**/src/**/spec/online/**/*.spec.ts'],
          setupFiles: ['test/setup/online.ts'],
        },
      },
    ],
  },
})
