module.exports = {
  presets: [
    [
      '@babel/preset-env', {
        targets: {
          node: 'v14.16.0'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@': './src'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts',
    '**/*.test.ts'
  ]
}
