module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*js', '*jsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'react/react-in-jsx-scope': 'off',
        semi: ['error', 'never'],
        curly: 'off',
        'jsx-quotes': ['error', 'prefer-single'],
      },
    },
  ],
}
