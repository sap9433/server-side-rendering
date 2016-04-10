module.exports = {
    entry: {
     app: "./app/main.ts",
     shims: ['es6-shim', 'reflect-metadata', 'rxjs', 'zone.js'] 
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