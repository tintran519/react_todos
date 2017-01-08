var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: [//where webpack looks for file
      'webpack-dev-server/client?http://127.0.0.1:8080/',
      'webpack/hot/only-dev-server',//for live reloading
      './src'//file directory where webpack looks for file to run
            //no file specified, so look for index.js
  ],
  output: {//where webpack would output file, but webpack dev server doesnt
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'//file where webpack puts everything into
  },
  resolve: {//where webpack looks for file to bundle together
    modulesDirectories: ['node_modules', 'src'],
    extensions: ['', '.js']//extensions webpack will expect
  },
  module: {//where we define loaders
    loaders: [//one one loader for this b/c only need to know js files
    {
        test: /\.jsx?$/, //? indicates we can use jsx file ext.
        exclude: /node_module/,
        loader: ['react-hot', 'babel?presets[]=react,presets[]=es2015']//module installed to help load app
    }
    ]
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin(),//live reloading
      new webpack.NoErrosPlugin()//webpack won't compile if there are errors
  ]
}
