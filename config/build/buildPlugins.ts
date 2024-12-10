import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { WebpackPluginInstance } from 'webpack'
import { BuildOptions } from './types/config'

export const buildPlugins = ({ paths }: BuildOptions): WebpackPluginInstance[] => {
    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
    ]
}