module.exports = {
    entry: {
     app: "./app/main.ts",
     shims: ['angular2/bundles/angular2-polyfills.js'] 
     // All required dependencies like'es6-shim', 'es6-promise', 'reflect-metadata',
     // 'zone.js' etc are included in above bundle. So we can list them separately here
     //  or directly use angular2-polyfills.js bundle;
    },
    output: {
        path: __dirname,
        filename: "./dist/[name].js"
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.ts?$/, loader: 'ts-loader' }
        ]
    }
};