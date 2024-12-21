import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpackDevServer from 'webpack-dev-server';

const config: webpack.Configuration = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                auto: (resPath: string) => Boolean(resPath.includes('.modules.')),
                                localIdentName: '[path][name]__[local]--[hash:base64:5]'
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [
            path.resolve(__dirname, 'src'),
            'node_modules'
        ],
        mainFiles: ['index'],
        alias: {},
    },
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[contenthash:8].js',
        clean: true
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        })
    ],
    devServer: {
        port: 3000,
        open: true,
        historyApiFallback: true
    }
};

export default config;