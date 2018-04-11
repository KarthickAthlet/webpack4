const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

// const bundleExtractPlugin = new ExtractTextPlugin({
//     filename: 'css/bundle.css',
// });

module.exports = {    
    // devtool: "sourcemap",
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                    options: {
                        minimize: true
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
            // ,
            // {
            //     test: /\.scss$/,
            //     use: [{
            //         loader: "style-loader"
            //     }, {
            //         loader: "css-loader", options: {
            //             sourceMap: true
            //         }
            //     }, {
            //         loader: "sass-loader", options: {
            //             sourceMap: true
            //         }
            //     }]
            // }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
        // ,
        // new ExtractTextPlugin({
        //     filename: 'css/bundle.css',
        // })
    ]
};