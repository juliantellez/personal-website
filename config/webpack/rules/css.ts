import * as postcssVariables from 'postcss-css-variables';
import * as postcssImport from 'postcss-import';
import {Rule} from 'webpack';

const postCss: Rule = {
    test: /\.s[ac]ss$/i,
    use: [
        'style-loader',
        {
            loader: 'css-loader',
            options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[name]___[local]___[hash:base64:5]',
                camelCase: true,
                url: true,
                import: true
            }
        },
        {
          loader: 'postcss-loader',
            options: {
                sourceMap: true,
                ident: 'postcss',
                plugins: [postcssImport(), postcssVariables()]
            }
        }
    ]
};

const sassCss: Rule = {
    test: /\.s[ac]ss$/i,
    use: [
        'style-loader',
        {
            loader: 'css-loader',
            options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[name]___[local]___[hash:base64:5]',
                camelCase: true,
                url: true,
                import: true
            }
        },
        {
            loader: 'sass-loader',
        }
    ]
};

/**
 * Imports raw css, helpful when using 3rd party libraries such as prism
 * e.g:
 * import 'prismjs/themes/prism-tomorrow?raw';
 */
const rawCss: Rule = {
    test: /\.css$/,
    resourceQuery: /^\?raw$/,
    use: ['style-loader', 'css-loader']
}

const cssRule: Rule = {
    oneOf: [
        rawCss,
        sassCss,
        postCss
    ]
}

export default cssRule;
