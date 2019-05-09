import * as path from 'path';
import {Configuration} from 'webpack';

import createWebpackPluginsArray from './createPluginsArray';
import EnvironmentArgs from './EnvironmentArgs';
import typescriptRule from './rules/typescript';

const PATH_SRC = path.resolve(__dirname, '..', '..', 'src', 'main');
const PATH_BUILD = path.resolve(__dirname, '..', '..', 'dist');

const createWebpackConfig = (args: any): Configuration => {
    const envArgs = new EnvironmentArgs(args);

    return {
        mode: envArgs.NODE_ENV,
        entry: {
            main: PATH_SRC
        },
        output: {
            filename: '[name].js',
            path: PATH_BUILD
        },
        devtool: 'source-map',
        resolve: {
            extensions: ['.ts', '.tsx', '.js']
        },
        module: {
            rules: [typescriptRule]
        },
        plugins: createWebpackPluginsArray(envArgs)
    };
};

export default createWebpackConfig;
