const nodeExternals = require("webpack-node-externals");
const path = require("path");
const webpack = require("webpack");

module.exports = {
    output: {
        library: "myLib",
        filename: "[name].min.js",
        path: path.join(__dirname, "dist"),
        libraryTarget: "umd",
        umdNamedDefine: true
    },
    entry: {myLib: "./src/index.ts"},
    resolve: {
        extensions: [".ts"]
    },
    target: "node",
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "awesome-typescript-loader",
                exclude: /node_modules/,
                query: {
                    configFileName: "./src/tsconfig.json"
                }
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
                exclude: [
                    /node_modules/
                ]
            }
        ]
    },
    externals: [nodeExternals()],
    devtool: "source-map",
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        })
    ]
};