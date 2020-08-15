module.exports = {
  env: { browser: true },
  extends: ['plugin:react/recommended', './index'],
  plugins: ['react-hooks'],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
  settings: { react: { version: 'detect' } },
};
