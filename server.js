const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.config');
const proxy = require('express-http-proxy');
const express = require('express');
const webpackMiddleWare = require('webpack-dev-middleware');

const app = express();

app.use(webpackMiddleWare(webpack(config)));

app.use(express.static(path.resolve(__dirname, './')));

app.use('/api', proxy('https://api.github.com', {
  forwardPath: function(req, res) {
    return require('url').parse(req.url).path;
  }
}));

app.listen(9876, () => console.log('Listening @ localhost:3000'));
