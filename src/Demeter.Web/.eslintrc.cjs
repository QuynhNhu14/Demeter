module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['mantine'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
}
