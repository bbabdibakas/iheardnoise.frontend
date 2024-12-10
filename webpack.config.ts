import path from "path";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";

export default (env: BuildEnv) => {
    const mode = env.mode || 'development'
    const isDev = mode === 'development'

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        output: path.resolve(__dirname, 'dist'),
        src: path.resolve(__dirname, 'src'),
    }

    return buildWebpackConfig({ mode, isDev, paths })
};
