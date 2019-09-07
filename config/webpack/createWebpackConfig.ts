import * as path from 'path';
import {Configuration} from 'webpack';

import Environment from './Constants/Environment';
import createWebpackPluginsArray from './createPluginsArray';
import EnvironmentArgs from './EnvironmentArgs';
import cssRule from './rules/css';
import typescriptRule from './rules/typescript';

const PATH_SRC = path.resolve(__dirname, '..', '..', 'src', 'main');
const PATH_BUILD = path.resolve(__dirname, '..', '..', 'dist');

const createWebpackConfig = (args: any = {}): Configuration => {
    const envArgs = new EnvironmentArgs(args);

    return {
        mode: envArgs.isProduction()
            ? Environment.PRODUCTION
            : Environment.DEVELOPMENT,
        entry: envArgs.isProduction()
            ? PATH_SRC
            : [PATH_SRC, 'webpack-hot-middleware/client?reload=true'],
        output: {
            chunkFilename: 'chunk.[name].[contenthash].js',
            filename: '[name].js',
            path: PATH_BUILD,
            publicPath: '/'
        },
        devtool: envArgs.isProduction()
            ? 'source-map'
            : 'cheap-eval-source-map',
        cache: envArgs.isProduction() ? false : true,
        optimization: {
            splitChunks: {
                chunks: 'initial',
                cacheGroups: {
                    vendors: false,
                    default: false
                } as any
            }
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js']
        },
        module: {
            rules: [cssRule, typescriptRule]
        },
        plugins: createWebpackPluginsArray(envArgs)
    };
};

export default createWebpackConfig;
