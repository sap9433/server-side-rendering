var webpack = require('webpack');
var path = require('path');

var commonConfig = {
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [
      // TypeScript
      { test: /\.ts$/, loader: 'ts-loader' },
      { test: /\.css$/, loader: "style!css" }
    ]
  },
  output: {
        path: __dirname,
        filename: "./dist/[name].js",
        sourceMapFilename: "./dist/[name].map"
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true)
  ]
};


var clientConfig = {
  target: 'web',
  entry: './app/main'
};


var serverConfig = {
  target: 'node',
  entry: './app/appcomponent'
  // externals: checkNodeImport,
  // path: __dirname
};



// Default config
var defaultConfig = {
  module: {
    noParse: [
      path.join(__dirname, 'zone.js', 'dist'),
      path.join(__dirname, 'angular2', 'bundles')
    ]
  },
  context: __dirname
}



var webpackMerge = require('webpack-merge');
module.exports = [
  // Client
  //webpackMerge({}, defaultConfig, commonConfig, clientConfig),

  // Server
  webpackMerge({}, defaultConfig, commonConfig, serverConfig)
]

// Helpers
function checkNodeImport(context, request, cb) {
  if (!path.isAbsolute(request) && request.charAt(0) !== '.') {
    cb(null, 'commonjs ' + request); return;
  }
  cb();
}

// module.exports = {
//     entry: {
//      app: "./app/main.ts",
//      shims: ['es6-shim', 'reflect-metadata', 'rxjs', 'zone.js'] 
//     },
//     output: {
//         path: __dirname,
//         filename: "./dist/[name].js",
//         sourceMapFilename: "./dist/[name].map"
//     },
//     resolve: {
//         extensions: ['', '.js', '.ts']
//     },
//     module: {
//         loaders: [
//             { test: /\.css$/, loader: "style!css" },
//             { test: /\.ts?$/, loader: 'ts-loader' }
//         ]
//     },
//     devtool: "#cheap-source-map"
// };
