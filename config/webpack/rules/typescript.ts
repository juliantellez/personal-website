import {Rule} from 'webpack';

const typescriptRule: Rule = {
    test: /\.(tsx?|js)?$/,
    exclude: /node_modules/,
    loader: 'ts-loader',
    options: {
        transpileOnly: true,
        experimentalWatchApi: true
    }
};

export default typescriptRule;
