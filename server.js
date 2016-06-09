//import 'angular2-universal/polyfills';
  require('reflect-metadata');
  require('angular2-universal/polyfills').polyfills;
  const provide = require('angular2-universal').provide;
  const expressEngine = require('angular2-universal').expressEngine;
  const REQUEST_URL = require('angular2-universal').REQUEST_URL;
  const ORIGIN_URL = require('angular2-universal').ORIGIN_URL;
  const BASE_URL = require('angular2-universal').BASE_URL;
  const NODE_ROUTER_PROVIDERS = require('angular2-universal').NODE_ROUTER_PROVIDERS;
  const NODE_HTTP_PROVIDERS = require('angular2-universal').NODE_HTTP_PROVIDERS;
  const ExpressEngineConfig = require('angular2-universal').ExpressEngineConfig;
  const bodyParser = require('body-parser');

// Require the packages we need
const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.config');
const proxy = require('express-http-proxy');
const express = require('express');
const webpackMiddleWare = require('webpack-dev-middleware');


// Angular 2 Universal

const App = require('./app/appcomponent.ts').AppComponent;


// Build the app server
const app = express();

app.use(bodyParser.json());
app.engine('.html', expressEngine);
app.set('views', __dirname);
app.set('view engine', 'html');

const ROOT = path.join(path.resolve(__dirname, '..'));

//Create new bundle when files are changed. 
//app.use(webpackMiddleWare(webpack(config)));

function ngApp(req, res) {
  let baseUrl = '/';
  let url = req.originalUrl || '/';

  let config = {
    directives: [ App ],
    platformProviders: [
      provide(ORIGIN_URL, {useValue: 'http://localhost:3000'}),
      provide(BASE_URL, {useValue: baseUrl}),
    ],
    providers: [
      provide(REQUEST_URL, {useValue: url}),
      NODE_ROUTER_PROVIDERS,
      NODE_HTTP_PROVIDERS,
    ],
    async: true,
    preboot: false // { appRoot: 'app' } // your top level app component selector
  };

  res.render('index', config);
}

// Serve static files
app.use(express.static(ROOT, {index: false}));

function indexFile(req, res) {
  res.sendFile('/index.html', {root: __dirname});
}

app.use('/', ngApp);
app.use('/about', ngApp);
app.use('/mission', ngApp);



//Proxy for all req starting with leading /api in URL path
app.use('/api', proxy('https://api.github.com'));

// Start the server
app.listen(9876, () => console.log('Listening @ localhost:9876'));
