module.exports = {
  root: true,
  extends: [
    '@antfu',
  ],
  plugins: ['tailwindcss'],
  ignorePatterns: [],
  rules: {
    // javascript
    'curly': ['error', 'all'],
    'max-statements-per-line': ['error', { max: 1 }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],

    // vue
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'always',
    }],
    // 'vue/max-attributes-per-line': ['warn',
    //   {
    //     singleline: 4,
    //     multiline: {
    //       max: 1,
    //       allowFirstLine: false,
    //     },
    //   },
    // ],

    // typescript
    '@typescript-eslint/brace-style': 'off',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

    // tailwindcss
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/enforces-negative-arbitrary-values': 'warn',
    'tailwindcss/enforces-shorthand': 'warn',
    'tailwindcss/no-arbitrary-value': 'off',
    'tailwindcss/no-custom-classname': 'warn',
    'tailwindcss/no-contradicting-classname': 'error',
  },
}
