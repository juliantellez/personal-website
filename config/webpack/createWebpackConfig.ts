import * as path from 'path';
import {Configuration} from 'webpack';

import createWebpackPluginsArray from './createPluginsArray';
import EnvironmentArgs from './EnvironmentArgs';
import typescriptRule from './rules/typescript';

const PATH_SRC = path.resolve(__dirname, '..', '..', 'src', 'main');
const PATH_BUILD = path.resolve(__dirname, '..', '..', 'dist');

const createWebpackConfig = (envArgs: any): Configuration => {
    const environment = new EnvironmentArgs(envArgs);

    return {
        mode: environment.NODE_ENV,
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
        plugins: createWebpackPluginsArray(environment)
    };
};

export default createWebpackConfig;
