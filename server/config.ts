import * as path from 'path';

const PORT = 4000;
const IP = '0.0.0.0';
const ROOT = path.resolve(__dirname, '..');
const ASSETS_PATH = path.join(ROOT, 'assets');
const DIST_PATH = path.join(ROOT, 'dist');

const config = {
    port: PORT,
    ip: IP,
    root: ROOT,
    assetPath: ASSETS_PATH,
    distPath: DIST_PATH,
    endpoints: {}
};

export default config;
