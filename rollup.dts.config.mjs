import dts from 'rollup-plugin-dts'
import alias from '@rollup/plugin-alias'

import { readFileSync } from 'node:fs'
import PATH from 'node:path'

export function parseTsconfigAliases(tsconfigPath = './tsconfig.json') {
  const tsconfig = JSON.parse(readFileSync(tsconfigPath, 'utf8'))
  const baseUrl = tsconfig.compilerOptions?.baseUrl || '.'
  const paths = tsconfig.compilerOptions?.paths || {}

  return Object.entries(paths).map(([alias, targets]) => {
    const find = alias.replace(/\/\*$/, '')
    const replacement = PATH.resolve(
      baseUrl,
      targets[0].replace(/\/\*$/, ''),
    )
    return { find, replacement }
  })
}

const aliasEntries = parseTsconfigAliases()

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'es',
      sourcemap: true,
    },
    plugins: [
      alias({ entries: aliasEntries }),
      dts(),
    ],
  },
]
