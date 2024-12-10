import { BuildOptions } from "./types/config"
import webpack from 'webpack'
import { buildDevServer } from './buildDevServer'
import { buildPlugins } from "./buildPlugins"
import { buildResolvers } from "./buildResolvers"
import { buildLoaders } from "./buildLoaders"

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {

    const { mode, isDev, paths } = options

    return {
        mode,
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: '[name].[contenthash:8].js',
            clean: true
        },
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        plugins: buildPlugins(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer() : undefined
    }
}