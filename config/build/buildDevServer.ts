import { Configuration } from 'webpack-dev-server'

export const buildDevServer = (): Configuration => {
    return {
        port: 3000,
        hot: true,
        open: true,
        historyApiFallback: true
    }
}