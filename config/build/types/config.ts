export type BuildMode = 'development' | 'production'

export interface BuildEnv {
    mode: BuildMode
}

export interface BuildPaths {
    entry: string
    html: string
    output: string
    src: string
}

export interface BuildOptions {
    mode: BuildMode
    paths: BuildPaths
    isDev: boolean
}