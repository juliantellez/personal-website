import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as morgan from 'morgan';
import * as path from 'path';
import * as webpack from 'webpack';
import * as createWebpackMiddleware from 'webpack-dev-middleware';
import * as webpackHotMiddleware from 'webpack-hot-middleware';

import config from './config'

import createWebpackConfig from '../config/webpack/createWebpackConfig';

const webpackConfig: webpack.Configuration = createWebpackConfig();

const server = express();
const compiler = webpack(webpackConfig);

const webpackMiddleware = createWebpackMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath
});

server.use(bodyParser.json());
server.use(morgan('dev'));
server.use('/assets', express.static(config.assetPath));

server.use(webpackMiddleware);
server.use(webpackHotMiddleware(compiler));

server.get('/*', (_, res) => {
    res.write(
        webpackMiddleware.fileSystem.readFileSync(
            path.join(config.distPath, 'index.html')
        )
    );
    res.end();
});

server.listen(config.port, config.ip, () => {
    // tslint:disable-next-line
    console.log(
        `[DEV SERVER] listening on localhost:${config.port}`
    );
});
