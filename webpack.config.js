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
      { test: /\.css$/, loader: "style!css" },
      { test:  /\.json$/, loader: 'json-loader' }
    ]
  },
  // output: {
  //       path: __dirname,
  //       filename: "./dist/[name].js",
  //       sourceMapFilename: "./dist/[name].map"
  // },
  // plugins: [
  //   new webpack.optimize.OccurenceOrderPlugin(true)
  // ]
};


var clientConfig = {
  target: 'web',
  entry: ['./app/main'],
    output: {
        path: __dirname,
        filename: "./dist/client.js",
        sourceMapFilename: "./dist/client.map"
  },
   node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: false
  }
};


var serverConfig = {
  target: 'node',
  entry: ['./server'],
  externals: checkNodeImport,
  path: __dirname,
    output: {
        path: __dirname,
        filename: "./dist/server.js",
        sourceMapFilename: "./dist/server.map"
  },
  externals: checkNodeImport,
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: true
  }
};



// Default config
var defaultConfig = {
  module: {
    noParse: [
      path.join(__dirname, 'zone.js','dist'),
      path.join(__dirname, 'angular2', 'bundles')
    ]
  },
  context: __dirname
}



var webpackMerge = require('webpack-merge');
module.exports = [
  // Client
  webpackMerge({}, defaultConfig, commonConfig, clientConfig),

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
