'use strict';

module.exports = {
  root: true,
  extends: 'babel',
  plugins: ['prettier'],
  rules: {
    'max-len': 'off',
    strict: 'error',
    'prettier/prettier': 'error',
  },
  env: {
    node: true,
  },
  parserOptions: {
    sourceType: 'script',
    parser: 'babel-eslint',
  },
  overrides: [
    {
      files: ['test/**/*'],
      env: {
        mocha: true,
      },
    },
  ],
};
