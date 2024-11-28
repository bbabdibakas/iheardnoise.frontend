import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpackDevServer from 'webpack-dev-server';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

interface IEnv {
    mode: 'development' | 'production'
}

export default (env: IEnv) => {
    const mode = env.mode || 'development'
    const isDev = mode === 'development'

    const config: webpack.Configuration = {
        mode,
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        module: {
            rules: [
                {
                    test: /\.svg$/,
                    use: ['@svgr/webpack'],
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                                    localIdentName: isDev
                                        ? '[path][name]__[local]--[hash:base64:5]'
                                        : '[hash:base64:8]',
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
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
            mainFiles: ['index'],
            alias: {},
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[contenthash:8].js',
            clean: true
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public', 'index.html'),
            }),
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css',
            }),
        ],
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? {
            port: 3000,
            open: true,
            historyApiFallback: true
        } : undefined
    };

    return config
}