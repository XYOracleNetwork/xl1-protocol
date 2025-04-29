import {
  typescriptConfig,
  unicornConfig,
  workspacesConfig,
  rulesConfig,
  sonarConfig,
  importConfig,
} from '@xylabs/eslint-config-flat'

export default [
  { ignores: ['.yarn', '**/dist', '**/build', '**/public', '**/storybook-static', '**/.storybook', 'scripts', '**/node_modules', '.dependency-cruiser.mjs'] },
  unicornConfig,
  workspacesConfig,
  rulesConfig,
  typescriptConfig,
  importConfig,
  sonarConfig,
  {
    rules: {
      'import-x/no-unresolved': ['off'],
      'import-x/no-internal-modules': ['off'],
      'sonarjs/prefer-single-boolean-return': ['off'],
    },
  },
  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_', varsIgnorePattern: '^_', ignoreRestSiblings: true,
        },
      ],
    },
  },
]
