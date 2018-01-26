const webpack = require('webpack');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './client/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: {
        main: ['babel-polyfill', './client/index.js'],
        vendor: [
            "react",
            "react-dom",
            "@myob/myob-widgets",
            "@myob/myob-styles",
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    output: {
        path: path.resolve('dist'),
        filename: "[name].[chunkhash].js",
        publicPath: "/",
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ["es2015", "react", "stage-2"]
                }
            },
            {
                test: /\.css$/,
                loaders: [
                    "style-loader",
                    "css-loader",
                ],
            },
            {
                test: /\.(otf|eot|svg|ttf|woff|png|cur|gif)/,
                options: {
                    name: "assets/[hash].[ext]",
                },
                loader: "file-loader",
            }
        ]
    },
    plugins: [HtmlWebpackPluginConfig,
        new webpack.HashedModuleIdsPlugin(),
        new BundleAnalyzerPlugin({analyzerMode: "static", openAnalyzer: false}),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
        })
    ]
};
    
