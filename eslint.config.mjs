import {
  typescriptConfig,
  unicornConfig,
  workspacesConfig,
  rulesConfig,
  importConfig,
} from '@xylabs/eslint-config-flat'

export default [
  { ignores: ['.yarn', '**/dist', '**/build', '**/public', '**/storybook-static', '**/.storybook', 'scripts', '**/node_modules', '.dependency-cruiser.mjs'] },
  unicornConfig,
  workspacesConfig,
  rulesConfig,
  typescriptConfig,
  {
    ...importConfig,
    rules: {
      ...importConfig.rules,
      'import-x/no-internal-modules': ['warn', { allow: ['vitest/config', 'ethers/utils', '*/index.ts', ...importConfig.rules['import-x/no-internal-modules'][1].allow] }],
      'import-x/no-unresolved': ['off'],
      'import-x/no-relative-packages': ['error'],
      'import-x/no-self-import': ['error'],
      'import-x/no-useless-path-segments': ['warn'],
      'sonarjs/prefer-single-boolean-return': ['off'],
    },
  },
  {
    rules: {
      '@stylistic/max-len': ['warn', { code: 200 }],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_', varsIgnorePattern: '^_', ignoreRestSiblings: true,
        },
      ],
    },
  },
]
