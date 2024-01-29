module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          assets: './src/assets',
          components: './src/components',
          screens: './src/screens',
          utils: './src/utils',
          constants: './src/constants',
        },
      },
    ],
  ],
}
