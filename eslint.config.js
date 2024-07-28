const globals = require('globals')
const pluginJs = require('@eslint/js')
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended')

module.exports = [
  { languageOptions: { globals: globals.browser } },
  {
    ignores: [
      'dist/**',
      'webpack.common.js',
      'webpack.dev.js',
      'webpack.prod.js',
      'eslint.config.js',
    ],
  },
  {
    rules: { semi: 'off' },
  },
  pluginJs.configs.recommended,
  eslintPluginPrettierRecommended,
]
