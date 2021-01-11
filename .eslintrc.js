module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  globals: {
    __DEV__: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y', 'import', 'react-hooks', 'prettier'],
  rules: {
    'prettier/prettier': 'error',

    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',

    'react-native/no-raw-text': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    'import/prefer-default-export': 'off',

    'global-require': 'off',

    'no-console': ['error', { allow: ['tron'] }],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    camelcase: 'off',
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src',
      },
    },
  },
};
