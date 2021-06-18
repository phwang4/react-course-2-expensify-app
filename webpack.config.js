const path = require('path')

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production'
  return {
    entry: './src/app.js',
    output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
    mode: 'development',
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties'] 
          }
        }
      }, {
        test:/\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
        }]
    },
    devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  }
}