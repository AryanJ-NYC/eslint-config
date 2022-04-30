module.exports = {
  globals: {
    process: true,
  },
  env: { es6: true, jest: true, node: true },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'object-shorthand': 'error',
    'import/namespace': 'off',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'no-shadow': 'error',
    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-expect-error': false }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/switch-exhaustiveness-check': 'warn',
  },
};
