module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ca]ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: [
          'babel-loader',
          'vue-svg-loader',
        ],
      },
    ]
  }
}
