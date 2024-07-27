import globals from 'globals'
import pluginJs from '@eslint/js'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  { languageOptions: { globals: globals.browser } },
  {
    ignores: [
      'dist/**',
      'webpack.common.js',
      'webpack.dev.js',
      'webpack.prod.js',
    ],
  },
  {
    rules: { semi: 'off' },
  },
  pluginJs.configs.recommended,
  eslintPluginPrettierRecommended,
]
